import { cn } from "@/lib/utils";
import { Map } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
}
export const Listings = ({ listings }: ListingsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Get current listings to display
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <div className="relative flex flex-col">
        <p className="text-sm text-[#333333] font-medium leading-[21px] mb-4">
          10 birthday photo shoot spaces in Yaba, Lagos
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {currentListings.map(
            (
              {
                name,
                location,
                ratings,
                reviews,
                price,
                image,
                people,
                instant,
              },
              index
            ) => (
              <div
                className="rounded-xl w-[312px]"
                style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
                key={index}
              >
                <div
                  className="relative bg-cover bg-center w-[312px] h-[200px] rounded-t-xl"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  {instant && (
                    <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                      Instant Booking Available
                    </div>
                  )}
                </div>
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                      {name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/location.svg"
                        alt="location"
                        width={18}
                        height={18}
                      />
                      <p className="text-sm text-[#434242]">{location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/profile-2user.svg"
                        alt="users"
                        width={18}
                        height={18}
                      />
                      <p className="text-sm text-[#434242]">{people} People</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/star.svg"
                        alt="star"
                        width={18}
                        height={18}
                      />
                      <p className="text-sm text-[#434242]">
                        {ratings} ({reviews} reviews)
                      </p>
                    </div>
                  </div>
                  <hr className="h-[1px] my-4" />
                  <div className="flex justify-between items-center">
                    <p className="text-base text-[#001224]">
                      From <span className="font-bold">₦{price}</span>/hr
                    </p>
                    <p className="text-[13px] text-[#43424299] leading-5">
                      Responds within 1 hr
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="absolute top-[65%] left-[45%] flex gap-2 rounded-lg w-[166px] h-11 py-2.5 px-5 bg-[#FDF1C3] cursor-pointer">
          <Map className="size-6 text-[#001224]" />
          <p className="text-base text-[#001224] font-medium">Show Map</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[56px]">
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "text-sm font-medium",
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
                className={`flex justify-center items-center size-10 rounded-full ${
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
              "text-sm font-medium",
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
    </>
  );
};
