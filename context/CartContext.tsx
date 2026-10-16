"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { RESTAURANT_INFO, getWhatsAppOrderUrl } from "@/lib/restaurant-info";

export interface CartItem {
  cartItemId: string; // id + (size ? `-${size}` : "")
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: {
    id: string;
    name: string;
    price: number;
    size?: string;
    image?: string;
  }) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalAmount: number;
  generateWhatsAppOrderMessage: () => string;
  checkoutViaWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize from sessionStorage if exists
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("shawarma_line_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem("shawarma_line_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (newItem: {
    id: string;
    name: string;
    price: number;
    size?: string;
    image?: string;
  }) => {
    const cartItemId = newItem.size
      ? `${newItem.id}-${newItem.size.toLowerCase().replace(/\s+/g, "-")}`
      : newItem.id;

    setItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          size: newItem.size,
          image: newItem.image,
        },
      ];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.cartItemId === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const generateWhatsAppOrderMessage = () => {
    if (items.length === 0) {
      return "Salam Shawarma Line! I would like to place an order.";
    }

    const itemLines = items
      .map(
        (i) =>
          `• ${i.quantity}x ${i.name}${i.size ? ` (${i.size})` : ""} - Rs ${
            i.price * i.quantity
          }`
      )
      .join("\n");

    return (
      `🔥 *NEW ORDER - SHAWARMA LINE KASUR* 🔥\n\n` +
      `Assalam-o-Alaikum! I'd like to place an order:\n\n` +
      `${itemLines}\n\n` +
      `💰 *Total Amount: Rs ${totalAmount.toLocaleString()}*\n` +
      `📍 Delivery / Pickup Address:\n` +
      `📞 Contact Number:\n` +
      `📝 Special Instructions:`
    );
  };

  const checkoutViaWhatsApp = () => {
    const msg = generateWhatsAppOrderMessage();
    const url = getWhatsAppOrderUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalAmount,
        generateWhatsAppOrderMessage,
        checkoutViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
