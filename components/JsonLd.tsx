import React from "react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

export function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: RESTAURANT_INFO.name,
    legalName: RESTAURANT_INFO.legalName,
    description:
      "Easy Cheesy Kasur - Serving Moments, Not Just Meals. Famous for double beef smash burgers, cheesy crown crust pizza, flavor-injected broast, club sandwiches, and Chinese cuisine. Kids Play Zone upstairs. Open till 2:00 AM.",
    image: [
      "/images/easy-cheesy/burger-smash-cut.png",
      "/images/easy-cheesy/building-exterior-night.png",
      "/images/easy-cheesy/pizza-slice-loaded.png",
    ],
    telephone: RESTAURANT_INFO.phonePrimaryRaw,
    url: "https://easycheesy.pk",
    priceRange: "PKR 250 - 4600",
    servesCuisine: [
      "Fast Food",
      "Smash Burgers",
      "Artisan Pizza",
      "Injected Broast",
      "Club Sandwiches",
      "Chinese Cuisine",
      "Mocktails & Shakes",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot #8 Near Elite College, Shahbaz Khan Road, Ali Ahmad Shah Colony",
      addressLocality: "Kasur",
      addressRegion: "Punjab",
      postalCode: "55050",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1192,
      longitude: 74.4429,
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
        opens: "12:00",
        closes: "02:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      bestRating: "5",
      reviewCount: "269",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
