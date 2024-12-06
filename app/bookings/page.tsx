"use client"
import { BookingImages } from "@/components/booking-images"
import { BookingsHeader } from "@/components/bookings-header"
import { BookingsInfo } from "@/components/bookings-info"
import { Reviews } from "@/components/reviews"

const Bookings = () => {
  return (
    <main>
      <BookingsHeader />
      <BookingImages />
      <BookingsInfo />
      <Reviews />
    </main>
  )
}

export default Bookings