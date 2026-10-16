/**
 * Central business details for Shawarma Line (Kasur, Pakistan)
 */

export const RESTAURANT_INFO = {
  name: "Shawarma Line",
  tagline: "All Taste Behind Me",
  city: "Kasur",
  address: "Govt. Islamia College Boys Campus, College Road, Kasur, Punjab, Pakistan",
  shortAddress: "College Road, Kasur",
  phonePrimary: "0327-0090903",
  phoneSecondary: "0326-4513596",
  phonePrimaryRaw: "+923270090903",
  phoneSecondaryRaw: "+923264513596",
  whatsAppNumber: "923270090903",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.568772390886!2d74.4379373!3d31.1165184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919c7f66a7b6cf3%3A0xb35a74a88318b76e!2sGovt.%20Islamia%20College%20Kasur!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=Govt.+Islamia+College+Boys+Campus+College+Road+Kasur",
  rating: 4.5,
  reviewCount: "480+",
  openingHour: 13, // 1:00 PM
  closingHour: 2, // 2:00 AM (Next day)
  hoursDisplay: "Open Daily 1:00 PM – 2:00 AM",
  closesAtText: "Open daily, closes 2 AM",
  paymentMethod: "Cash Only",
  parking: "Free Street & On-Site Parking",
  amenities: ["Dine-In Available", "Quick Takeaway", "Hot Doorstep Delivery", "Drive-Through Support", "Kids Friendly", "Air Conditioned Family Hall"],
};

export function getWhatsAppOrderUrl(message: string): string {
  return `https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(
    message
  )}`;
}
