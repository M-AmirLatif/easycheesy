"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Heart,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-28 md:pb-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="#hero" className="inline-flex items-center gap-3.5 mb-4 group">
              <BrandLogo variant="badge" size="sm" />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors leading-none">
                  EASY <span className="text-orange-500">CHEESY</span>
                </span>
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wider mt-1">
                  Love at First Bite
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider font-semibold">
                  Shahbaz Khan Road, Kasur
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Kasur&apos;s celebrated family dining and late-night fast-food destination.
              Ultimate double smash burgers, cheesy crown crust pizzas, flavor-injected crispy broast,
              and club sandwiches. &ldquo;Serving Moments, Not Just Meals.&rdquo;
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-500 hover:text-black border border-neutral-800 transition-colors flex items-center justify-center text-neutral-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(
                  "Salam Easy Cheesy! I would like to place an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white border border-neutral-800 transition-colors flex items-center justify-center text-neutral-300"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-white text-base uppercase tracking-wider mb-4">
              Explore Our Menu
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="#menu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Smash Burgers &amp; Beef Patties
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Artisan Crown &amp; Cheese Crust Pizzas
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Injected Crispy Broast &amp; Combos
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Toasted Club Sandwiches &amp; Paninis
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Chinese Gravies, Soups &amp; Chowmein
                </Link>
              </li>
              <li>
                <Link
                  href="#deals"
                  className="hover:text-amber-400 transition-colors font-bold text-amber-300"
                >
                  Exclusive Duo Deals (From Rs 999)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-black text-white text-base uppercase tracking-wider mb-4">
              Visit &amp; Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>{RESTAURANT_INFO.hoursDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="flex gap-2 font-bold text-white">
                  <a
                    href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {RESTAURANT_INFO.phonePrimary}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneSecondaryRaw}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {RESTAURANT_INFO.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
              <span className="text-amber-300 font-bold block mb-0.5">
                Kids Play Zone Available Upstairs!
              </span>
              <span className="text-neutral-400">
                Spacious inflatable play area for your kids while you dine comfortably.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {RESTAURANT_INFO.name}. All rights reserved. Kasur, Pakistan.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>for Kasur Food Lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
