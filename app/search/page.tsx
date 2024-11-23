"use client";
import { Footer } from "@/components/footer";
import { Search } from "@/components/search";
import { SearchHeader } from "@/components/search-header";
import { listings } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const SearchPage = () => {
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
    <div>
      <SearchHeader />
      <div className="flex justify-center items-center gap-[56px] my-[56px] ">
        <Search />
      </div>
      <div className="flex flex-col gap-8 lg:px-[72px] md:p-8 p-4">
        <div>first</div>
        <div className="flex flex-col">
          <p className="text-sm text-[#333333] font-medium leading-[21px] mb-4">
            10 birthday photo shoot spaces in Yaba, Lagos
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {currentListings.map(
              (
                { name, location, ratings, reviews, price, image, people, instant },
                index
              ) => (
                <div
                  className="rounded-xl w-[312px]"
                  style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
                >
                  <div
                    className="relative bg-cover bg-center w-[312px] h-[200px] rounded-t-xl"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  >
                    {instant && <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                      Instant Booking Available
                    </div>}
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
                currentPage === totalPages
                  ? "text-[#4342426E]"
                  : "text-[#434242]"
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
      <Footer />
    </div>
  );
};

export default SearchPage;
