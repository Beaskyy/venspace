"use client"

import PropertyCarousel from "@/components/property-carousel";

const propertyImages = [
  "../../public/booking-1.jpeg",
  "/images/listing-2.jpeg",
  "/images/listing-3.jpeg",
  "/images/listing-4.jpeg",
];

export default function PropertyPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Luxury Beach House</h1>
      <PropertyCarousel images={propertyImages} />
      <p className="mt-4 text-gray-600">
        Experience the ultimate luxury at this beachfront property with
        breathtaking views, a private pool, and modern amenities.
      </p>
    </div>
  );
}
