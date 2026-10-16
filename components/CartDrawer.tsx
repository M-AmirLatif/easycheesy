"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  Flame,
  ArrowRight,
} from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalAmount,
    checkoutViaWhatsApp,
  } = useCart();

  // Prevent background scrolling and allow Escape to close when cart drawer is open
  useEffect(() => {
    if (!isCartOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Your Order Cart"
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-neutral-800 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/80">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider font-display">
                  Your Sizzle Order
                </h2>
                <p className="text-xs text-neutral-400">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-neutral-400 max-w-xs mb-6">
                  Add juicy shawarmas, crispy zingers, or special pizzas to build your feast.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeDark text-white font-bold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      {item.name}
                    </h4>
                    {item.size && (
                      <span className="text-[11px] font-semibold text-brand-orange">
                        Size: {item.size}
                      </span>
                    )}
                    <p className="text-xs font-black text-brand-yellow font-sans mt-0.5">
                      Rs {(item.price * item.quantity).toLocaleString()}
                      <span className="text-[10px] text-neutral-400 font-normal ml-1">
                        (Rs {item.price} each)
                      </span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg bg-neutral-950 border border-neutral-800">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="p-1.5 text-neutral-400 hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-white min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="p-1.5 text-neutral-400 hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Delete Item */}
                    <button
                      onClick={() => removeItem(item.cartItemId)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-neutral-800 bg-neutral-900/90 space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Payment Method</span>
                <span className="font-semibold text-white">Cash On Delivery / Pickup</span>
              </div>

              <div className="flex items-baseline justify-between border-t border-neutral-800/80 pt-3">
                <span className="text-sm font-bold uppercase tracking-wider text-neutral-200">
                  Total (PKR):
                </span>
                <span className="font-display font-black text-3xl text-brand-yellow">
                  Rs {totalAmount.toLocaleString()}
                </span>
              </div>

              {/* Instant WhatsApp Order Dispatch */}
              <button
                onClick={checkoutViaWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01] active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Order via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={clearCart}
                  className="text-xs text-neutral-400 hover:text-red-400 underline transition-colors"
                >
                  Clear all items
                </button>
                <span className="text-[11px] text-neutral-400">
                  Fast delivery across Kasur
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
