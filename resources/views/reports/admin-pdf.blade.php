<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <title>Laporan - {{ $activeEvent?->name ?: 'RZ Kasir' }}</title>
 <style>
 body {
 font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
 font-size: 10px;
 color: #111;
 line-height: 1.3;
 }
.header {
 text-align: center;
 border-bottom: 2px solid #8b9b70;
 padding-bottom: 10px;
 margin-bottom: 14px;
 }
.title {
 font-size: 16px;
 font-weight: bold;
 color: #2e2e2a;
 margin: 0 0 3px 0;
 }
.subtitle {
 font-size: 10px;
 color: #595952;
 margin: 0;
 }
.kpi-cards {
 width: 100%;
 margin-bottom: 14px;
 }
.kpi-card {
 background-color: #f9f8f3;
 border: 1px solid #eceae0;
 padding: 8px;
 border-radius: 6px;
 text-align: center;
 }
.kpi-title {
 font-size: 8px;
 text-transform: uppercase;
 color: #595952;
 font-weight: bold;
 }
.kpi-value {
 font-size: 12px;
 font-weight: bold;
 color: #8b9b70;
 margin-top: 2px;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 margin-top: 6px;
 }
 table.data-table th {
 background-color: #f9f8f3;
 color: #2e2e2a;
 font-weight: bold;
 font-size: 8px;
 text-transform: uppercase;
 border-bottom: 1px solid #cfd9de;
 padding: 5px 6px;
 text-align: left;
 }
 table.data-table td {
 padding: 5px 6px;
 border-bottom: 1px solid #eceae0;
 font-size: 9px;
 }
.text-right { text-align: right; }
.text-center { text-align: center; }
.bold { font-weight: bold; }
.footer {
 margin-top: 20px;
 text-align: right;
 font-size: 9px;
 color: #595952;
 }
 </style>
</head>
 @php
 $logoPath = public_path('images/logo_rz.png');
 $logoBase64 = file_exists($logoPath) ? 'data:image/png;base64,'. base64_encode(file_get_contents($logoPath)) : '';
 @endphp
 <div class="header">
 <table style="width: 100%; border: none; margin-bottom: 4px;">
 <tr>
 @if($logoBase64)
 <td style="width: 55px; border: none; text-align: left; vertical-align: middle; padding: 0;">
 <img src="{{ $logoBase64 }}" style="height: 48px; width: auto; object-fit: contain;">
 </td>
 @endif
 <td style="border: none; text-align: {{ $logoBase64 ? 'left' : 'center' }}; vertical-align: middle; padding: 0 0 0 10px;">
 <div class="title" style="margin: 0; font-size: 15px;">REKAPITULASI LAPORAN KEUANGAN PEMILIK </div>
 <div class="subtitle" style="font-weight: bold; color: #2e2e2a; font-size: 11px;">{{ $activeEvent?->name ?: 'RZ Kasir' }} &bull; {{ $activeEvent?->location ?: 'Lokasi Cabang' }}</div>
 <div class="subtitle">Masa Langganan: {{ $activeEvent?->start_date?->format('d/m/Y') }} s/d {{ $activeEvent?->end_date?->format('d/m/Y') }} &bull; Sistem RZ Kasir</div>
 <div class="subtitle" style="font-weight: bold;">Periode Laporan: {{ isset($period) ? $period->label() : 'Semua Periode' }}</div>
 </td>
 </tr>
 </table>
 </div>

 <table class="kpi-cards">
 <tr>
 <td width="50%" style="padding-right: 4px;">
 <div class="kpi-card" style="background-color: #eef2e8; border-color: #d2dbc2;">
 <div class="kpi-title" style="color: #8b9b70;">Total Omzet</div>
 <div class="kpi-value" style="color: #2e2e2a;">Rp {{ number_format($stats['total_gross'], 0, ',', '.') }}</div>
 </div>
 </td>
 <td width="50%" style="padding-left: 4px;">
 <div class="kpi-card">
 <div class="kpi-title">Jumlah Transaksi</div>
 <div class="kpi-value" style="color: #2e2e2a;">{{ number_format(count($transactions), 0, ',', '.') }}</div>
 </div>
 </td>
 </tr>
 </table>

 <table class="data-table">
 <thead>
 <tr>
 <th width="14%">Invoice</th>
 <th width="13%">Waktu</th>
 <th width="17%">Cabang</th>
 <th width="8%">Metode</th>
 <th width="20%" class="text-right">Total</th>
 <th width="8%" class="text-center">Status</th>
 </tr>
 </thead>
 <tbody>
 @forelse($transactions as $tx)
 <tr>
 <td class="bold">{{ $tx->invoice_code }}</td>
 <td>{{ $tx->paid_at ? $tx->paid_at->format('d/m/Y H:i') : $tx->created_at->format('d/m/Y H:i') }}</td>
 <td class="bold">{{ $tx->store?->name ?: '-' }}</td>
 <td style="text-transform: uppercase;">{{ $tx->payment_method }}</td>
 <td class="text-right bold">
 @if($tx->is_without_payment || ($tx->status === 'rejected' && $tx->rejection_reason === 'Tanpa Pembayaran'))
 -
 @else
 Rp {{ number_format($tx->total_amount, 0, ',', '.') }}
 @endif
 </td>
 <td class="text-center">
 <span style="font-weight: bold; font-size: 8px; text-transform: uppercase;">
 @if($tx->is_without_payment || ($tx->status === 'rejected' && $tx->rejection_reason === 'Tanpa Pembayaran'))
 TANPA PEMBAYARAN
 @else
 {{ $tx->status }}
 @endif
 </span>
 </td>
 </tr>
 @empty
 <tr>
 <td colspan="6" class="text-center" style="padding: 15px; color: #595952;">Belum ada data transaksi</td>
 </tr>
 @endforelse
 </tbody>
 </table>


 <div class="footer">
 Dicetak otomatis pada: {{ now()->format('d/m/Y H:i:s') }} | Sistem RZ Kasir
 </div>
</body>
</html>
