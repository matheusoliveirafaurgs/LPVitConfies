$ErrorActionPreference = "Stop"

# ============================================================
# BUILD ADMIN - LPVitConfies
# ============================================================

$ProjectRoot = $PSScriptRoot
$BuildRoot = "F:\projetos\FAURGS\build"

$TimestampFile = Get-Date -Format "yyyyMMdd-HHmm"
$TimestampInfo = Get-Date -Format "dd/MM/yyyy HH:mm:ss"

$BuildName = "LPVitConfies-$TimestampFile"

$TempDeploy = Join-Path $ProjectRoot "deploy-temp"
$FinalFolder = Join-Path $BuildRoot $BuildName
$FinalZip = Join-Path $BuildRoot "$BuildName.zip"

Write-Host ""
Write-Host "=================================================="
Write-Host " BUILD ADMIN - LPVitConfies"
Write-Host "=================================================="
Write-Host ""

Set-Location $ProjectRoot

# ============================================================
# 1. INFORMAÇÕES DO GIT
# ============================================================

Write-Host "[1/9] Coletando informações da versão..."

try {
    $GitBranch = (git branch --show-current).Trim()
    $GitCommit = (git rev-parse HEAD).Trim()
    $GitCommitShort = (git rev-parse --short HEAD).Trim()
    $GitCommitMessage = (git log -1 --pretty=%s).Trim()
    $GitAuthor = (git log -1 --pretty="%an <%ae>").Trim()

    $GitStatusOutput = git status --porcelain

    if ($GitStatusOutput) {
        $GitStatus = "ATENCAO - Existem alteracoes locais nao commitadas"
    }
    else {
        $GitStatus = "Limpo - sem alteracoes locais"
    }
}
catch {
    $GitBranch = "Nao identificado"
    $GitCommit = "Nao identificado"
    $GitCommitShort = "Nao identificado"
    $GitCommitMessage = "Nao identificado"
    $GitAuthor = "Nao identificado"
    $GitStatus = "Nao foi possivel consultar o Git"
}

Write-Host "      Branch: $GitBranch"
Write-Host "      Commit: $GitCommitShort"
Write-Host "      Status: $GitStatus"

# ============================================================
# 2. GARANTE PASTA DE BUILDS
# ============================================================

Write-Host "[2/9] Preparando pasta de builds..."

if (!(Test-Path $BuildRoot)) {
    New-Item -ItemType Directory -Path $BuildRoot | Out-Null
}

# ============================================================
# 3. LIMPEZA
# ============================================================

Write-Host "[3/9] Limpando artefatos temporarios..."

Remove-Item "$ProjectRoot\.next" `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Remove-Item $TempDeploy `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Remove-Item $FinalFolder `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

Remove-Item $FinalZip `
    -Force `
    -ErrorAction SilentlyContinue

# ============================================================
# 4. BUILD NEXT.JS
# ============================================================

Write-Host "[4/9] Executando npm run build..."
Write-Host ""

npm run build

if ($LASTEXITCODE -ne 0) {
    throw "O build do Next.js falhou."
}

Write-Host ""

# ============================================================
# 5. VALIDA STANDALONE
# ============================================================

Write-Host "[5/9] Validando build standalone..."

$StandalonePath = Join-Path $ProjectRoot ".next\standalone"
$StaticSource = Join-Path $ProjectRoot ".next\static"

if (!(Test-Path $StandalonePath)) {
    throw @"
.next\standalone nao foi encontrado.

Verifique se o next.config.js possui:

output: 'standalone'
"@
}

if (!(Test-Path $StaticSource)) {
    throw ".next\static nao foi encontrado."
}

# ============================================================
# 6. MONTA PACOTE
# ============================================================

Write-Host "[6/9] Montando pacote de deploy..."

New-Item `
    -ItemType Directory `
    -Path $TempDeploy `
    -Force | Out-Null

# Copia standalone
Copy-Item `
    -Path "$StandalonePath\*" `
    -Destination $TempDeploy `
    -Recurse `
    -Force

# Copia .next/static
$StaticDestination = Join-Path $TempDeploy ".next\static"

