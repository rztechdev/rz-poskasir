<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;

class ProductPolicy
{
    public function before(User $user, string $ability): ?bool
    {
        if ($user->isSuperAdmin() || $user->isAdmin()) {
            return true;
        }
        return null;
    }

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Product $product): bool
    {
        $userStoreId = $user->store_id ?: ($user->ownedStore?->id ?: $user->store?->id);
        return $userStoreId && (int)$userStoreId === (int)$product->store_id;
    }

    public function create(User $user): bool
    {
        $userStoreId = $user->store_id ?: ($user->ownedStore?->id ?: $user->store?->id);
        return $userStoreId !== null;
    }

    public function update(User $user, Product $product): bool
    {
        $userStoreId = $user->store_id ?: ($user->ownedStore?->id ?: $user->store?->id);
        return $userStoreId && (int)$userStoreId === (int)$product->store_id;
    }

    public function delete(User $user, Product $product): bool
    {
        $userStoreId = $user->store_id ?: ($user->ownedStore?->id ?: $user->store?->id);
        return $userStoreId && (int)$userStoreId === (int)$product->store_id;
    }
}

