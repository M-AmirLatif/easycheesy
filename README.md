# Shawarma Line — Premium Fast-Food Pitch Demo

> **"All Taste Behind Me"**  
> Kasur's Premier Late-Night Charcoal Grill, Rotisserie Shawarma & Pizza Restaurant  
> **Location:** Govt. Islamia College Boys Campus, College Road, Kasur, Pakistan  
> **Contact / WhatsApp:** +92 327 0090903 / 0326-4513596  
> **Hours:** Open daily until 2:00 AM  

---

## 🚀 Overview

This repository contains an agency-grade demo website designed specifically to pitch to the owner of **Shawarma Line (Kasur)**. Built from the ground up to convert visitors into orders with live WhatsApp messaging, live Asia/Karachi operating hours, animated Google 4.5★ badges, and a full interactive menu with size selectors.

### Key Highlights
- **Mobile-First Experience (375px+):** Touch-friendly buttons (≥ 44px), sticky bottom quick-action bar (Call / WhatsApp / Cart), and smooth horizontal scroll category tabs.
- **Dark Fiery Atmosphere:** Charcoal black canvas (`#0E0E0E`) with radiant amber-gold (`#FFC20E`), flame orange (`#F97316`), and chili red (`#DC2626`) accents.
- **Hero Typing Animation:** Custom zero-dependency typing hook cycling: *"Juicy Shawarma."*, *"Loaded Zinger Burgers."*, *"Cheesy Pizzas."*, *"Open Till 2 AM."*.
- **Interactive Mini-Cart:** In-memory order cart allowing customers to adjust quantities, pick pizza/pasta sizes, and dispatch an itemized WhatsApp order with automatic total calculation.
- **Real Reviews Only:** Verified Google Reviews with first names only (Ghulam M., Muhammad U., Ahmad A.).
- **Live Asia/Karachi Timezone Badge:** Calculates real-time open status (open 1:00 PM to 2:00 AM PKT) with glowing status beacon.
- **Full 12-Category Menu:** 45+ dishes matching the exact restaurant menu with PKR prices and add-ons.
- **Lighthouse Ready:** Built with semantic HTML, rich JSON-LD Restaurant schema, Web Vitals optimizations, next/image with blur placeholders, and accessibility focus states.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Motion:** Framer Motion + Tailwind Keyframe Animations
- **Icons:** `lucide-react` (100% SVG vectors, no emojis)
- **Typography:** `Bebas Neue` (Display), `Kaushan Script` (Culinary Accent), `Plus Jakarta Sans` (Body & UI) via `next/font/google`
- **SEO:** Metadata API, OpenGraph, Twitter Cards, Sitemap, Robots, JSON-LD `Restaurant` Schema

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Start production server
npm start
```

---

## ☁️ Deploy to Vercel

The project is zero-config ready for Vercel:
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. The framework preset is automatically detected as **Next.js**.
4. Click **Deploy**. Your live URL will be ready in under 60 seconds!

---

## 📖 How to Customize for the Client

### 1. Brand Logo & Mascot Assets (`public/images/`)
The authentic Shawarma Line chef mascot and official printed menu badge are processed and ready in `public/images/`:
- `public/images/shawarma-line-badge.png` — Full authentic emblem badge (Chef + Flames + "SHAWARMA LINE" skewer + "All Taste Behind Me").
- `public/images/shawarma-line-avatar.png` — Circular medallion icon with fiery border used across Navbar, Hero, and Favicons.
- `public/images/logo.png` — High-res brand mark.
- `public/favicon.svg`, `public/favicon.png`, `public/favicon.ico` — Multi-resolution browser favicons featuring the authentic chef mascot.

### 2. Swapping Food Photography (`lib/images.ts`)
All photos used across the hero, signature dishes, category placeholders, and the grill gallery are organized in a single central file: [`lib/images.ts`](file:///d:/ShawarmaLine/lib/images.ts).

To replace Unsplash photos with the client's actual photography:
1. Place their high-resolution photos into `public/images/`.
2. Open [`lib/images.ts`](file:///d:/ShawarmaLine/lib/images.ts) and update the paths:
   ```ts
   // Example:
   signatures: {
     grillPlatter: {
       url: "/images/real-grill-platter.jpg",
       alt: "Charcoal Flame Grilled Chicken Platter",
       photographer: "Shawarma Line",
     },
     // ...
   }
   ```

### 3. Updating Phone Numbers & Timings (`lib/restaurant-info.ts`)
To update the contact numbers, address, or WhatsApp phone:
Open [`lib/restaurant-info.ts`](file:///d:/ShawarmaLine/lib/restaurant-info.ts):
```ts
export const RESTAURANT_INFO = {
  name: "Shawarma Line",
  phonePrimary: "0327-0090903",
  phoneSecondary: "0326-4513596",
  whatsAppNumber: "923270090903", // Format: Country code without '+' (92 for PK)
  address: "Govt. Islamia College Boys Campus, College Road, Kasur, Punjab, Pakistan",
  // ...
};
```

### 3. Adding or Updating Menu Items & Deals (`data/menu.ts`)
All dishes, categories, sizes, and combo deals are stored in [`data/menu.ts`](file:///d:/ShawarmaLine/data/menu.ts).
- To change a price: edit the `price` field on any item.
- To add a new pizza size or topping: edit the `sizes` array.
- To change deals: modify `DEALS_DATA`.

---

## 📷 Image Credits & Licenses

All demo photography is sourced from royalty-free Unsplash photography under the Unsplash License (free for commercial and personal use):
- Hero Rotisserie Grill: Unsplash (`photo-1555939594-58d7cb561ad1`)
- Juicy Shawarma Roll: Unsplash (`photo-1529006557810-274b9b2fc783`, `photo-1633321702518-7feccafb94d5`)
- Crispy Zinger Burger: Unsplash (`photo-1568901346375-23c9450c58cd`, `photo-1571091718767-18b5b1457add`)
- Stone-Baked Cheese Pizza: Unsplash (`photo-1513104890138-7c749659a591`, `photo-1574071318508-1cdbab80d002`)
- Volcano Loaded Fries: Unsplash (`photo-1585109649139-366815a0d713`)
- Charcoal Mixed Grill: Unsplash (`photo-1544025162-d76694265947`)
- Wings & Starters: Unsplash (`photo-1567620832903-9fc6debc209f`)

---

## 🎯 Verification & Lighthouse Targets
- **Performance:** 90+ (Server components, image optimization, dynamic imports, tiny JS footprint)
- **Accessibility:** 95+ (ARIA labels, 44px+ touch targets, visible focus indicators, color contrast ≥ 4.5:1)
- **Best Practices:** 100 (HTTPS, modern image formats, clean semantic DOM)
- **SEO:** 100 (Metadata, Open Graph, Sitemap, Robots.txt, JSON-LD Restaurant Schema)
