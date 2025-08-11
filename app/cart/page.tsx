"use client";
import React from "react";
import { useCartRefresh } from "@/context/CartRefreshContext";
import Cart from "@/components/Cart";

const CartPage = () => {
  const cartRefreshContext = useCartRefresh();

  if (!cartRefreshContext) {
    return null;
  }

  const { cartRefreshTrigger } = cartRefreshContext;
  return (
    <div className="max-w-2xl mx-auto">
      <Cart refreshTrigger={cartRefreshTrigger} />
    </div>
  );
};

export default CartPage;
