import React from "react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

export function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT_INFO.name,
    description:
      "Kasur's premier late-night fast-food and charcoal grill restaurant. Famous for juicy chicken shawarma, loaded zinger burgers, cheese crust pizza, and platters. Open till 2:00 AM.",
    image: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=85",
    ],
    telephone: RESTAURANT_INFO.phonePrimaryRaw,
    url: "https://shawarmaline.pk",
    priceRange: "PKR 150 - 2600",
    servesCuisine: [
      "Fast Food",
      "Shawarma",
      "Burgers",
      "Pizza",
      "Charcoal Grill",
      "Pakistani Fast Food",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Govt. Islamia College Boys Campus, College Road",
      addressLocality: "Kasur",
      addressRegion: "Punjab",
      postalCode: "55050",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1165,
      longitude: 74.4379,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "13:00",
        closes: "02:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      reviewCount: "480",
    },
    hasMenu: "https://shawarmaline.pk#menu",
    paymentAccepted: "Cash",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
