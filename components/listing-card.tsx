import Image from "next/image";
import { HeartButton } from "./heart-button";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ListingCardProps {
  listing: {
    images: string[];
    name: string;
    location: string;
    ratings: string;
    reviews: number;
    price: string;
    people: number;
    instant: boolean;
  };
}
export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div>
      <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true} // Enables navigation arrows
          pagination={{ clickable: true, type: "bullets" }} // Adds round dots below
          modules={[Navigation, Pagination]}
          className="h-full custom-swiper" // Add a custom class for Swiper
        >
          {listing.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  fill
                  alt={`listing-${index}`}
                  src={image}
                  className="object-cover h-full w-full group-hover:scale-110 transition rounded-t-xl group-hover:cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {listing.instant && (
          <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
            Instant Booking Available
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100">
          <HeartButton />
        </div>
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <Link href="/bookings" className="flex flex-col gap-2">
          <h3 className="md:text-base text-sm truncate text-[#001224] font-bold leading-[21.17px]">
            {listing.name}
          </h3>
          <div className="flex items-center gap-1">
            <Image src="/location.svg" alt="location" width={18} height={18} />
            <p className="text-sm text-[#434242]">{listing.location}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/profile-2user.svg"
              alt="users"
              width={18}
              height={18}
            />
            <p className="text-sm text-[#434242]">{listing.people} People</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <p className="text-sm text-[#434242]">
              {listing.ratings} ({listing.reviews} reviews)
            </p>
          </div>
        </Link>
        <hr className="h-[1px] my-4" />
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <p className="text-base text-[#001224]">
            From <span className="font-bold">₦{listing.price}</span>/hr
          </p>
          <p className="text-[13px] text-[#43424299] leading-5">
            Responds within 1 hr
          </p>
        </div>
      </div>
    </div>
  );
};
