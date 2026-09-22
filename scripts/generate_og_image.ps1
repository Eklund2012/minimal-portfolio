Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background #0a0a0a
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 10, 10))
$graphics.FillRectangle($bgBrush, 0, 0, $width, $height)

# Subtle background grid pattern
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(14, 255, 255, 255), 1)
for ($x = 0; $x -le $width; $x += 40) {
    $graphics.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -le $height; $y += 40) {
    $graphics.DrawLine($gridPen, 0, $y, $width, $y)
}

# Inner border container
$cardPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(35, 255, 255, 255), 1)
$graphics.DrawRectangle($cardPen, 48, 48, $width - 96, $height - 96)

# Modern subtle corner brackets
$cornerPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(160, 237, 237, 237), 2)
$cornerSize = 24
# Top-left
$graphics.DrawLine($cornerPen, 40, 40, 40 + $cornerSize, 40)
$graphics.DrawLine($cornerPen, 40, 40, 40, 40 + $cornerSize)
# Top-right
$graphics.DrawLine($cornerPen, $width - 40, 40, $width - 40 - $cornerSize, 40)
$graphics.DrawLine($cornerPen, $width - 40, 40, $width - 40, 40 + $cornerSize)
# Bottom-left
$graphics.DrawLine($cornerPen, 40, $height - 40, 40 + $cornerSize, $height - 40)
$graphics.DrawLine($cornerPen, 40, $height - 40, 40, $height - 40 - $cornerSize)
# Bottom-right
$graphics.DrawLine($cornerPen, $width - 40, $height - 40, $width - 40 - $cornerSize, $height - 40)
$graphics.DrawLine($cornerPen, $width - 40, $height - 40, $width - 40, $height - 40 - $cornerSize)

# Larger Fonts
$fontFamily = "Segoe UI"
$titleFont = New-Object System.Drawing.Font($fontFamily, 80, [System.Drawing.FontStyle]::Bold)
$subTitleFont = New-Object System.Drawing.Font($fontFamily, 34, [System.Drawing.FontStyle]::Regular)
$badgeFont = New-Object System.Drawing.Font($fontFamily, 14, [System.Drawing.FontStyle]::Bold)
$metaFont = New-Object System.Drawing.Font("Consolas", 17, [System.Drawing.FontStyle]::Regular)

# Brushes
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 240, 240, 240))
$lightGrayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 175, 175, 175))
$darkGrayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 115, 115, 115))
$badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 22, 22, 22))
$badgeBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 52, 52, 52), 1)

# Badge: "SOFTWARE ENGINEER"
$badgeText = "SOFTWARE ENGINEER"
$badgeMeasure = $graphics.MeasureString($badgeText, $badgeFont)
$badgeW = [int]$badgeMeasure.Width + 28
$badgeH = 40
$graphics.FillRectangle($badgeBgBrush, 96, 128, $badgeW, $badgeH)
$graphics.DrawRectangle($badgeBorderPen, 96, 128, $badgeW, $badgeH)
$graphics.DrawString($badgeText, $badgeFont, $lightGrayBrush, 110, 137)

# Main Name: "David Eklund" (Large 80pt bold)
$graphics.DrawString("David Eklund", $titleFont, $whiteBrush, 90, 195)

# Subtitle: "Software Engineer & MSc Student" (Larger 34pt text)
$graphics.DrawString("Software Engineer & MSc Student", $subTitleFont, $lightGrayBrush, 96, 332)

# Footer: domain & github link
$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 34, 197, 94))
$graphics.FillEllipse($dotBrush, 96, 496, 13, 13)
$graphics.DrawString("davideklund-portfolio.vercel.app", $metaFont, $lightGrayBrush, 122, 492)

$gitText = "github.com/Eklund2012"
$gitMeasure = $graphics.MeasureString($gitText, $metaFont)
$graphics.DrawString($gitText, $metaFont, $darkGrayBrush, ($width - 96 - [int]$gitMeasure.Width), 492)

# Save to public and dist
$outPublic = "c:\Projects\minimal-portfolio\public\og-image.png"
$bitmap.Save($outPublic, [System.Drawing.Imaging.ImageFormat]::Png)

$distDir = "c:\Projects\minimal-portfolio\dist"
if (Test-Path $distDir) {
    $outDist = "c:\Projects\minimal-portfolio\dist\og-image.png"
    Copy-Item -Path $outPublic -Destination $outDist -Force
}

$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Successfully generated $outPublic"
