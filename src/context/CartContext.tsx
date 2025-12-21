"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Artwork } from "@/data/artworks";

interface CartItem {
  artwork: Artwork;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (artworkId: string) => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load cart from local storage on mount (optional, nice to have)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to recover cart", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (artwork: Artwork) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.artwork.id === artwork.id);
      if (existing) {
        return prev.map((item) =>
          item.artwork.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { artwork, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (artworkId: string) => {
    setItems((prev) => prev.filter((item) => item.artwork.id !== artworkId));
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const cartTotal = items.reduce(
    (total, item) => total + item.artwork.price * item.quantity,
    0
  );

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
