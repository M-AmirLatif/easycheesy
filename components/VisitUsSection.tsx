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
} from "lucide-react";

export function VisitUsSection() {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#0E0E0E] relative overflow-hidden">
      {/* Decorative fiery glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Find Our Sizzle</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Visit Us in <span className="text-brand-yellow">Kasur</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Centrally situated on College Road right opposite Govt. Islamia College Boys Campus.
          </p>
        </div>

        {/* 2-Column Info + Google Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Contact CTAs (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              {/* Authentic Brand Crest Header */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-neutral-800/80">
                <BrandLogo variant="badge" size="sm" />
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-none">
                    Shawarma Line <span className="text-brand-yellow">Kasur</span>
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    College Road Flagship • Dine-In &amp; Takeaway
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Location Address
                  </h3>
                  <p className="text-base font-bold text-white leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-yellow hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-base font-bold text-white">
                    {RESTAURANT_INFO.closesAtText}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    1:00 PM – 2:00 AM Daily (Midnight Sizzle)
                  </p>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Banknote className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">{RESTAURANT_INFO.paymentMethod}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Car className="w-4 h-4 text-brand-yellow" />
                  <span className="font-semibold">Free Parking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Baby className="w-4 h-4 text-brand-orange" />
                  <span className="font-semibold">Kids Menu</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">AC Family Hall</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Direct Phone Hotlines
                </h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-colors min-h-[44px] border border-neutral-700"
                  >
                    <Phone className="w-4 h-4 text-brand-yellow" />
                    <span>{RESTAURANT_INFO.phonePrimary}</span>
                  </a>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneSecondaryRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider transition-colors min-h-[44px] border border-neutral-700"
                  >
                    <Phone className="w-4 h-4 text-brand-yellow" />
                    <span>{RESTAURANT_INFO.phoneSecondary}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Shawarma%20Line!%20I%20want%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01] active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat / Order on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 min-h-[380px] sm:min-h-[450px] relative shadow-xl">
            <iframe
              title="Shawarma Line Location at Govt Islamia College Boys Campus Kasur"
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[110%] invert-[90%] hue-rotate-180"
            />
            {/* Map overlay pill */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-700/80 shadow-lg">
              <p className="text-xs font-bold text-white">Shawarma Line Kasur</p>
              <p className="text-[11px] text-brand-yellow font-semibold">
                Govt. Islamia College Road
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
