param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^job-\d{2}$')]
    [string]$JobId,
    [string]$Model = 'gpt-5.4'
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $repo 'public\data\_stale_events_campaign.json'
$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$job = $manifest.jobs | Where-Object { $_.id -eq $JobId } | Select-Object -First 1
if (-not $job) { throw "Unknown campaign job: $JobId" }

$outputPath = Join-Path $repo ($job.output -replace '/', '\')
$lastMessagePath = Join-Path (Split-Path -Parent $outputPath) "$JobId.last-message.txt"
$prompt = @"
Work in $repo. Execute $JobId from public/data/_stale_events_campaign.json.
Read exactly that job's five target objects and write ONLY the output file declared by that job.
Research every target with live web search. For each POI provide 3-5 confirmed, visitor-relevant public events whose start date is >= 2026-07-26, preferring Aug-Dec 2026. Use official organizer, venue, municipality, tourism-office, or primary ticketing pages. source_url must be a direct real HTTP(S) URL, never a search URL or headline text. Include image_url and image_credit only for a durable direct image from an official source; omit uncertain images.
Every event must contain date in YYYY-MM-DD and title plus concise factual summary in de, hu, ro, en. Add fr for French targets when practical. Match the YHEvent schema in public/data/poi-yearly-highlights.json.
The output must be a JSON array [{id,events:[...]}] containing all five requested ids exactly once and at least one valid event per id. Validate JSON before finishing. Do not edit the main highlights sidecar, campaign manifest, delta, or any other file. Do not revert other users' changes.
"@

Push-Location $repo
try {
    $prompt | & codex exec --dangerously-bypass-approvals-and-sandbox --ephemeral --color never `
        -m $Model -c 'model_reasoning_effort="low"' -C $repo -o $lastMessagePath -
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

    if (-not (Test-Path -LiteralPath $outputPath)) { throw "$JobId produced no output file" }
    $payload = Get-Content -LiteralPath $outputPath -Raw | ConvertFrom-Json
    $actualIds = @($payload | ForEach-Object { $_.id })
    $expectedIds = @($job.targets | ForEach-Object { $_.id })
    if ($actualIds.Count -ne $expectedIds.Count) { throw "$JobId output count mismatch" }
    foreach ($id in $expectedIds) {
        if (@($actualIds | Where-Object { $_ -eq $id }).Count -ne 1) { throw "$JobId missing or duplicate id: $id" }
        $row = $payload | Where-Object { $_.id -eq $id } | Select-Object -First 1
        if (@($row.events).Count -lt 1) { throw "$JobId has no events for $id" }
    }
}
finally {
    Pop-Location
}

