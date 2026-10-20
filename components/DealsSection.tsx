"use client";

import React from "react";
import Image from "next/image";
import { DEALS_DATA, DealItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_INFO, getWhatsAppOrderUrl } from "@/lib/restaurant-info";
import { SHIMMER_BLUR } from "@/lib/images";
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
      image: deal.image,
    });
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1500);
  };

  const handleOrderWhatsApp = (deal: DealItem) => {
    const message =
      `Salam Easy Cheesy! I would like to order *${deal.name}* (Rs ${deal.price}):\n` +
      `Includes: ${deal.itemsSummary}\n\n` +
      `Delivery Address:\n` +
      `Contact:`;
    window.open(getWhatsAppOrderUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="deals" className="py-20 sm:py-28 bg-[#101012] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-orange-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-orange-400" />
            <span>Official Value Combos</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Mega Combo <span className="text-amber-400">Deals</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Special combos crafted for friends, family feasts, and lunch/dinner cravings.
            Formatted professionally into cards with instant WhatsApp &amp; cart ordering.
          </p>
        </div>

        {/* Deal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DEALS_DATA.map((deal) => {
            const isJustAdded = addedDealId === deal.id;

            return (
              <div
                key={deal.id}
                className="group relative rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 shadow-card flex flex-col justify-between overflow-hidden"
              >
                {/* Deal Image if provided */}
                {deal.image && (
                  <div className="relative w-full h-44 bg-neutral-950 overflow-hidden">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={SHIMMER_BLUR}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                        <Flame className="w-3.5 h-3.5 text-orange-400" />
                        {deal.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-3">
                      <span className="px-3 py-1 rounded-xl bg-black/90 border border-amber-500/40 text-amber-400 font-display font-black text-xl tracking-wider shadow-lg">
                        Rs {deal.price}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!deal.image && (
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                          <Flame className="w-3.5 h-3.5 text-orange-400" />
                          {deal.badge}
                        </span>
                        {deal.popular && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/30">
                            Top Seller
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors mb-2">
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

                  {/* Actions Bottom */}
                  <div>
                    {!deal.image && (
                      <div className="flex items-baseline justify-between mb-4 pt-3 border-t border-neutral-800">
                        <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                          Deal Price
                        </span>
                        <div className="text-right">
                          <span className="font-display font-black text-3xl text-amber-400">
                            Rs {deal.price}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(deal)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                          isJustAdded
                            ? "bg-emerald-500 text-black shadow-lg"
                            : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOrderWhatsApp(deal)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-md transition-all active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Order Deal</span>
                      </button>
                    </div>
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
