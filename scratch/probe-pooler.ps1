# Script sementara: mencari region pooler Supabase yang benar untuk project baru.
# Metode: kirim Postgres StartupMessage; pooler region yang benar akan membalas
# Authentication request (type 'R'), region lain membalas Error (type 'E').
param(
    [Parameter(Mandatory = $true)][string]$ProjectRef
)

$regions = @(
    'us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'ca-central-1', 'sa-east-1',
    'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1', 'eu-central-2', 'eu-north-1',
    'ap-south-1', 'ap-southeast-1', 'ap-southeast-2', 'ap-southeast-3',
    'ap-northeast-1', 'ap-northeast-2', 'me-central-1', 'af-south-1'
)
$prefixes = @('aws-0', 'aws-1')
$user = "postgres.$ProjectRef"

function Probe([string]$HostName) {
    $c = New-Object System.Net.Sockets.TcpClient
    try {
        $iar = $c.BeginConnect($HostName, 5432, $null, $null)
        if (-not $iar.AsyncWaitHandle.WaitOne(6000)) { return 'timeout' }
        $c.EndConnect($iar)
        $payload = [System.Text.Encoding]::UTF8.GetBytes("user`0$user`0database`0postgres`0application_name`0probe`0`0")
        $ms = New-Object System.IO.MemoryStream
        $w = New-Object System.IO.BinaryWriter($ms)
        $w.Write([System.Net.IPAddress]::HostToNetworkOrder([int](4 + 4 + $payload.Length)))
        $w.Write([System.Net.IPAddress]::HostToNetworkOrder([int]196608))
        $w.Write($payload); $w.Flush()
        $s = $c.GetStream()
        $bytes = $ms.ToArray()
        $s.Write($bytes, 0, $bytes.Length); $s.Flush()
        $s.ReadTimeout = 6000
        $b1 = New-Object byte[] 1
        if ($s.Read($b1, 0, 1) -eq 0) { return 'closed' }
        $t = [char]$b1[0]
        $lb = New-Object byte[] 4
        [void]$s.Read($lb, 0, 4)
        [array]::Reverse($lb)
        $l = [BitConverter]::ToInt32($lb, 0)
        $pl = New-Object byte[] ([Math]::Max(0, $l - 4))
        if ($pl.Length -gt 0) { [void]$s.Read($pl, 0, $pl.Length) }
        if ($t -eq 'R') { return 'AUTH_OK' }
        if ($t -eq 'E') { return ('E:' + ([System.Text.Encoding]::UTF8.GetString($pl) -replace "`0", ' ').Trim()) }
        return "type=$t"
    } catch {
        return 'dnserr'
    } finally { $c.Close() }
}

foreach ($p in $prefixes) {
    foreach ($r in $regions) {
        $h = "$p-$r.pooler.supabase.com"
        $res = Probe $h
        if ($res -eq 'AUTH_OK') {
            Write-Host "DITEMUKAN -> $h : $res" -ForegroundColor Green
        } elseif ($res -notin @('dnserr', 'timeout')) {
            Write-Host "$h : $res"
        }
    }
}
Write-Host "Selesai."
