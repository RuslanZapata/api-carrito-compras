import { Product, CartItem, Cart } from '@/types';

// Carrito en memoria
const cartItems = new Map<number, CartItem>();

export function getCart(): Cart {
  const items = Array.from(cartItems.values());
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return {
    items,
    total
  };
}

export function addToCart(product: Product): Cart {
  const existingItem = cartItems.get(product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
    cartItems.set(product.id, existingItem);
  } else {
    const newItem: CartItem = {
      ...product,
      quantity: 1
    };
    cartItems.set(product.id, newItem);
  }
  
  return getCart();
}

export function removeFromCart(productId: number): Cart {
  cartItems.delete(productId);
  return getCart();
}

export function clearCart(): Cart {
  cartItems.clear();
  return getCart();
}