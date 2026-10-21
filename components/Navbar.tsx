"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  MapPin,
  Flame,
  ChevronRight,
  Sparkles,
  Tag,
  Award,
  Camera,
  Star,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { isOpen, statusLabel } = useStoreOpenStatus();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Digital Menu", href: "#menu", icon: Flame },
    { name: "Signature Picks", href: "#signature", icon: Sparkles },
    { name: "Value Deals", href: "#deals", icon: Tag },
    { name: "Why Easy Cheesy", href: "#why-us", icon: Award },
    { name: "Photo Gallery", href: "#gallery", icon: Camera },
    { name: "Customer Reviews", href: "#reviews", icon: Star },
    { name: "Visit & Contact", href: "#visit", icon: MapPin },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#0C0C0E]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl"
            : "bg-[#0C0C0E] sm:bg-gradient-to-b sm:from-black/95 sm:via-[#0C0C0E]/90 sm:to-[#0C0C0E]/80 border-b border-neutral-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl py-1 flex-shrink-0"
              aria-label="Easy Cheesy Homepage"
            >
              <BrandLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-neutral-300 hover:text-amber-400 transition-colors duration-200 tracking-wider uppercase whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1.5 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons & Badges */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Live Store Status Indicator (Desktop only) */}
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
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative w-10 h-10 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 text-neutral-200 hover:text-amber-400 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label={`Open Cart (${totalItems} items)`}
              >
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 sm:static sm:top-auto sm:right-auto inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] sm:text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full min-w-[18px] sm:min-w-[20px] shadow-sm leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Desktop WhatsApp CTA */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Easy%20Cheesy!%20I%20would%20like%20to%20view%20the%20menu%20and%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-950/40 min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Drawer Toggle (3-Line / 3-Dot Sidebar Toggle) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  mobileMenuOpen
                    ? "bg-amber-500 text-black border-amber-400 shadow-md"
                    : "bg-neutral-900 border-neutral-800 text-neutral-200 hover:text-white"
                }`}
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-black" />
                ) : (
                  <Menu className="w-5 h-5 text-amber-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Portaled directly into body to completely prevent backdrop-filter containing block issues) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] lg:hidden flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Dark Backdrop (Click to close) */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            />

            {/* Slide-out Drawer Panel */}
            <div className="relative w-full max-w-[320px] sm:max-w-sm h-full bg-[#0C0C0E] border-l border-neutral-800 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 p-5 animate-in slide-in-from-right duration-250">
              <div>
                {/* Top Header of Drawer: Logo + Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-4">
                  <BrandLogo size="sm" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center active:scale-95 transition-colors"
                    aria-label="Close Navigation Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Pill */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800/80 mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{statusLabel} • Closes 2 AM</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">
                    Kasur City
                  </span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.name}
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold text-neutral-200 hover:bg-neutral-900 hover:text-amber-400 active:bg-neutral-800 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Quick Contact Cards in Drawer */}
              <div className="pt-5 border-t border-neutral-800/80 mt-6 space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${RESTAURANT_INFO.phonePrimaryRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 font-bold text-xs uppercase"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Easy%20Cheesy!%20I%20want%20to%20order.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 pt-1 text-center">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">Shahbaz Khan Road, Kasur</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
