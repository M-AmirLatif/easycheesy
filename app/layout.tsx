import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { MobileActionBar } from "@/components/MobileActionBar";
import { CartDrawer } from "@/components/CartDrawer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RestaurantJsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#0C0C0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://easycheesy-wine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Easy Cheesy Kasur | Smash Burgers, Crown Pizzas & Broast Till 2 AM",
  description:
    "Serving Moments, Not Just Meals. Kasur's favorite ultimate double beef smash burgers, cheesy crown pizzas, crispy injected broast, club sandwiches, and Chinese cuisine. 2-Floor family dining with Kids Play Zone on Shahbaz Khan Road. Open daily till 2:00 AM.",
  keywords: [
    "Easy Cheesy",
    "Easy Cheesy Kasur",
    "Easy Cheesy Restaurant",
    "Smash Burger Kasur",
    "Crown Crust Pizza Kasur",
    "Injected Broast Kasur",
    "Shahbaz Khan Road Food",
    "Kasur Fast Food",
    "Late Night Delivery Kasur",
    "Kids Play Zone Restaurant Kasur",
  ],
  authors: [{ name: "Easy Cheesy Kasur" }],
  openGraph: {
    title: "Easy Cheesy Kasur | Ultimate Smash Burgers & Crown Pizzas",
    description:
      "Serving Moments, Not Just Meals. Double beef smash burgers, cheesy crown pizzas, injected crispy broast & late-night delivery till 2 AM in Kasur.",
    url: SITE_URL,
    siteName: "Easy Cheesy Kasur",
    images: [
      {
        url: "/og-fastfood.jpg",
        secureUrl: `${SITE_URL}/og-fastfood.jpg`,
        width: 1200,
        height: 630,
        alt: "Easy Cheesy Kasur - Ultimate Beef Smash Burger & Sizzling Fast Food Feast",
        type: "image/jpeg",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Cheesy Kasur | Serving Moments, Not Just Meals",
    description:
      "Kasur's home for juicy double smash burgers, cheesy crown crust pizza, injected broast, and club sandwiches. Open daily till 2 AM. WhatsApp: 0327-4343999.",
    images: [`${SITE_URL}/og-fastfood.jpg`],
  },
  icons: {
    icon: [
      { url: "/images/easy-cheesy-badge.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/easy-cheesy-badge.svg",
    apple: "/images/easy-cheesy-badge.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${bebas.variable} scroll-smooth`}
    >
      <head>
        <meta property="og:title" content="Easy Cheesy Kasur | Ultimate Smash Burgers & Crown Pizzas" />
        <meta
          property="og:description"
          content="Serving Moments, Not Just Meals. Kasur's favorite ultimate double beef smash burgers, cheesy crown pizzas, and injected crispy broast. Open daily till 2:00 AM."
        />
        <meta property="og:image" content={`${SITE_URL}/og-fastfood.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/og-fastfood.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Easy Cheesy Kasur Fast Food Feast" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Easy Cheesy Kasur" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Easy Cheesy Kasur | Smash Burgers & Crown Pizzas" />
        <meta
          name="twitter:description"
          content="Serving Moments, Not Just Meals. Open daily till 2:00 AM in Kasur. Order: 0327-4343999"
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-fastfood.jpg`} />
        <RestaurantJsonLd />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #0C0C0E !important;
                color: #FDFBF7 !important;
                margin: 0;
                padding: 0;
                font-family: var(--font-jakarta), system-ui, -apple-system, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#0C0C0E] text-[#FDFBF7] antialiased min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
        <CartProvider>
          {/* Animated Splash Screen */}
          <LoadingScreen />

          {/* Top Sticky Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Site Footer */}
          <Footer />

          {/* Mobile Bottom Fixed Action Bar (Call, WhatsApp, Cart) */}
          <MobileActionBar />

          {/* Cart Slide-over Drawer */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
