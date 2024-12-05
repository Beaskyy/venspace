"use client"
import { BookingImages } from "@/components/booking-images"
import { BookingsHeader } from "@/components/bookings-header"
import { BookingsInfo } from "@/components/bookings-info"

const Bookings = () => {
  return (
    <main>
      <BookingsHeader />
      <BookingImages />
      <BookingsInfo />
    </main>
  )
}

export default Bookings