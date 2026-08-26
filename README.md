# RZ Kasir

Aplikasi **POS / Kasir B2C** milik RZ Digital Creative — dijual per bisnis dengan model langganan.
Dibangun dengan **Laravel 12**, **Alpine.js**, dan **Tailwind CSS v4**.

## Fitur

- **Kasir via link** — karyawan buka link, tanpa akun/kata sandi.
- **Pembayaran langsung di kasir** — Tunai (kembalian otomatis) & **QRIS dinamis** (nominal otomatis).
- **Kelola menu/produk** per cabang (foto, harga, harga tawar) + filter cabang.
- **Laporan** omzet (cash/QRIS), filter tanggal, ekspor **PDF / Word / Excel**.
- **Pembatalan transaksi khusus pemilik** (anti-fraud) + log di menu Catatan.
- **Masa langganan** per cabang — kasir terkunci otomatis saat habis, perpanjang via WhatsApp.
- **Peran**: Super Admin (RZ), Admin/Pemilik, Kasir.

## Menjalankan (lokal)

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
# atur DB di .env, lalu:
php artisan migrate --seed
php artisan storage:link
npm run build
php artisan serve
```

Login awal (dari seeder, ganti untuk produksi): `superadmin` / `admin` — kata sandi `12345678`.

## Deploy produksi

- Gunakan `.env.production` sebagai acuan (isi kredensial DB & kata sandi akun).
- `php artisan migrate --force --seed`, `php artisan storage:link`, `npm run build`.
- `php artisan config:cache route:cache view:cache`.

---
© RZ Digital Creative
