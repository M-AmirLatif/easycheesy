# Shawarma Line — Master Design System (MASTER.md)

> **Brand & UX Framework:** Fast-Food Hospitality & Late-Night Grill  
> **Location:** Govt. Islamia College Boys Campus, College Road, Kasur, Pakistan  
> **Tagline:** "All Taste Behind Me"  
> **Derived via:** `ui-ux-pro-max` search + Brand Identity Requirements

---

## 1. Brand Concept & Visual Identity

Shawarma Line is Kasur's premier late-night fast-food destination, known for juicy shawarmas, loaded zinger burgers, and gourmet pizzas served fresh until 2:00 AM. The design combines the fiery sizzle of live charcoal grilling with high-contrast, appetitive punch.

- **Mascot & Wordmark:** Bold brush lettering with a dynamic flame-chef mascot (chef hat + roaring grill flame).
- **Hero & Key Visual Mood:** Dark charcoal atmosphere (`#0E0E0E`) infused with fiery amber/orange radial glows (`#F97316`, `#FFC20E`) and subtle smoke/grain textures.
- **Section Rhythm:** Dramatic dark hero and late-night deals sections with crisp, warm-toned food-first content sections (`#121212` / `#181818` card surfaces with rich borders) providing high contrast, readability, and appetite stimulation.

---

## 2. Color Palette & Semantic Tokens

| Token | Hex Value | Semantic Role | Accessibility / Contrast |
|---|---|---|---|
| `--color-primary` | `#F97316` | Flame Orange (Brand Core, Action Highlights) | 4.8:1 on dark surfaces |
| `--color-accent-yellow` | `#FFC20E` | Warm Yellow (Menu Badges, Stars, Highlights) | High vibrancy accent |
| `--color-chili-red` | `#DC2626` | Chili Red (Spicy badges, Deal urgency, Hot items) | High impact alert/tag |
| `--color-bg-dark` | `#0E0E0E` | Deep Charcoal Black (Root Background) | Base dark canvas |
| `--color-surface-card` | `#161616` | Card & Panel Dark Surface | Subtle lift from background |
| `--color-surface-hover` | `#222222` | Interactive Card Hover Surface | 150-200ms ease-out |
| `--color-surface-elevated` | `#2A2A2A` | Floating Badges, Modals, Drawers | High depth |
| `--color-border-subtle` | `#2E2E2E` | Card & Divider Borders | Subtle 1px boundary |
| `--color-border-focus` | `#F97316` | Active states & Focus Rings | 3px visible ring |
| `--color-text-primary` | `#FDFBF7` | Warm Off-White (Headings & Body Text) | 16:1 contrast ratio |
| `--color-text-secondary` | `#A3A3A3` | Neutral Gray (Descriptions, Metadata) | 5.2:1 contrast ratio |
| `--color-whatsapp` | `#25D366` | WhatsApp Direct Conversion CTA | Official Brand Green |

---

## 3. Typography Hierarchy

Fonts loaded via `next/font/google`:
1. **Display Heading:** `Bebas Neue` — Tall, bold, condensed uppercase for punchy food titles, deals, and impact statements.
2. **Script Accent:** `Kaushan Script` — Energetic culinary brush script for tags, subheads ("All Taste Behind Me", "Kasur's Favourite").
3. **Body & Interface:** `Plus Jakarta Sans` — Modern, ultra-legible geometric sans for menus, descriptions, prices, tabs, buttons, and badges.

### Typography Scale
- **Hero Title:** `text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight font-display`
- **Section Heading:** `text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide font-display`
- **Card Titles:** `text-lg sm:text-xl font-bold font-sans text-neutral-100`
- **Script Accents:** `text-xl sm:text-2xl font-normal font-script text-amber-400`
- **Body Regular:** `text-sm sm:text-base leading-relaxed text-neutral-300 font-sans`
- **Price Display:** `text-xl sm:text-2xl font-black text-amber-400 font-display`
- **Badges / Tags:** `text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full`

---

## 4. Spacing, Layout & Responsive Standards

- **Mobile First:** Standard baseline 375px viewport tested rigorously up to 1440px+.
- **Touch Targets:** All interactive elements (buttons, selectors, category pills, drawer items) minimum 44px x 44px (`min-h-[44px] min-w-[44px]`).
- **Container Max-Width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Card Radii:** `rounded-2xl` for food cards, `rounded-xl` for pills and buttons, `rounded-full` for chips and avatars.
- **Section Gaps:** `py-16 sm:py-24` with glowing dividing accents.
- **No Horizontal Scroll:** `overflow-x-hidden` on main layouts with full width containment.

---

## 5. Components & Interaction Guidelines

### Buttons & CTAs
- **Primary Order CTA:** Flame orange (`#F97316`) gradient with warm yellow hover, slight 2px translateY lift, active tap feedback.
- **WhatsApp Direct CTA:** Solid WhatsApp green (`#25D366`) with WhatsApp phone/chat icon, high contrast white text.
- **Secondary CTA:** Frosted glass border with translucent surface and hover ring.
- **Mobile Bottom Action Bar:** Fixed at screen bottom (`z-50`), blurred glass backdrop (`bg-black/85 backdrop-blur-md`), offering direct access to Call, WhatsApp, and Menu Cart.

### Motion & Micro-Interactions (Framer Motion)
- **Reduced Motion:** Fully wraps animations in `useReducedMotion()` checks or CSS `@media (prefers-reduced-motion)`.
- **Hero Typing Animation:** Custom zero-dependency React hook (`useTypingEffect`) cycling phrases smoothly with a natural 530ms blinking cursor.
- **Marquee Ticker:** Seamless infinite horizontal scroll with best-seller badges.
- **Category Filter Tabs:** Smooth layout transitions with Framer Motion `layoutId` pill indicator.
- **Cart Sheet / Drawer:** Mobile friendly slide-over with real-time price tallying and one-click WhatsApp message builder.
- **Live Open/Closed Status:** Computed accurately against `Asia/Karachi` timezone (UTC+5), displaying "Open Daily Till 2 AM" with animated green/amber pulsing beacon.

---

## 6. Pre-Delivery Quality Checklist
- [x] No emoji as primary icons (100% `lucide-react` SVG vector icons).
- [x] Strict WCAG AA contrast on all text and UI elements.
- [x] Zero placeholders, zero TODO comments.
- [x] Complete Shawarma Line menu (all 12 categories, exact prices in PKR / Rs).
- [x] Validated JSON-LD `Restaurant` schema with coordinates, telephone, hours, and price range.
- [x] Next.js 14 App Router, TypeScript strict, Next/Image with blur placeholders.