New-Item `
    -ItemType Directory `
    -Path $StaticDestination `
    -Force | Out-Null

Copy-Item `
    -Path "$StaticSource\*" `
    -Destination $StaticDestination `
    -Recurse `
    -Force

# Copia public
$PublicSource = Join-Path $ProjectRoot "public"

if (Test-Path $PublicSource) {
    Copy-Item `
        -Path $PublicSource `
        -Destination $TempDeploy `
        -Recurse `
        -Force
}

# ============================================================
# 7. GERA BUILD-INFO.TXT
# ============================================================

Write-Host "[7/9] Gerando build-info.txt..."

try {
    $NodeVersion = (node --version).Trim()
}
catch {
    $NodeVersion = "Nao identificado"
}

try {
    $NpmVersion = (npm --version).Trim()
}
catch {
    $NpmVersion = "Nao identificado"
}

$BuildInfo = @"
============================================================
LPVitConfies - Informacoes do Build
============================================================

Build
------------------------------------------------------------
Nome: $BuildName
Gerado em: $TimestampInfo
Projeto: LPVitConfies

Git
------------------------------------------------------------
Branch: $GitBranch
Commit completo: $GitCommit
Commit curto: $GitCommitShort
Mensagem: $GitCommitMessage
Autor: $GitAuthor
Status do repositorio: $GitStatus

Ambiente
------------------------------------------------------------
Node.js: $NodeVersion
npm: $NpmVersion

Deploy
------------------------------------------------------------
Modo: Next.js Standalone
Arquivo de inicializacao: server.js

Origem
------------------------------------------------------------
$ProjectRoot

Destino
------------------------------------------------------------
$FinalFolder

============================================================
"@

$BuildInfoPath = Join-Path $TempDeploy "build-info.txt"

Set-Content `
    -Path $BuildInfoPath `
    -Value $BuildInfo `
    -Encoding UTF8

# ============================================================
# 8. VALIDA PACOTE
# ============================================================

Write-Host "[8/9] Validando pacote final..."

$RequiredPaths = @(
    @{
        Nome = "server.js"
        Caminho = (Join-Path $TempDeploy "server.js")
    },
    @{
        Nome = "node_modules"
        Caminho = (Join-Path $TempDeploy "node_modules")
    },
    @{
        Nome = ".next\static"
        Caminho = (Join-Path $TempDeploy ".next\static")
    },
    @{
        Nome = "public"
        Caminho = (Join-Path $TempDeploy "public")
    },
    @{
        Nome = "build-info.txt"
        Caminho = (Join-Path $TempDeploy "build-info.txt")
    }
)

foreach ($Item in $RequiredPaths) {

    if (!(Test-Path $Item.Caminho)) {
        throw "Validacao falhou. Nao encontrado: $($Item.Nome)"
    }

    Write-Host "      $($Item.Nome) OK"
}

# Move pacote validado para pasta definitiva
Move-Item `
    -Path $TempDeploy `
    -Destination $FinalFolder

# ============================================================
# 9. GERA ZIP
# ============================================================

Write-Host "[9/9] Gerando ZIP..."

Add-Type -AssemblyName System.IO.Compression.FileSystem

[System.IO.Compression.ZipFile]::CreateFromDirectory(
    $FinalFolder,
    $FinalZip,
    [System.IO.Compression.CompressionLevel]::Optimal,
    $false
)

if (!(Test-Path $FinalZip)) {
    throw "O ZIP final nao foi criado."
}

$ZipSizeMB = [math]::Round(
    (Get-Item $FinalZip).Length / 1MB,
    2
)

$FolderSizeBytes = (
    Get-ChildItem `
        -Path $FinalFolder `
        -Recurse `
        -File |
    Measure-Object -Property Length -Sum
).Sum

$FolderSizeMB = [math]::Round(
    $FolderSizeBytes / 1MB,
    2
)

# ============================================================
# RESULTADO
# ============================================================

Write-Host ""
Write-Host "=================================================="
Write-Host " BUILD CONCLUIDO COM SUCESSO"
Write-Host "=================================================="
Write-Host ""
Write-Host "Versao Git:"
Write-Host "  $GitCommitShort - $GitCommitMessage"
Write-Host ""
Write-Host "Pasta:"
Write-Host "  $FinalFolder"
Write-Host ""
Write-Host "ZIP:"
Write-Host "  $FinalZip"
Write-Host ""
Write-Host "Tamanho da pasta: $FolderSizeMB MB"
Write-Host "Tamanho do ZIP:   $ZipSizeMB MB"
Write-Host ""
Write-Host "Arquivo de rastreabilidade:"
Write-Host "  $FinalFolder\build-info.txt"
Write-Host ""
Write-Host "=================================================="