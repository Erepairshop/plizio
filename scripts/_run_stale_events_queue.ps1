param(
    [ValidateRange(1, 10)]
    [int]$Concurrency = 5,
    [ValidateRange(0, 3600)]
    [int]$StartupDelaySeconds = 180,
    [ValidateRange(1, 100)]
    [int]$MaxAttempts = 20,
    [string]$Model = 'gpt-5.4',
    [ValidatePattern('^[a-z0-9-]+$')]
    [string]$CampaignName = 'stale-events-campaign'
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$dataDir = Join-Path $repo 'public\data'
$campaignDir = Join-Path $dataDir $CampaignName
$manifestPath = Join-Path $dataDir ("_" + ($CampaignName -replace '-', '_') + ".json")
$statusPath = Join-Path $campaignDir '_queue-status.json'
$lockPath = Join-Path $campaignDir '_queue.lock'
$workerPath = Join-Path $PSScriptRoot '_run_stale_event_job.ps1'
$logDir = Join-Path $campaignDir 'logs'
New-Item -ItemType Directory -Force -Path $campaignDir, $logDir | Out-Null

if (Test-Path -LiteralPath $lockPath) {
    $oldPid = [int](Get-Content -LiteralPath $lockPath -Raw)
    if (Get-Process -Id $oldPid -ErrorAction SilentlyContinue) {
        throw "Campaign queue already runs as PID $oldPid"
    }
    Remove-Item -LiteralPath $lockPath -Force
}
$PID | Set-Content -LiteralPath $lockPath -Encoding ascii

function Test-JobOutput([object]$Job) {
    $path = Join-Path $repo ($Job.output -replace '/', '\')
    if (-not (Test-Path -LiteralPath $path)) { return $false }
    try {
        $payload = Get-Content -LiteralPath $path -Raw | ConvertFrom-Json
        $actual = @($payload | ForEach-Object { $_.id })
        $expected = @($Job.targets | ForEach-Object { $_.id })
        if ($actual.Count -ne $expected.Count) { return $false }
        foreach ($id in $expected) {
            if (@($actual | Where-Object { $_ -eq $id }).Count -ne 1) { return $false }
            $row = $payload | Where-Object { $_.id -eq $id } | Select-Object -First 1
            if (@($row.events).Count -lt 1) { return $false }
        }
        return $true
    }
    catch { return $false }
}

function Write-QueueStatus([string]$State, [hashtable]$Active, [hashtable]$Attempts, [object[]]$Jobs) {
    $done = @($Jobs | Where-Object { Test-JobOutput $_ }).Count
    $status = [ordered]@{
        updatedAt = (Get-Date).ToUniversalTime().ToString('o')
        state = $State
        pid = $PID
        completed = $done
        total = $Jobs.Count
        active = @($Active.Values | ForEach-Object { $_.job.id })
        attempts = $Attempts
    }
    $status | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $statusPath -Encoding utf8
}

function Get-AttemptCount([hashtable]$Attempts, [string]$JobId) {
    if ($Attempts.ContainsKey($JobId)) { return [int]$Attempts[$JobId] }
    return 0
}

try {
    $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
    $jobs = @($manifest.jobs)
    $active = @{}
    $attempts = @{}

    Write-QueueStatus 'startup-delay' $active $attempts $jobs
    if ($StartupDelaySeconds -gt 0) { Start-Sleep -Seconds $StartupDelaySeconds }

    while ($true) {
        foreach ($key in @($active.Keys)) {
            $entry = $active[$key]
            if (-not $entry.process.HasExited) { continue }
            $entry.process.WaitForExit()
            $active.Remove($key)
            if (-not (Test-JobOutput $entry.job)) {
                Start-Sleep -Seconds 30
            }
        }

        $activeJobIds = @($active.Values | ForEach-Object { $_.job.id })
        $pending = @($jobs | Where-Object {
            -not (Test-JobOutput $_) -and
            -not ($activeJobIds -contains $_.id) -and
            ((Get-AttemptCount $attempts $_.id) -lt $MaxAttempts)
        })

        while ($active.Count -lt $Concurrency -and $pending.Count -gt 0) {
            $job = $pending[0]
            $pending = @($pending | Select-Object -Skip 1)
            $attempt = (Get-AttemptCount $attempts $job.id) + 1
            $attempts[$job.id] = $attempt
            $stdout = Join-Path $logDir "$($job.id).attempt-$attempt.out.log"
            $stderr = Join-Path $logDir "$($job.id).attempt-$attempt.err.log"
            $args = @(
                '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', $workerPath,
                '-JobId', $job.id, '-Model', $Model, '-CampaignName', $CampaignName
            )
            $process = Start-Process -FilePath 'powershell.exe' -ArgumentList $args -WindowStyle Hidden `
                -RedirectStandardOutput $stdout -RedirectStandardError $stderr -PassThru
            $active[$job.id] = @{ process = $process; job = $job; attempt = $attempt }
        }

        $done = @($jobs | Where-Object { Test-JobOutput $_ }).Count
        if ($done -eq $jobs.Count) {
            Write-QueueStatus 'complete' $active $attempts $jobs
            break
        }
        if ($active.Count -eq 0 -and $pending.Count -eq 0) {
            Write-QueueStatus 'failed' $active $attempts $jobs
            throw "Campaign stopped with $done/$($jobs.Count) jobs complete"
        }

        Write-QueueStatus 'running' $active $attempts $jobs
        Start-Sleep -Seconds 10
    }
}
finally {
    if (Test-Path -LiteralPath $lockPath) { Remove-Item -LiteralPath $lockPath -Force }
}
