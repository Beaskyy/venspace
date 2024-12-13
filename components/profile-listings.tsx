import { profileListings } from "@/lib/data";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
export const ProfileListings = () => {
  const [reviewsPerPage, setReviewsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowAll = () => {
    setReviewsPerPage(profileListings.length);
    setCurrentPage(1);
  };

  const handleShowLess = () => {
    setReviewsPerPage(4);
    setCurrentPage(1);
  };

  const currentListings = profileListings.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
        {currentListings.map((listing, index) => (
          <div
            className="rounded-xl"
            style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            key={index}
          >
            <div>
              <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
                <Image
                  fill
                  alt="listing"
                  src={listing.image}
                  className="object-cover h-full w-full group-hover:scale-110 transition rounded-t-xl group-hover:cursor-pointer"
                />
                <div className="absolute flex gap-1 items-center rounded w-[78px] h-[37px] bg-[#383838C9] py-2 px-2.5 top-4 right-20 cursor-pointer">
                  <span className="text-sm text-white">Share</span>
                  <Image
                    src="/export.svg"
                    alt="export"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                    {listing.name}
                  </h3>
                  <p className="text-sm text-[#434242]">
                    {listing.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/location.svg"
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">{listing.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">
                      {listing.people} People
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">
                      {listing.ratings} ({listing.reviews} reviews)
                    </p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex lg:flex-row flex-col justify-between lg:items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦{listing.price}</span>/hr
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {reviewsPerPage < profileListings.length && (
        <div className="flex justify-center items-center">
          <Button
            className="bg-transparent shadow-none border border-[#1A1A1A26] w-[355px] text-[#001224] hover:text-white"
            onClick={handleShowAll}
          >
            Load More
          </Button>
        </div>
      )}
      {reviewsPerPage === profileListings.length && (
        <div className="flex justify-center items-center">
          <Button
            className="bg-transparent shadow-none border border-[#1A1A1A26] w-[355px] text-[#001224] hover:text-white"
            onClick={handleShowLess}
          >
            See Less Reviews
          </Button>
        </div>
      )}
    </>
  );
};
