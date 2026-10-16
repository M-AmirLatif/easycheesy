import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue, Kaushan_Script } from "next/font/google";
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

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shawarma Line Kasur | Juicy Shawarma, Zinger Burgers & Pizzas Till 2 AM",
  description:
    "All Taste Behind Me. Order Kasur's favorite charcoal grilled chicken shawarmas, crispy zinger burgers, cheese stuffed crust pizzas, and loaded fries. Open daily till 2:00 AM on Govt. Islamia College Road.",
  keywords: [
    "Shawarma Line",
    "Shawarma Line Kasur",
    "Kasur Fast Food",
    "Late Night Food Kasur",
    "Zinger Burger Kasur",
    "Cheese Crust Pizza Kasur",
    "Charcoal Grill Shawarma",
    "College Road Kasur Food",
  ],
  authors: [{ name: "Shawarma Line" }],
  openGraph: {
    title: "Shawarma Line Kasur | All Taste Behind Me",
    description:
      "Kasur's premier late-night grill destination. Sizzling rotisserie shawarma, monster zinger burgers, stuffed crust pizza, and loaded fries till 2 AM.",
    url: "https://shawarmaline.pk",
    siteName: "Shawarma Line",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Shawarma Line Kasur - Sizzling Charcoal Grill & Shawarma",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawarma Line Kasur | Juicy Shawarma & Burgers Till 2 AM",
    description:
      "All Taste Behind Me. Kasur's favorite charcoal grilled chicken shawarma, crispy burgers, and gourmet pizza.",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
      className={`${jakarta.variable} ${bebas.variable} ${kaushan.variable} scroll-smooth`}
    >
      <head>
        <RestaurantJsonLd />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #0E0E0E !important;
                color: #FDFBF7 !important;
                margin: 0;
                padding: 0;
              }
              a {
                color: inherit;
                text-decoration: none;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-charcoal text-brand-offwhite flex flex-col antialiased selection:bg-brand-orange selection:text-white">
        <CartProvider>
          {/* Flame animation splash screen on initial visit */}
          <LoadingScreen />

          {/* Sticky Glass Navbar */}
          <Navbar />

          {/* Main App Content */}
          <main className="flex-1">{children}</main>

          {/* Site Footer */}
          <Footer />

          {/* Slide-over Order Cart Drawer */}
          <CartDrawer />

          {/* Mobile Bottom Fixed Action Bar (Call / WhatsApp / Cart) */}
          <MobileActionBar />
        </CartProvider>
      </body>
    </html>
  );
}
