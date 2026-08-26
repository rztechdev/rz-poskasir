<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <title>Struk - {{ $transaction->invoice_code }}</title>
 <style>
 @page {
 size: 80mm auto;
 margin: 0;
 }
 body {
 font-family: 'Courier New', Courier, monospace;
 font-size: 12px;
 width: 72mm;
 margin: 4mm auto;
 color: #000;
 }
.text-center { text-align: center; }
.text-right { text-align: right; }
.bold { font-weight: bold; }
.line { border-top: 1px dashed #000; margin: 6px 0; }
.double-line { border-top: 2px solid #000; margin: 6px 0; }
.item-row { display: flex; justify-content: space-between; margin-bottom: 3px; }
.flex-between { display: flex; justify-content: space-between; }
 @media print {
 body { width: 100%; margin: 0; }
 }
 </style>
</head>
<body onload="window.print()">
 <div class="text-center">
 <h3 class="bold" style="margin: 0; font-size: 15px;">{{ $transaction->store?->name ?: 'Cabang' }}</h3>
 <div style="font-size: 11px;">{{ $transaction->store?->booth_number ?: 'Cabang' }}</div>
 <div style="font-size: 10px;">{{ $transaction->store?->event?->name ?: 'RZ Kasir' }}</div>
 </div>

 <div class="double-line"></div>

 <!-- NOMOR PESANAN PROMINENT BOX -->
 <div class="text-center" style="margin: 6px 0; padding: 4px; border: 2px dashed #000; border-radius: 4px;">
 <div style="font-size: 9px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">NOMOR PESANAN</div>
 <div class="bold" style="font-size: 24px; letter-spacing: 3px;">#{{ str_pad($transaction->id, 4, '0', STR_PAD_LEFT) }}</div>
 </div>

 <div class="flex-between" style="font-size: 11px;">
 <span>No: {{ $transaction->invoice_code }}</span>
 <span>{{ $transaction->paid_at ? $transaction->paid_at->format('d/m/y H:i') : $transaction->created_at->format('d/m/y H:i') }}</span>
 </div>
 <div style="font-size: 11px;">Kasir: {{ $transaction->cashier?->name ?: 'Kasir' }}</div>
 <div style="font-size: 11px;">Metode: {{ strtoupper($transaction->payment_method) }}</div>

 <div class="line"></div>


 @foreach($transaction->items as $item)
 <div>
 <div class="bold">{{ $item->title }}</div>
 <div class="flex-between">
 <span>
 @if($item->is_negotiated)
 <s>Rp {{ number_format($item->original_price, 0, ',', '.') }}</s>
 @endif
 {{ $item->qty }} x Rp {{ number_format($item->price, 0, ',', '.') }}
 </span>
 <span>Rp {{ number_format($item->subtotal, 0, ',', '.') }}</span>
 </div>
 </div>
 @endforeach

 <div class="line"></div>

 <div class="flex-between bold" style="font-size: 13px;">
 <span>TOTAL:</span>
 <span>Rp {{ number_format($transaction->total_amount, 0, ',', '.') }}</span>
 </div>

 @if($transaction->payment_method === 'cash')
 <div class="flex-between" style="font-size: 11px; margin-top: 3px;">
 <span>Tunai:</span>
 <span>Rp {{ number_format($transaction->amount_paid, 0, ',', '.') }}</span>
 </div>
 <div class="flex-between bold" style="font-size: 12px;">
 <span>Kembalian:</span>
 <span>Rp {{ number_format($transaction->change_due, 0, ',', '.') }}</span>
 </div>
 @else
 <div class="flex-between" style="font-size: 11px; margin-top: 3px;">
 <span>QRIS Paid:</span>
 <span>Rp {{ number_format($transaction->total_amount, 0, ',', '.') }}</span>
 </div>
 @endif

 <div class="double-line"></div>

 <div class="text-center" style="font-size: 10px; margin-top: 8px;">
 <div>Terima kasih atas kunjungan Anda!</div>
 <div style="margin-top: 3px;">Simpan struk ini sebagai bukti pembayaran yang sah.</div>
 </div>
</body>
</html>
