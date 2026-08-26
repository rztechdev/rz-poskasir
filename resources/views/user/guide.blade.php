@extends('layouts.app')

@section('title', 'Panduan Kasir')

@section('content')
<div class="max-w-3xl mx-auto space-y-6">

    <!-- Header -->
    <div class="rounded-3xl bg-gradient-to-br from-[#8b9b70] to-[#667451] text-white p-6 sm:p-8 shadow-lg shadow-[#8b9b70]/20">
        <span class="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white font-black text-[10px] uppercase tracking-wider">Panduan Kasir</span>
        <h1 class="text-2xl sm:text-3xl font-black tracking-tight mt-3">Cara Mengoperasikan Kasir</h1>
        <p class="text-sm text-white/90 mt-2 max-w-2xl leading-relaxed">
            Selamat datang! Tugas Anda sederhana: <strong>melayani pesanan, menerima pembayaran, dan mencetak struk</strong>. Ikuti langkah di bawah — hanya butuh beberapa menit untuk lancar.
        </p>
    </div>

    <!-- Info akses -->
    <div class="bg-[#eef2e8] rounded-3xl p-5 border border-[#d2dbc2] flex items-start gap-3">
        <div class="w-10 h-10 rounded-2xl bg-white text-[#8b9b70] flex items-center justify-center shrink-0 text-lg">🔗</div>
        <p class="text-xs sm:text-sm text-[#595952] leading-relaxed">
            Anda masuk lewat <strong>link kasir</strong> dari pemilik — <strong>tanpa akun atau kata sandi</strong>. Cukup buka link tersebut di HP/tablet, dan kasir langsung siap dipakai.
        </p>
    </div>

    <!-- Langkah transaksi (accordion) -->
    @php
        $steps = [
            ['Pilih Menu', 'Di halaman <strong>Kasir</strong>, ketuk item yang dipesan pelanggan. Item masuk ke keranjang. Gunakan pencarian atau kategori untuk menemukan menu lebih cepat.', '🍽️'],
            ['Buka Keranjang', 'Ketuk <strong>Buka Keranjang</strong>. Periksa pesanan, atur jumlah, atau hapus item bila salah. Untuk item harga tawar, sesuaikan harga dalam batas yang diizinkan.', '🛒'],
            ['Pilih Pembayaran', 'Pilih metode:<br>• <strong>Tunai</strong> — masukkan jumlah uang yang diterima, sistem menghitung <strong>kembalian</strong> otomatis.<br>• <strong>QRIS</strong> — tunjukkan QR ke pelanggan; nominalnya <strong>otomatis</strong> sesuai total belanja.', '💵'],
            ['Selesaikan & Cetak Struk', 'Transaksi langsung <strong>lunas</strong>. Muncul <strong>Nomor Pesanan</strong> (mis. #0002) untuk memanggil pelanggan saat pesanan siap. Ketuk <strong>Cetak Struk / PDF</strong> bila perlu.', '🧾'],
        ];
    @endphp
    <div x-data="{ open: 1 }" class="bg-white rounded-3xl border border-[#eceae0] shadow-xs divide-y divide-[#eceae0] overflow-hidden">
        @foreach($steps as $i => $s)
            @php $n = $i + 1; @endphp
            <div>
                <button type="button" @click="open === {{ $n }} ? open = null : open = {{ $n }}" class="w-full flex items-center gap-3.5 p-4 sm:p-5 text-left hover:bg-[#f9f8f3] transition-colors cursor-pointer">
                    <span class="w-8 h-8 rounded-full bg-[#8b9b70] text-white flex items-center justify-center font-black text-sm shrink-0">{{ $n }}</span>
                    <span class="flex-1 font-black text-[#2e2e2a] text-sm sm:text-base flex items-center gap-2"><span>{{ $s[2] }}</span> {{ $s[0] }}</span>
                    <svg class="w-5 h-5 text-[#595952] shrink-0 transition-transform" :class="open === {{ $n }} ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div x-show="open === {{ $n }}"
                     x-transition:enter="transition ease-out duration-200"
                     x-transition:enter-start="opacity-0 -translate-y-1"
                     x-transition:enter-end="opacity-100 translate-y-0"
                     x-cloak>
                    <p class="px-4 sm:px-5 pb-5 pl-[60px] sm:pl-[64px] text-xs sm:text-sm text-[#595952] leading-relaxed">{!! $s[1] !!}</p>
                </div>
            </div>
        @endforeach
    </div>

    <!-- Menu lain -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <div class="w-10 h-10 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center text-lg mb-2">📊</div>
            <h3 class="font-black text-sm text-[#2e2e2a]">Menu Laporan</h3>
            <p class="text-xs text-[#595952] mt-1 leading-relaxed">Lihat penjualan Anda: total omzet, tunai vs QRIS, dan rincian transaksi. Bisa disaring per tanggal dan diunduh (PDF/Word/Excel) untuk diserahkan ke pemilik.</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <div class="w-10 h-10 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center text-lg mb-2">🗒️</div>
            <h3 class="font-black text-sm text-[#2e2e2a]">Menu Catatan</h3>
            <p class="text-xs text-[#595952] mt-1 leading-relaxed">Daftar transaksi yang <strong>dibatalkan oleh pemilik</strong> beserta alasannya. Hanya untuk dilihat — supaya Anda tahu bila ada pesanan yang dibatalkan.</p>
        </div>
    </div>

    <!-- Batasan -->
    <div class="bg-white rounded-3xl p-6 border border-[#eceae0] shadow-xs">
        <h3 class="font-black text-[#2e2e2a] text-sm mb-3">Yang perlu diketahui</h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-[#595952]">
            <li class="flex gap-2.5"><span class="text-[#f4212e] font-black">✕</span><span><strong>Membatalkan transaksi</strong> hanya bisa dilakukan pemilik. Bila ada kesalahan/refund, laporkan ke pemilik.</span></li>
            <li class="flex gap-2.5"><span class="text-[#f4212e] font-black">✕</span><span><strong>Menambah / mengubah menu</strong> adalah tugas pemilik. Bila ada menu baru atau harga berubah, hubungi pemilik.</span></li>
            <li class="flex gap-2.5"><span class="text-[#8b9b70] font-black">✔</span><span>Bila kasir <strong>terkunci</strong>, artinya masa langganan toko berakhir — sampaikan ke pemilik untuk memperpanjang.</span></li>
        </ul>
    </div>
</div>
@endsection
