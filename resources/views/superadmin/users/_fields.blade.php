@php $inputClass = 'w-full rounded-xl border border-[#eceae0] bg-[#f9f8f3] focus:bg-white focus:border-[#8b9b70] focus:ring-2 focus:ring-[#8b9b70]/20 px-3.5 py-2.5 text-sm text-[#2e2e2a] outline-none transition'; @endphp

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">Nama Lengkap</label>
 <input type="text" name="name" value="{{ old('name', $user->name ?? '') }}" class="{{ $inputClass }}" required>
 </div>
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">No. HP (opsional)</label>
 <input type="text" name="phone" value="{{ old('phone', $user->phone ?? '') }}" class="{{ $inputClass }}">
 </div>
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">Username</label>
 <input type="text" name="username" value="{{ old('username', $user->username ?? '') }}" class="{{ $inputClass }}" required>
 </div>
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">Email</label>
 <input type="email" name="email" value="{{ old('email', $user->email ?? '') }}" class="{{ $inputClass }}" required>
 </div>
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">Role</label>
 <select name="role" x-model="role" class="{{ $inputClass }}" required>
 <option value="admin">Admin / Pemilik</option>
 <option value="superadmin">Super Admin</option>
 </select>
 <p class="text-[11px] text-[#595952] mt-1">Kasir tidak perlu akun — cukup akses lewat link cabang.</p>
 </div>
</div>

<div class="border-t border-[#eceae0] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">
 Kata Sandi @if($user) <span class="font-normal text-[#595952]">(kosongkan bila tak diubah)</span> @endif
 </label>
 <input type="password" name="password" class="{{ $inputClass }}" autocomplete="new-password" {{ $user ? '' : 'required' }}>
 </div>
 <div>
 <label class="block text-xs font-bold text-[#595952] mb-1.5">Ulangi Kata Sandi</label>
 <input type="password" name="password_confirmation" class="{{ $inputClass }}" autocomplete="new-password" {{ $user ? '' : 'required' }}>
 </div>
</div>
