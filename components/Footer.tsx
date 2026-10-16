"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import {
  MapPin,
  Phone,
  Clock,
  Flame,
  Instagram,
  Facebook,
  Share2,
  Heart,
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
                <span className="font-display font-black text-2xl uppercase tracking-wider text-white group-hover:text-brand-yellow transition-colors leading-none">
                  SHAWARMA <span className="text-brand-yellow">LINE</span>
                </span>
                <span className="font-script text-brand-orange text-sm leading-tight mt-1">
                  All Taste Behind Me
                </span>
                <span className="text-[11px] text-neutral-400 mt-1 uppercase tracking-wider font-semibold">
                  College Road, Kasur
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Kasur&apos;s celebrated late-night fast-food destination.
              Live charcoal shawarmas, crispy zinger burgers, and gourmet stuffed crust pizzas.
              &ldquo;All Taste Behind Me.&rdquo;
            </p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-brand-orange hover:text-white border border-neutral-800 transition-colors flex items-center justify-center text-neutral-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-brand-orange hover:text-white border border-neutral-800 transition-colors flex items-center justify-center text-neutral-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white border border-neutral-800 transition-colors flex items-center justify-center text-neutral-300"
                aria-label="WhatsApp Channel"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display uppercase tracking-wider text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#menu" className="hover:text-brand-yellow transition-colors">
                  Full Food Menu
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-brand-yellow transition-colors">
                  Signature Grill Picks
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:text-brand-yellow transition-colors">
                  Value Combo Deals
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-yellow transition-colors">
                  Why Shawarma Line
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-yellow transition-colors">
                  Behind the Grill Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-yellow transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-brand-yellow transition-colors">
                  Location &amp; Timings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-display uppercase tracking-wider text-lg mb-4">
              Contact &amp; Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>{RESTAURANT_INFO.phonePrimary} / {RESTAURANT_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{RESTAURANT_INFO.hoursDisplay}</span>
              </div>
              <div className="pt-2 text-xs text-neutral-400">
                <span>Payment: Cash on Delivery &amp; Counter Cash Only.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} Shawarma Line Kasur. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Agency Grade Pitch Demo</span>
            <span>•</span>
            <span className="text-neutral-400 flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" /> for Shawarma Line
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
