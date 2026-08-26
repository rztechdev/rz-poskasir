@php
    // Kartu besar "langganan habis" + tombol WA perpanjang.
    // $event opsional (untuk nama cabang & tanggal). $compact opsional.
    $ev = $event ?? \App\Models\Event::getActive();
    $waNumber = '6285151699883';
    $domain = rtrim(url('/'), '/');
    $cabangName = ($ev->name ?? null) ?: 'cabang saya';
    $endStr = ($ev && $ev->end_date) ? $ev->end_date->format('d/m/Y') : null;
    $daysAgo = ($ev && method_exists($ev, 'subscriptionDaysLeft') && $ev->end_date) ? abs((int) $ev->subscriptionDaysLeft()) : null;
    $waText = "Halo RZ Digital,\n\nSaya ingin memperpanjang masa langganan Kasir RZ.\n\nCabang: {$cabangName}\nDomain: {$domain}"
        . ($endStr ? "\nBerakhir sejak: {$endStr}" : '')
        . "\n\nMohon informasi paket dan cara perpanjangannya. Terima kasih.";
    $waUrl = 'https://wa.me/' . $waNumber . '?text=' . rawurlencode($waText);
@endphp

<div class="w-full rounded-3xl border border-[#f4212e]/25 bg-white shadow-lg shadow-[#f4212e]/5 overflow-hidden">
    <div class="bg-[#f4212e]/10 px-6 py-8 sm:px-10 sm:py-10 text-center">
        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm text-[#f4212e]">
            <svg class="w-9 h-9 sm:w-11 sm:h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a]">Masa Langganan Berakhir</h2>
        <p class="text-sm text-[#595952] font-medium mt-2 max-w-md mx-auto leading-relaxed">
            Langganan Kasir RZ untuk <span class="font-black text-[#2e2e2a]">{{ $cabangName }}</span>
            @if($endStr) telah berakhir pada <span class="font-black text-[#2e2e2a]">{{ $endStr }}</span>@endif.
            Kasir dikunci sementara (mode lihat saja) sampai langganan diperpanjang.
        </p>
    </div>

    <div class="px-6 py-6 sm:px-10 text-center space-y-4">
        <a href="{{ $waUrl }}" target="_blank" rel="noopener"
           class="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1eb257] text-white text-sm font-black shadow-md shadow-[#25D366]/25 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.48-8.464"/></svg>
            <span>Perpanjang via WhatsApp</span>
        </a>
        <p class="text-[11px] text-[#595952] font-medium">
            Chat otomatis ke Admin RZ (+62 851-5169-9883) sudah berisi identitas cabang Anda.
        </p>
    </div>
</div>
