"use client";

import React from "react";
import { DEALS_DATA, DealItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_INFO, getWhatsAppOrderUrl } from "@/lib/restaurant-info";
import {
  Flame,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Tag,
  Check,
} from "lucide-react";

export function DealsSection() {
  const { addItem } = useCart();
  const [addedDealId, setAddedDealId] = React.useState<string | null>(null);

  const handleAddToCart = (deal: DealItem) => {
    addItem({
      id: deal.id,
      name: deal.name,
      price: deal.price,
    });
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1500);
  };

  const handleOrderWhatsApp = (deal: DealItem) => {
    const message =
      `Salam Shawarma Line! I would like to order *${deal.name}* (Rs ${deal.price}):\n` +
      `Includes: ${deal.itemsSummary}\n\n` +
      `Delivery Address:\n` +
      `Contact:`;
    window.open(getWhatsAppOrderUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="deals" className="py-20 sm:py-28 bg-[#101010] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Unbeatable Savings</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Mega Combo <span className="text-brand-yellow">Deals</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Value packed combos crafted for friends, family feasts, and late-night cravings.
            Order instantly on WhatsApp with one click.
          </p>
        </div>

        {/* 6 Deal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DEALS_DATA.map((deal) => {
            const isJustAdded = addedDealId === deal.id;

            return (
              <div
                key={deal.id}
                className="group relative rounded-2xl p-6 bg-neutral-900/90 border border-neutral-800 hover:border-brand-orange/60 transition-all duration-300 hover:-translate-y-1.5 shadow-card hover:shadow-fiery flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                      <Flame className="w-3.5 h-3.5 text-brand-yellow" />
                      {deal.badge}
                    </span>
                    {deal.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/30">
                        Top Seller
                      </span>
                    )}
                  </div>

                  {/* Title & Items Summary */}
                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white group-hover:text-brand-yellow transition-colors mb-2">
                    {deal.name}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-black/50 border border-neutral-800/80 mb-5">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                      Includes:
                    </span>
                    <p className="text-sm font-semibold text-neutral-200 font-sans leading-relaxed">
                      {deal.itemsSummary}
                    </p>
                  </div>
                </div>

                {/* Pricing & Order Actions */}
                <div className="pt-4 border-t border-neutral-800">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      Deal Price
                    </span>
                    <div className="text-right">
                      <span className="font-display font-black text-3xl text-brand-yellow tracking-tight">
                        Rs {deal.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Add to order cart button */}
                    <button
                      onClick={() => handleAddToCart(deal)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all min-h-[44px] ${
                        isJustAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700"
                      }`}
                      aria-label={`Add ${deal.name} to cart`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-brand-yellow" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    {/* Order this deal via WhatsApp button */}
                    <button
                      onClick={() => handleOrderWhatsApp(deal)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 min-h-[44px]"
                      aria-label={`Order ${deal.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order Deal</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
