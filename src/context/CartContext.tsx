"use client";
import { ProductListTypes } from "@/types/Interface";
import React, { createContext, useState } from "react";

interface CartContextProps {
  cart: ProductListTypes[];
  setCart: React.Dispatch<React.SetStateAction<ProductListTypes[]>>;
}
const initialAppContext: CartContextProps = {
  setCart: () => null,
  cart: [],
};
export const CartContext = createContext<CartContextProps>(initialAppContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductListTypes[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
