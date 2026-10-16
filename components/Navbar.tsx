"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { useCart } from "@/context/CartContext";
import { useStoreOpenStatus } from "@/hooks/useStoreOpenStatus";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import {
  ShoppingBag,
  Phone,
  MessageCircle,
  Menu,
  X,
  Clock,
  MapPin,
  Flame,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, totalAmount, setIsCartOpen } = useCart();
  const { isOpen, statusLabel } = useStoreOpenStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open so underlying page never scrolls
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Signatures", href: "#signature" },
    { name: "Deals", href: "#deals" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Visit Us", href: "#visit" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#0E0E0E] border-b border-neutral-800 shadow-xl"
          : "bg-[#0E0E0E] sm:bg-gradient-to-b sm:from-black/95 sm:via-[#0E0E0E]/90 sm:to-[#0E0E0E]/80 border-b border-neutral-800/80 sm:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-xl p-1"
            aria-label="Shawarma Line Homepage"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-bold text-neutral-300 hover:text-brand-yellow transition-colors duration-200 tracking-wider uppercase whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded px-1.5 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Live Store Status Indicator */}
            <div
              className={`hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap ${
                isOpen
                  ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-300"
                  : "bg-amber-950/60 border-amber-500/30 text-amber-300"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isOpen ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isOpen ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
              </span>
              <span>{statusLabel} • Till 2 AM</span>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 sm:px-4 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-brand-orange/60 text-neutral-200 hover:text-brand-yellow transition-all duration-200 flex items-center gap-2 min-h-[44px] min-w-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label={`Open Cart (${totalItems} items)`}
            >
              <ShoppingBag className="w-5 h-5 text-brand-orange" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                Cart
              </span>
              {totalItems > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-black bg-brand-orange text-white rounded-full min-w-[20px] shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Desktop WhatsApp CTA */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Shawarma%20Line!%20I%20would%20like%20to%20view%20the%20menu%20and%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-950/40 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0E0E0E] z-50 overflow-y-auto border-t border-neutral-800 shadow-2xl animate-in fade-in duration-150">
          <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-3 min-h-full pb-32">
            {/* Live Open Pill on Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{statusLabel} • Daily Closes 2:00 AM</span>
              </div>
              <span className="text-xs text-neutral-400">Kasur, PK</span>
            </div>

            <div className="py-2 flex items-center justify-between border-b border-neutral-800/60 pb-3">
              <BrandLogo size="sm" />
              <div className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                Official Menu
              </div>
            </div>

            <nav className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold text-neutral-200 hover:bg-neutral-900 hover:text-brand-yellow active:bg-neutral-800 transition-colors min-h-[48px]"
                >
                  <span>{link.name}</span>
                  <Flame className="w-4 h-4 text-brand-orange/60" />
                </a>
              ))}
            </nav>

            {/* Quick Contacts inside Drawer */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800">
              <a
                href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 font-bold text-xs uppercase min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Shawarma%20Line!%20I%20want%20to%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-3 text-center justify-center border-t border-neutral-800/60">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Govt. Islamia College Road, Kasur</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
