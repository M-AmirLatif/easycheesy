/**
 * Central business details for Easy Cheesy (Kasur, Pakistan)
 * Extracted from Google Maps Profile & Official Social Channels
 */

export const RESTAURANT_INFO = {
  name: "Easy Cheesy",
  legalName: "Easy Cheesy Fast Food Restaurant Kasur",
  tagline: "Serving Moments, Not Just Meals",
  subTagline: "Love at First Bite",
  city: "Kasur",
  address: "Plot #8 Near Elite College, Shahbaz Khan Road, Ali Ahmad Shah Colony, Kasur, Punjab 55050, Pakistan",
  shortAddress: "Shahbaz Khan Road, Kasur",
  plusCode: "4FF6+2V8 Kasur, Pakistan",
  phonePrimary: "0327-4343999",
  phoneSecondary: "0328-4343999",
  phonePrimaryRaw: "+923274343999",
  phoneSecondaryRaw: "+923284343999",
  whatsAppNumber: "923274343999",
  instagramUrl: "https://www.instagram.com/easy_cheesy_ksr/",
  instagramHandle: "@easy_cheesy_ksr",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=Easy+Cheesy+Shahbaz+Khan+Road+Kasur+Pakistan",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8252278453535!2d74.4429994!3d31.1192809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919c700441d4c79%3A0x6b777e4368172c35!2sShahbaz%20Khan%20Rd%2C%20Kasur%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  rating: 4.1,
  reviewCount: "269+",
  totalPosts: 237,
  openingHour: 12, // 12:00 PM (Noon)
  closingHour: 2, // 2:00 AM (Late night)
  hoursDisplay: "Open Daily 12:00 PM – 2:00 AM",
  closesAtText: "Open daily, closes 2 AM",
  paymentMethod: "Cash on Delivery & Takeaway Cash",
  parking: "Dedicated Street Parking & Bike Bay",
  amenities: [
    "Air-Conditioned Family Dining Hall",
    "Kids Play Zone (Inflatable Castle)",
    "Ultimate Smash Burgers & Crown Pizzas",
    "Injected Crispy Broast & Sandwiches",
    "Authentic Chinese Cuisine & Soups",
    "Late-Night Delivery Till 2:00 AM",
    "Quick Takeaway & Dine-In Service",
  ],
};

export function getWhatsAppOrderUrl(message: string): string {
  return `https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(
    message
  )}`;
}
