@extends('layouts.app')

@section('title', 'Panduan Pemilik')

@section('content')
<div class="max-w-4xl mx-auto space-y-6">

    <!-- Header -->
    <div class="rounded-3xl bg-gradient-to-br from-[#8b9b70] to-[#667451] text-white p-6 sm:p-8 shadow-lg shadow-[#8b9b70]/20">
        <span class="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white font-black text-[10px] uppercase tracking-wider">Panduan Pemilik / Admin</span>
        <h1 class="text-2xl sm:text-3xl font-black tracking-tight mt-3">Kelola Toko Anda dengan RZ Kasir</h1>
        <p class="text-sm text-white/90 mt-2 max-w-2xl leading-relaxed">
            Sebagai <strong>pemilik</strong>, Anda punya akses penuh ke toko/cabang Anda: kelola menu, atur kasir, pantau penjualan, dan cetak laporan. Panduan singkat ini membantu Anda memahami setiap fitur.
        </p>
    </div>

    <!-- Peran Singkat -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <div class="w-10 h-10 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center text-lg mb-2">🛍️</div>
            <h3 class="font-black text-sm text-[#2e2e2a]">Anda — Pemilik</h3>
            <p class="text-xs text-[#595952] mt-1 leading-relaxed">Akses penuh: menu, kasir, laporan, & pembatalan transaksi.</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <div class="w-10 h-10 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center text-lg mb-2">🧑‍💼</div>
            <h3 class="font-black text-sm text-[#2e2e2a]">Kasir — Karyawan</h3>
            <p class="text-xs text-[#595952] mt-1 leading-relaxed">Cukup buka <strong>link kasir</strong>, tanpa akun. Hanya melayani transaksi & mencetak struk.</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <div class="w-10 h-10 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center text-lg mb-2">🏢</div>
            <h3 class="font-black text-sm text-[#2e2e2a]">RZ — Penyedia</h3>
            <p class="text-xs text-[#595952] mt-1 leading-relaxed">Menambah cabang baru & mengatur masa langganan Anda.</p>
        </div>
    </div>

    <!-- Langkah-langkah (accordion) -->
    @php
        $steps = [
            ['Siapkan Menu / Produk', 'Buka menu <strong>Produk</strong>. Klik <strong>Tambah Menu Baru</strong> untuk menambah item: nama, harga, kategori, dan foto (opsional). Aktifkan <strong>harga tawar</strong> bila item boleh dinego dalam rentang tertentu. Punya lebih dari satu cabang? Gunakan dropdown <strong>Semua Cabang</strong> di samping tombol tambah untuk melihat/menyaring menu tiap cabang.', '📋'],
            ['Bagikan Link Kasir ke Karyawan', 'Buka menu <strong>Cabang &amp; Kasir</strong>, klik tombol <strong>Link Kasir</strong> pada cabang. Salin link-nya dan berikan ke karyawan. Kasir cukup membuka link itu di HP/tablet — <strong>tanpa perlu akun atau kata sandi</strong>.', '🔗'],
            ['Aktifkan QRIS (opsional)', 'Agar kasir bisa menerima QRIS, klik tombol <strong>QRIS</strong> pada cabang lalu tempel <strong>teks QRIS</strong> Anda (gunakan tautan "Alat Ekstrak Teks QRIS" untuk mengambil teks dari gambar QRIS). Nominal QRIS akan otomatis mengikuti total belanja. Kosongkan bila hanya menerima tunai.', '💳'],
            ['Pantau Penjualan', 'Menu <strong>Dashboard</strong> menampilkan ringkasan omzet, grafik tren, dan metode pembayaran. Menu <strong>Laporan</strong> menampilkan rincian transaksi — bisa disaring per tanggal (Hari Ini / Kemarin / 7 Hari) dan diunduh sebagai <strong>PDF, Word, atau Excel</strong>.', '📈'],
            ['Membatalkan Transaksi (khusus Anda)', 'Bila ada transaksi yang perlu dibatalkan (salah input / refund), buka <strong>Laporan</strong>, klik tombol batalkan pada transaksi, pilih alasan, dan centang konfirmasi. <strong>Hanya Anda (pemilik) yang bisa membatalkan</strong> — kasir tidak bisa, demi mencegah penyalahgunaan. Semua pembatalan tercatat.', '🛑'],
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

    <!-- Masa Langganan -->
    <div class="bg-[#eef2e8] rounded-3xl p-6 border border-[#d2dbc2]">
        <div class="flex items-start gap-3">
            <div class="w-11 h-11 rounded-2xl bg-white text-[#8b9b70] flex items-center justify-center shrink-0 text-xl">🗓️</div>
            <div>
                <h3 class="font-black text-[#2e2e2a]">Masa Langganan</h3>
                <p class="text-xs sm:text-sm text-[#595952] mt-1.5 leading-relaxed">
                    RZ Kasir berlaku sesuai paket langganan Anda. Status masa aktif tampil di <strong>Dashboard</strong>. Menjelang berakhir, sistem menampilkan pengingat; bila sudah berakhir, kasir <strong>terkunci sementara</strong> sampai diperpanjang. Perpanjangan cukup lewat tombol <strong>WhatsApp</strong> yang tersedia — pesan otomatis sudah berisi identitas cabang Anda.
                </p>
            </div>
        </div>
    </div>

    <!-- Catatan penting -->
    <div class="bg-white rounded-3xl p-6 border border-[#eceae0] shadow-xs">
        <h3 class="font-black text-[#2e2e2a] text-sm mb-3">Perlu diketahui</h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-[#595952]">
            <li class="flex gap-2.5"><span class="text-[#8b9b70] font-black">✔</span><span>Pembayaran diterima <strong>langsung di kasir</strong> (tunai/QRIS) — tidak ada antre atau verifikasi terpisah.</span></li>
            <li class="flex gap-2.5"><span class="text-[#8b9b70] font-black">✔</span><span>Uang penjualan <strong>100% milik toko Anda</strong> — tanpa potongan apa pun.</span></li>
            <li class="flex gap-2.5"><span class="text-[#f4212e] font-black">✕</span><span><strong>Menambah cabang baru</strong> hanya dapat dilakukan oleh RZ (biaya tambahan). Hubungi RZ bila ingin menambah cabang.</span></li>
        </ul>
    </div>
</div>
@endsection
