import { useMemo, useRef, useState } from "react";
import { ListingCard } from "./listing-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Map } from "lucide-react";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  DirectionsRenderer,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Listing {
  image: string;
  name: string;
  location: string;
  ratings: string;
  reviews: number;
  price: string;
  people: number;
  instant: boolean;
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
    googleMapsApiKey: `AIzaSyAV-Ro1WZ5bFKJsxEjgRn8ytNa9VxmEkrw`,
    libraries: ["places"],
  });

  let locations = [
    { coordinates: "6.4983, 3.3486", price: "50,000" },
    { coordinates: "6.4983, 3.3586", price: "20,000" },
  ];

  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directions, setDirections] = useState(null);
  const originRef = useRef();

  const destinationRef = useRef();
  const options = useMemo(
    () => ({
      // mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  if (!isLoaded) {
    return "loading....";
  }

  return (
    <div className="flex flex-col gap-8 lg:pl-[72px] lg:pr-0 md:px-8 px-4">
      <div className="flex lg:flex-row flex-col justify-between  gap-8 border-t border-[#1A1A1A14]">
        <div className="col-span-3 mt-6">
          <p className="text-sm text-[#333333] font-medium leading-[21px] mb-4">
            10 birthday photo shoot spaces in Yaba, Lagos
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
          <div className="map" style={{ height: "891px", width: "620px" }}>
            <GoogleMap
              center={{ lat: 6.4983, lng: 3.3486 }}
              zoom={12}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              {locations.map((location, index) => {
                const [lat, lng] = location.coordinates.split(",").map(Number);

                return (
                  <Marker
                    key={index}
                    position={{ lat, lng }}
                    icon={{
                      url: `/arrow-left.svg`,
                      scaledSize: new google.maps.Size(40, 40),
                    }}
                    onClick={() => setSelectedMarker(location)} // Open dialog on click
                  >
                    {/* Tooltip always visible */}
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: "white",
                        padding: "5px",
                        borderRadius: "4px",
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                        transform: "translate(-50%, -100%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {location.price}
                    </div>
                  </Marker>
                );
              })}

              {/* Dialog using Shadcn UI */}
              {selectedMarker && (
                <Dialog
                  open={!!selectedMarker}
                  onOpenChange={() => setSelectedMarker(null)}
                >
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Marker Details</DialogTitle>
                    </DialogHeader>
                    <div>
                      <p>Coordinates: {selectedMarker.coordinates}</p>
                      <p>Price: {selectedMarker.price}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </GoogleMap>
          </div>
        </div>
        <div
          onClick={() => setShowMap(false)}
          className="fixed lg:top-[90%] lg:left-[45%] flex gap-2 rounded-lg w-[166px] h-11 py-2.5 px-5 hover:bg-[#001224]  bg-[#FDF1C3] cursor-pointer group"
        >
          <Map className="size-6 text-[#001224] group-hover:text-white" />
          <p className="text-base text-[#001224] group-hover:text-white font-medium">
            Hide Map
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[56px]">
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
