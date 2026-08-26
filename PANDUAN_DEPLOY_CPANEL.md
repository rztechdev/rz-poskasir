# 📘 Panduan Lengkap Deploy RZ POS Kasir ke cPanel

Panduan ini untuk mengaktifkan project **RZ POS Kasir** di subdomain **`rzposkasir.rzdigitalcreative.my.id`**.

---

## 📋 Ringkasan Info Project
* **Subdomain**: `rzposkasir.rzdigitalcreative.my.id`
* **Folder cPanel**: `/home/rzdigita/repositories/rz-poskasir`
* **Document Root**: `repositories/rz-poskasir/public`
* **Database**: MySQL cPanel

---

## 🚀 Langkah 1: Buat Database MySQL di cPanel

1. Di cPanel, buka menu **`MySQL® Databases`**.
2. **Buat Database Baru**:
   - Di bagian *Create New Database*, isi: `poskasir`
   - Klik **Create Database**.  
   *(Nama database lengkap: `rzdigita_poskasir`)*
3. **Buat User Database Baru**:
   - Scroll ke bagian *MySQL Users > Add New User*.
   - Username: `pos_user`
   - Password: Buat password yang aman (misal: `PosKasir2026!#`)
   - Klik **Create User**.  
   *(Nama user lengkap: `rzdigita_pos_user`)*
4. **Hubungkan User ke Database**:
   - Scroll ke *Add User To Database*.
   - Pilih User: `rzdigita_pos_user`
   - Pilih Database: `rzdigita_poskasir`
   - Klik **Add**.
   - Centang opsi **ALL PRIVILEGES** ➡️ klik **Make Changes**.

---

## 🌐 Langkah 2: Buat Subdomain (Jika Belum)

1. Di cPanel, buka menu **`Domains`**.
2. Klik **Create A New Domain**:
   - **Domain**: `rzposkasir.rzdigitalcreative.my.id`
   - **Share document root**: **Hapus centang (Uncheck)**
   - **Document Root**: `repositories/rz-poskasir/public`
3. Klik **Submit**.
4. Aktifkan toggle **Force HTTPS Redirect** ke posisi **On**.

---

## ⚙️ Langkah 3: Setup File `.env` di cPanel

1. Di **File Manager cPanel**, buka folder:
   `/home/rzdigita/repositories/rz-poskasir/`
2. Buat file baru bernama **`.env`** (atau edit jika sudah ada).
3. Isi dengan konfigurasi berikut (sesuaikan nama DB dan password yang dibuat di Langkah 1):

```ini
APP_NAME="RZ Kasir"
APP_ENV=production
APP_KEY=base64:u42r2GHxpePg8fyBtbnqWJFAcWDkQXuqU/7Efy79nuM=
APP_DEBUG=false
APP_URL=https://rzposkasir.rzdigitalcreative.my.id

APP_TIMEZONE=Asia/Jakarta
APP_LOCALE=id
APP_FALLBACK_LOCALE=id
APP_FAKER_LOCALE=id_ID

APP_MAINTENANCE_DRIVER=file
BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_LEVEL=error

# ====== DATABASE MYSQL CPANEL ======
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rzdigita_poskasir
DB_USERNAME=rzdigita_pos_user
DB_PASSWORD=GANTI_DENGAN_PASSWORD_DB_ANDA

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_SECURE_COOKIE=true

CACHE_STORE=database
QUEUE_CONNECTION=sync
FILESYSTEM_DISK=local
BROADCAST_CONNECTION=log

MAIL_MAILER=log
MAIL_FROM_ADDRESS="no-reply@rzdigitalcreative.my.id"
MAIL_FROM_NAME="${APP_NAME}"

# ====== AKUN AWAL SEEDER ======
SUPERADMIN_NAME="Super Admin RZ"
SUPERADMIN_USERNAME=superadmin
SUPERADMIN_EMAIL=admin@rzdigitalcreative.my.id
SUPERADMIN_PHONE=6285151699883
SUPERADMIN_PASSWORD=SuperAdminKasir2026!

ADMIN_NAME="Pemilik Toko"
ADMIN_USERNAME=admin
ADMIN_EMAIL=pemilik@rzposkasir.rzdigitalcreative.my.id
ADMIN_PHONE=6281234567890
ADMIN_PASSWORD=AdminKasir2026!
```
4. Klik **Save Changes**.

---

## 📦 Langkah 4: Upload `vendor.zip` & `public_assets.zip`

File zip sudah disiapkan di folder komputer Anda (`d:\Project - Rz digital creative\pos kasir\rz - pos-kasir\`):

1. **Upload `vendor.zip`**:
   - Di File Manager, masuk ke `/home/rzdigita/repositories/rz-poskasir/`
   - Upload file **`vendor.zip`** ➡️ lalu klik kanan **Extract**.
2. **Upload `public_assets.zip`**:
   - Di File Manager, masuk ke `/home/rzdigita/repositories/rz-poskasir/public/`
   - Upload file **`public_assets.zip`** ➡️ lalu klik kanan **Extract**.

---

## ⚡ Langkah 5: Jalankan Migrasi & Database Seeder (Otomatis)

Karena tidak ada akses terminal SSH, jalankan migrasi database lewat skrip helper ini:

1. Di File Manager, buka folder:
   `/home/rzdigita/repositories/rz-poskasir/public/`
2. Buat file baru bernama **`migrate.php`**.
3. Isi dengan kode berikut:

```php
<?php
use Illuminate\Support\Facades\Artisan;

define('LARAVEL_START', microtime(true));
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

echo "<h2>Menjalankan Migrasi & Seed Database RZ POS Kasir...</h2>";

try {
    // 1. Migrate Database
    Artisan::call('migrate', ['--force' => true]);
    echo "<p style='color:green'>✔ Migrasi Database: " . nl2br(Artisan::output()) . "</p>";

    // 2. Seed Database (Akun Admin & Data Awal)
    Artisan::call('db:seed', ['--force' => true]);
    echo "<p style='color:green'>✔ Seed Database: " . nl2br(Artisan::output()) . "</p>";

    // 3. Storage Link
    Artisan::call('storage:link');
    echo "<p style='color:green'>✔ Storage Link: " . nl2br(Artisan::output()) . "</p>";

    echo "<h3 style='color:green'>BERHASIL! Silakan hapus file migrate.php ini demi keamanan.</h3>";
} catch (\Exception $e) {
    echo "<p style='color:red'>ERROR: " . $e->getMessage() . "</p>";
}
```
4. Simpan file.
5. Buka di browser:  
   👉 **`https://rzposkasir.rzdigitalcreative.my.id/migrate.php`**
6. Setelah muncul pesan sukses, **HAPUS** file `migrate.php` tersebut.

---

## 🔑 Login Akun Default
Setelah migrate, buka `https://rzposkasir.rzdigitalcreative.my.id`:
* **Super Admin**:
  * Username: `superadmin` (atau email `admin@rzdigitalcreative.my.id`)
  * Password: `SuperAdminKasir2026!`
* **Admin Toko**:
  * Username: `admin` (atau email `pemilik@rzposkasir.rzdigitalcreative.my.id`)
  * Password: `AdminKasir2026!`
