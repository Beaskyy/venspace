import { listings } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ListingCard } from "./listing-card";

export const PhotoshootStudios = () => {
  const reviewsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(listings.length / reviewsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const currentListings = listings.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );
  return (
    <div className="flex flex-col gap-6 lg:px-[72px] my-10 lg:pt-0 md:p-8 p-4">
      <div className="flex justify-between">
        <p className="text-[#001224] text-lg font-bold">Popular Birthday Photo shoot studios in Lagos</p>
        <div className="flex gap-5">
          <div
            className={cn(
              "flex justify-center items-center border-[1.5px] border-[#434242] w-10 h-10 rounded-full",
              currentPage === 1 && "border-[#1A1A1A4D]"
            )}
            onClick={handlePrevPage}
          >
            <ChevronLeft
              className={cn(
                "size- text-[#434242]",
                currentPage === 1 && "border-[#1A1A1A4D]"
              )}
            />
          </div>
          <div
            className={cn(
              "flex justify-center items-center border-[1.5px] border-[#434242] w-10 h-10 rounded-full",
              currentPage === totalPages && "border-[#1A1A1A4D]"
            )}
            onClick={handleNextPage}
          >
            <ChevronRight
              className={cn(
                "size- text-[#434242]",
                currentPage === totalPages && "border-[#1A1A1A4D]"
              )}
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {currentListings.map((listing, index) => (
            <div
              className="rounded-xl lg:w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
              key={index}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
    </div>
  );
};
