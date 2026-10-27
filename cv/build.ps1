# Renders cv/Ammar-Maqsood-CV.html to PDF with headless Chrome and copies it into public/.
# Run from the repo root:  powershell -ExecutionPolicy Bypass -File cv/build.ps1
$root = Split-Path -Parent $PSScriptRoot
$html = Join-Path $PSScriptRoot "Ammar-Maqsood-CV.html"
$pdf  = Join-Path $PSScriptRoot "Ammar-Maqsood-CV.pdf"
$chrome = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $chrome) { throw "Chrome or Edge not found" }
& $chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=12000 `
  --print-to-pdf="$pdf" ("file:///" + ($html -replace "\\", "/")) 2>$null | Out-Null
Copy-Item $pdf (Join-Path $root "public\Ammar-Maqsood-CV.pdf") -Force
Write-Host "Wrote $pdf and public\Ammar-Maqsood-CV.pdf"
