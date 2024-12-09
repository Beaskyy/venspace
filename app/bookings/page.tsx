"use client"
import { BookingImages } from "@/components/booking-images"
import { BookingsHeader } from "@/components/bookings-header"
import { BookingsInfo } from "@/components/bookings-info"
import { Footer } from "@/components/footer"
import { PhotoshootStudios } from "@/components/photoshoot-studios"
import { Reviews } from "@/components/reviews"

const Bookings = () => {
  return (
    <main>
      <BookingsHeader />
      <BookingImages />
      <BookingsInfo />
      <Reviews />
      <PhotoshootStudios />
      <Footer />
    </main>
  )
}

export default Bookings