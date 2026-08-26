<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\View\View;

class UserController extends Controller
{
    /** Peran akun yang boleh dikelola super admin. Kasir tidak berakun (akses via link). */
    private const ROLES = ['superadmin', 'admin'];

    public function index(): View
    {
        // Hanya akun berperan (admin & super admin). Operator kasir dibuat otomatis
        // per cabang dan diakses lewat link, jadi tidak ditampilkan di sini.
        $users = User::with('store')
            ->whereIn('role', ['superadmin', 'admin'])
            ->orderByRaw("FIELD(role, 'superadmin', 'admin')")
            ->orderBy('name')
            ->get();

        return view('superadmin.users.index', compact('users'));
    }

    public function create(): View
    {
        $stores = Store::with('event')->orderBy('name')->get();

        return view('superadmin.users.create', compact('stores'));
    }

    public function store(): RedirectResponse
    {
        $data = request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:users,username'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'phone' => ['nullable', 'string', 'max:30'],
            'role' => ['required', Rule::in(self::ROLES)],
            'store_id' => ['nullable', 'exists:stores,id'],
            'password' => ['required', 'confirmed', Password::min(6)],
        ]);

        // Hanya peran kasir (user) yang terikat ke cabang/warung.
        if ($data['role'] !== 'user') {
            $data['store_id'] = null;
        }

        $data['password'] = Hash::make($data['password']);
        User::create($data);

        return redirect()->route('superadmin.users.index')
            ->with('success', "Akun {$data['name']} berhasil dibuat.");
    }

    public function edit(User $user): View
    {
        $stores = Store::with('event')->orderBy('name')->get();

        return view('superadmin.users.edit', compact('user', 'stores'));
    }

    public function update(User $user): RedirectResponse
    {
        $data = request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', Rule::unique('users', 'username')->ignore($user->id)],
            'email' => ['required', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'phone' => ['nullable', 'string', 'max:30'],
            'role' => ['required', Rule::in(self::ROLES)],
            'store_id' => ['nullable', 'exists:stores,id'],
            'password' => ['nullable', 'confirmed', Password::min(6)],
        ]);

        if ($data['role'] !== 'user') {
            $data['store_id'] = null;
        }

        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($data['password']);
        }

        $user->update($data);

        return redirect()->route('superadmin.users.index')
            ->with('success', "Akun {$user->name} berhasil diperbarui.");
    }

    public function destroy(User $user): RedirectResponse
    {
        if ($user->id === auth()->id()) {
            return redirect()->route('superadmin.users.index')
                ->with('error', 'Tidak dapat menghapus akun Anda sendiri.');
        }

        $name = $user->name;
        $user->delete();

        return redirect()->route('superadmin.users.index')
            ->with('success', "Akun {$name} berhasil dihapus.");
    }
}
