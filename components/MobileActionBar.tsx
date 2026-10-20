"use client";

import React from "react";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import { useCart } from "@/context/CartContext";

export function MobileActionBar() {
  const { totalItems, totalAmount, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0E]/95 backdrop-blur-xl border-t border-amber-500/30 px-2 py-2 shadow-[0_-5px_25px_rgba(0,0,0,0.8)] pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-1.5">
        {/* Direct Phone Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
          className="flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl bg-neutral-900 border border-neutral-700 active:scale-95 text-neutral-200 hover:text-white transition-all min-h-[46px]"
          aria-label="Call Easy Cheesy"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Call
          </span>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Easy%20Cheesy!%20I%20would%20like%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl bg-emerald-600/90 border border-emerald-500/40 active:scale-95 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all min-h-[46px]"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* View Cart / Order Drawer */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 active:scale-95 text-black font-black transition-all min-h-[46px] shadow-md"
          aria-label={`View Cart (${totalItems} items)`}
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-black" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-black text-amber-400 text-[9px] font-black px-1 rounded-full border border-amber-400 leading-tight">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider truncate max-w-full px-1">
            {totalAmount > 0 ? `Rs ${totalAmount}` : "Cart"}
          </span>
        </button>
      </div>
    </div>
  );
}
