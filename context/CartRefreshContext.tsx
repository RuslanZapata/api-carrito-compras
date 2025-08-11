"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CartRefreshContextType = {
  cartRefreshTrigger: number;
  setCartRefreshTrigger: Dispatch<SetStateAction<number>>;
};

type CartRefreshProviderProps = {
  children: ReactNode;
};

const CartRefreshContext = createContext<CartRefreshContextType>({
  cartRefreshTrigger: 0,
  setCartRefreshTrigger: () => {},
});

export function CartRefreshProvider({ children }: CartRefreshProviderProps) {
  const [cartRefreshTrigger, setCartRefreshTrigger] = useState(0);

  return (
    <CartRefreshContext.Provider
      value={{ cartRefreshTrigger, setCartRefreshTrigger }}
    >
      {children}
    </CartRefreshContext.Provider>
  );
}

export function useCartRefresh() {
  return useContext(CartRefreshContext);
}
