<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <title>Laporan Penjualan - {{ $store->name }}</title>
 <style>
 body {
 font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
 font-size: 11px;
 color: #111;
 line-height: 1.4;
 }
.header {
 text-align: center;
 border-bottom: 2px solid #8b9b70;
 padding-bottom: 12px;
 margin-bottom: 16px;
 }
.title {
 font-size: 18px;
 font-weight: bold;
 color: #2e2e2a;
 margin: 0 0 4px 0;
 }
.subtitle {
 font-size: 11px;
 color: #595952;
 margin: 0;
 }
.meta-grid {
 width: 100%;
 margin-bottom: 16px;
 }
.meta-grid td {
 padding: 4px 0;
 vertical-align: top;
 }
.kpi-cards {
 width: 100%;
 margin-bottom: 20px;
 }
.kpi-card {
 background-color: #f9f8f3;
 border: 1px solid #eceae0;
 padding: 10px;
 border-radius: 8px;
 text-align: center;
 }
.kpi-title {
 font-size: 9px;
 text-transform: uppercase;
 color: #595952;
 font-weight: bold;
 }
.kpi-value {
 font-size: 14px;
 font-weight: bold;
 color: #8b9b70;
 margin-top: 4px;
 }
 table.data-table {
 width: 100%;
 border-collapse: collapse;
 margin-top: 8px;
 }
 table.data-table th {
 background-color: #f9f8f3;
 color: #2e2e2a;
 font-weight: bold;
 font-size: 9px;
 text-transform: uppercase;
 border-bottom: 1px solid #cfd9de;
 padding: 6px 8px;
 text-align: left;
 }
 table.data-table td {
 padding: 6px 8px;
 border-bottom: 1px solid #eceae0;
 font-size: 10px;
 }
.text-right { text-align: right; }
.text-center { text-align: center; }
.bold { font-weight: bold; }
.footer {
 margin-top: 30px;
 text-align: right;
 font-size: 10px;
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
 <div class="title" style="margin: 0; font-size: 15px;">LAPORAN PENJUALAN CABANG</div>
 <div class="subtitle" style="font-weight: bold; color: #2e2e2a; font-size: 11px;">{{ $store->name }} ({{ $store->booth_number ?: 'Cabang' }}) &bull; {{ $activeEvent?->name ?: 'RZ Kasir' }}</div>
 <div class="subtitle">Pemilik: {{ $user->name }} ({{ $user->phone ?: '-' }}) &bull; Sistem RZ Kasir</div>
 <div class="subtitle" style="font-weight: bold;">Periode: {{ isset($period) ? $period->label() : 'Semua Periode' }}</div>
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
 <div class="kpi-title">Transaksi Lunas</div>
 <div class="kpi-value" style="color: #2e2e2a;">{{ $stats['paid_count'] }} Tx ({{ $stats['cash_count'] }} Cash / {{ $stats['qris_count'] }} QRIS)</div>
 </div>
 </td>
 </tr>
 </table>

 <table class="data-table">
 <thead>
 <tr>
 <th width="16%">Invoice</th>
 <th width="14%">Waktu</th>
 <th width="8%">Metode</th>
 <th width="34%" class="text-right">Total Belanja</th>
 <th width="12%" class="text-center">Status</th>
 </tr>
 </thead>
 <tbody>
 @forelse($transactions as $tx)
 <tr>
 <td class="bold">{{ $tx->invoice_code }}</td>
 <td>{{ $tx->paid_at ? $tx->paid_at->format('d/m/Y H:i') : $tx->created_at->format('d/m/Y H:i') }}</td>
 <td style="text-transform: uppercase;">{{ $tx->payment_method }}</td>
 <td class="text-right bold">
 @if($tx->is_without_payment || ($tx->status === 'rejected' && $tx->rejection_reason === 'Tanpa Pembayaran'))
 -
 @else
 Rp {{ number_format($tx->total_amount, 0, ',', '.') }}
 @endif
 </td>
 <td class="text-center">
 <span style="font-weight: bold; font-size: 9px; text-transform: uppercase;">
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
 <td colspan="5" class="text-center" style="padding: 20px; color: #595952;">Belum ada riwayat transaksi</td>
 </tr>
 @endforelse
 </tbody>
 </table>

 <div class="footer">
 Dicetak otomatis pada: {{ now()->format('d/m/Y H:i:s') }} | Sistem RZ Kasir
 </div>
</body>
</html>
