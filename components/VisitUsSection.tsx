"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import { BrandLogo } from "./BrandLogo";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Banknote,
  Car,
  Baby,
  Navigation,
  CheckCircle2,
  Instagram,
} from "lucide-react";

export function VisitUsSection() {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#0F0F11] relative overflow-hidden">
      {/* Decorative warm glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>Find Easy Cheesy</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Visit Us in <span className="text-amber-400">Kasur</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Located conveniently on Shahbaz Khan Road near Elite College.
            Featuring a 2-storey family hall with an upstairs kids play area.
          </p>
        </div>

        {/* 2-Column Info + Google Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Contact CTAs (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              {/* Brand Header */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-neutral-800/80">
                <BrandLogo variant="badge" size="sm" />
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-none">
                    EASY CHEESY <span className="text-amber-400">KASUR</span>
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    Shahbaz Khan Road • 2-Floor Family Restaurant
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    Exact Address
                  </span>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-amber-400 mt-1 font-mono">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    Operating Hours
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {RESTAURANT_INFO.hoursDisplay}
                  </p>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open daily, closes 2:00 AM (Midnight dining)
                  </p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    Call For Delivery &amp; Takeaway
                  </span>
                  <div className="flex flex-wrap gap-2 text-sm font-bold text-white">
                    <a
                      href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {RESTAURANT_INFO.phonePrimary}
                    </a>
                    <span className="text-neutral-600">/</span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneSecondaryRaw}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {RESTAURANT_INFO.phoneSecondary}
                    </a>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Fast doorstep riders available across Kasur city
                  </p>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-4 border-t border-neutral-800/80 mb-6">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-3">
                  Hall &amp; Facility Features
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Baby className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Kids Play Zone</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Street &amp; Bike Parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Open Till 2 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Banknote className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider transition-colors shadow-md text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(
                  "Salam Easy Cheesy! I'd like to place an order for delivery/takeaway."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white hover:text-emerald-400 text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700 text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-800 shadow-xl bg-neutral-900 relative min-h-[420px] lg:min-h-full">
            <iframe
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Easy Cheesy Kasur Google Maps Location"
              className="w-full h-full grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
            />
            {/* Overlay chip */}
            <div className="absolute top-4 left-4 z-10 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-700 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span>Easy Cheesy &bull; Shahbaz Khan Road</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
