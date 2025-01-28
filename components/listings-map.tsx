import { useMemo, useRef, useState } from "react";
import { ListingCard } from "./listing-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Map } from "lucide-react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  OverlayView,
} from "@react-google-maps/api";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HeartButton } from "./heart-button";
import Link from "next/link";

interface Listing {
  images: string[];
  name: string;
  location: string;
  ratings: string;
  reviews: number;
  price: string;
  people: number;
  instant: boolean;
  membershipPlan: boolean;
}

interface ListingsProps {
  listings: Listing[];
  setShowMap: (show: boolean) => void;
}

const center = {
  lat: 6.4983,
  lng: 3.3486,
};

export const ListingsMap = ({ listings, setShowMap }: ListingsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState<{
    coordinates: string;
    price: string;
  } | null>(null); // Track which marker is clicked

  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null); // Track which marker is hovered
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Get current listings to display
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `AIzaSyB8TB09-wgicZebEtZI4ij9-SSVaBT3mEI`,
    libraries: ["places"],
  });

  let locations = [
    { coordinates: "6.4983, 3.3486", price: "50,000" },
    { coordinates: "6.4936, 3.3444", price: "20,000" },
  ];


  if (!isLoaded) {
    return "loading....";
  }

  return (
    <div className="flex flex-col gap-8 lg:pl-[72px] lg:pr-0 md:px-8">
      <div className="flex lg:flex-row flex-col-reverse justify-between  gap-8 border-t border-[#1A1A1A14]">
        <div className="relative z-50 bg-white md:p-0 p-4 rounded-t-[24px] col-span-3 mt-6">
          <div className="lg:hidden flex justify-center items-center">
            <div className="bg-[#20202033] h-1.5 w-16 rounded-lg mb-4"></div>
          </div>
          <p className="text-sm text-[#333333] font-medium leading-[21px] mb-4">
            10 birthday photo shoot spaces in Yaba, Lagos
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4">
            {currentListings.map((listing, index) => (
              <div
                className="rounded-xl"
                style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
                key={index}
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 h-screen sticky top-0">
          <div className="map md:h-[891px] md:w-[620px] h-full w-full">
            <GoogleMap
              center={{ lat: 6.4983, lng: 3.3486 }}
              zoom={16}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              {locations.map((location, index) => {
                const [lat, lng] = location.coordinates.split(",").map(Number);

                return (
                  <div key={index}>
                    {/* Marker Icon */}
                    <Marker
                      position={{ lat, lng }}
                      icon={{
                        url: `/dot.svg`,
                        scaledSize: new google.maps.Size(20, 20),
                      }}
                      onClick={() => setSelectedMarker(location)} // Open dialog on marker click
                    />

                    {/* Custom OverlayView for Price Tooltip */}
                    <OverlayView
                      position={{ lat, lng }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <Popover>
                        <PopoverTrigger asChild>
                          <div
                            className="flex flex-col justify-center items-center"
                            style={{
                              position: "absolute",
                              transform: "translate(-50%, -100%)", // Center and position above the marker
                              whiteSpace: "nowrap",
                            }}
                          >
                            <p className="bg-white text-sm font-medium p-2 rounded shadow-xl cursor-pointer">
                              ₦{location.price}/hr
                            </p>
                            <div className="relative w-6 h-6 mt-1">
                              <Image src="/dot.svg" alt="price" fill />
                            </div>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent
                          side="top"
                          align="center"
                          className="p-0 rounded-xl w-[220px]"
                        >
                          <div>
                            <div className="relative w-full h-[125px] rounded-t-xl overflow-hidden">
                              <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true} // Enables navigation arrows
                                pagination={{
                                  clickable: true,
                                  type: "bullets",
                                }} // Adds round dots below
                                modules={[Navigation, Pagination]}
                                className="h-full custom-swiper" // Add a custom class for Swiper
                              >
                                {[
                                  "/listing-1.jpeg",
                                  "/listing-2.jpeg",
                                  "/listing-3.jpeg",
                                  "/listing-4.jpeg",
                                ].map((image, index) => (
                                  <SwiperSlide key={index}>
                                    <div className="relative w-full h-full">
                                      <Image
                                        fill
                                        alt={`listing-${index}`}
                                        src={image}
                                        className="object-cover h-full w-full transition rounded-t-xl"
                                      />
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>

                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100">
                                <HeartButton />
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-b-lg">
                              <Link
                                href="/bookings"
                                className="flex flex-col gap-2"
                              >
                                <h3 className="md:text-[15px] text-sm truncate text-[#001224] font-bold leading-[21.17px]">
                                  All Exclusive Shanty studios
                                </h3>
                                <div className="flex items-center gap-1">
                                  <Image
                                    src="/location.svg"
                                    alt="location"
                                    width={18}
                                    height={18}
                                  />
                                  <p className="text-sm text-[#434242]">
                                    Ikeja, Lagos
                                  </p>
                                </div>
                              </Link>
                              <hr className="h-[1px] my-4" />
                              <div className="">
                                <p className="text-base text-[#001224]">
                                  From{" "}
                                  <span className="font-bold">
                                    ₦{location.price}
                                  </span>
                                  /hr
                                </p>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </OverlayView>
                  </div>
                );
              })}
            </GoogleMap>
          </div>
        </div>
        <div
          onClick={() => setShowMap(false)}
          className="fixed bottom-10 z-50 left-[50%] -translate-x-1/2 flex gap-2 rounded-lg w-[166px] h-11 py-2.5 px-5 hover:bg-[#001224]  bg-[#FDF1C3] cursor-pointer group"
        >
          <Map className="size-6 text-[#001224] group-hover:text-white" />
          <p className="text-base text-[#001224] group-hover:text-white font-medium">
            Hide Map
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[96px]">
        <div className="flex items-center lg:gap-4 gap-2">
          <button
            className={cn(
              "md:text-sm text-xs font-medium",
              currentPage === 1 ? "text-[#4342426E]" : "text-[#434242]"
            )}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex gap-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`flex justify-center items-center md:size-10 size-8 lg:text-sm text-xs rounded-full ${
                  currentPage === index + 1
                    ? "bg-[#FDF1C3] border border-[#1A1A1A14]"
                    : "border border-[#1A1A1A14]"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className={cn(
              "md:text-sm text-xs font-medium",
              currentPage === totalPages ? "text-[#4342426E]" : "text-[#434242]"
            )}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
