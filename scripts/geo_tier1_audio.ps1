$ErrorActionPreference = "Stop"

$root = "C:\Users\User\plizio-repo"
$audioDir = Join-Path $root "public\geo-audio"
$capitals = @(
  @{ slug = "berlin"; text = "Berlin" },
  @{ slug = "muenchen"; text = "München" },
  @{ slug = "stuttgart"; text = "Stuttgart" },
  @{ slug = "duesseldorf"; text = "Düsseldorf" },
  @{ slug = "hamburg"; text = "Hamburg" },
  @{ slug = "hannover"; text = "Hannover" },
  @{ slug = "wiesbaden"; text = "Wiesbaden" },
  @{ slug = "mainz"; text = "Mainz" },
  @{ slug = "saarbruecken"; text = "Saarbrücken" },
  @{ slug = "bremen"; text = "Bremen" },
  @{ slug = "kiel"; text = "Kiel" },
  @{ slug = "schwerin"; text = "Schwerin" },
  @{ slug = "potsdam"; text = "Potsdam" },
  @{ slug = "magdeburg"; text = "Magdeburg" },
  @{ slug = "erfurt"; text = "Erfurt" },
  @{ slug = "dresden"; text = "Dresden" }
)

Add-Type -AssemblyName System.Speech

New-Item -ItemType Directory -Force -Path $audioDir | Out-Null

foreach ($capital in $capitals) {
  $oggPath = Join-Path $audioDir ("city-" + $capital.slug + ".ogg")
  if (Test-Path $oggPath) { continue }

  $wavPath = Join-Path $audioDir ("city-" + $capital.slug + ".wav")
  $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $synth.Rate = -1
  $synth.SetOutputToWaveFile($wavPath)
  $synth.Speak($capital.text)
  $synth.Dispose()

  python -c "import soundfile as sf; data, sr = sf.read(r'$wavPath'); sf.write(r'$oggPath', data, sr, format='OGG', subtype='VORBIS')"
  Remove-Item $wavPath -Force
}

Write-Output "Tier 1 audio generated"
