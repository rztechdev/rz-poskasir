@extends('layouts.app')

@section('title', 'Kelola Akun & Role')

@section('content')
<div class="max-w-5xl mx-auto p-4 sm:p-6 space-y-5">
 <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
 <div>
 <h1 class="text-xl font-black text-[#2e2e2a] tracking-tight">Kelola Akun &amp; Role</h1>
 <p class="text-sm text-[#595952] font-medium">Buat & atur akun Admin (pemilik) dan Kasir beserta perannya.</p>
 </div>
 <a href="{{ route('superadmin.users.create') }}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-sm font-bold transition-colors shrink-0">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
 Tambah Akun
 </a>
 </div>

 @if(session('success'))
 <div class="rounded-2xl bg-[#00ba7c]/10 border border-[#00ba7c]/20 text-[#00815a] px-4 py-3 text-sm font-semibold">{{ session('success') }}</div>
 @endif
 @if(session('error'))
 <div class="rounded-2xl bg-[#f4212e]/10 border border-[#f4212e]/20 text-[#f4212e] px-4 py-3 text-sm font-semibold">{{ session('error') }}</div>
 @endif

 <div class="bg-white border border-[#eceae0] rounded-3xl overflow-hidden">
 <div class="overflow-x-auto">
 <table class="w-full text-sm">
 <thead>
 <tr class="bg-[#f9f8f3] text-left text-[11px] uppercase tracking-wider text-[#595952] font-bold">
 <th class="px-4 py-3">Nama</th>
 <th class="px-4 py-3">Username / Email</th>
 <th class="px-4 py-3">Role</th>
 <th class="px-4 py-3">Cabang</th>
 <th class="px-4 py-3 text-right">Aksi</th>
 </tr>
 </thead>
 <tbody class="divide-y divide-[#eceae0]">
 @forelse($users as $u)
 <tr class="hover:bg-[#f9f8f3]/60">
 <td class="px-4 py-3">
 <p class="font-bold text-[#2e2e2a]">{{ $u->name }}</p>
 @if($u->phone)<p class="text-[11px] text-[#595952]">{{ $u->phone }}</p>@endif
 </td>
 <td class="px-4 py-3 text-[#595952]">
 <p class="text-[#2e2e2a] font-medium">{{ $u->username }}</p>
 <p class="text-[11px]">{{ $u->email }}</p>
 </td>
 <td class="px-4 py-3">
 @php
 $roleLabel = ['superadmin' => 'Super Admin', 'admin' => 'Admin / Pemilik', 'user' => 'Kasir'][$u->role] ?? $u->role;
 $roleClass = ['superadmin' => 'bg-[#8b9b70]/15 text-[#667451]', 'admin' => 'bg-[#eef2e8] text-[#8b9b70]', 'user' => 'bg-[#f9f8f3] text-[#595952]'][$u->role] ?? 'bg-[#f9f8f3] text-[#595952]';
 @endphp
 <span class="px-2.5 py-1 rounded-full text-[11px] font-black {{ $roleClass }}">{{ $roleLabel }}</span>
 </td>
 <td class="px-4 py-3 text-[#595952]">{{ $u->store?->name ?? '—' }}</td>
 <td class="px-4 py-3">
 <div class="flex items-center justify-end gap-2">
 <a href="{{ route('superadmin.users.edit', $u) }}" class="px-3 py-1.5 rounded-full bg-[#eceae0] text-[#2e2e2a] hover:bg-[#8b9b70] hover:text-white text-xs font-bold transition-colors">Edit</a>
 @if($u->id !== auth()->id())
 <form action="{{ route('superadmin.users.destroy', $u) }}" method="POST" onsubmit="return confirm('Hapus akun {{ $u->name }}?')">
 @csrf @method('DELETE')
 <button type="submit" class="px-3 py-1.5 rounded-full bg-[#f4212e]/10 text-[#f4212e] hover:bg-[#f4212e] hover:text-white text-xs font-bold transition-colors">Hapus</button>
 </form>
 @endif
 </div>
 </td>
 </tr>
 @empty
 <tr><td colspan="5" class="px-4 py-10 text-center text-[#595952]">Belum ada akun.</td></tr>
 @endforelse
 </tbody>
 </table>
 </div>
 </div>
</div>
@endsection
