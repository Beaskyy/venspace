import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export const Reviews = () => {
  const [disabled, setDisabled] = useState(false);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLess, setShowLess] = useState(false);
  const allReviews = [
    {
      id: 1,
      author: "Jane Doe",
      rating: 5,
      content: `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      vulputate libero et velit interdum, ac aliquet odio mattis.
      Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos.`,
      date: "2022-01-01",
    },
    {
      id: 2,
      author: "Jane Doe",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ipsum semper semper.",
      date: "2022-01-01",
    },
    {
      id: 3,
      author: "Jane Doe",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ipsum semper semper.",
      date: "2022-01-01",
    },
    {
      id: 4,
      author: "Jane Doe",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ipsum semper semper.",
      date: "2022-01-01",
    },
  ];

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

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

  const handleShowAll = () => {
    setReviewsPerPage(allReviews.length);
    setCurrentPage(1);
  };

  const handleShowLess = () => {
    setReviewsPerPage(2);
    setCurrentPage(1);
    setShowLess(false);
  };

  const currentReviews = allReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );
  return (
    <div className="flex flex-col gap-8 lg:px-[72px] lg:pt-0 md:p-8 p-4">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <p className="text-[#001224] text-lg font-bold">
            Reviews ({allReviews.length})
          </p>
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {currentReviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#FFFBEB] py-7 px-6 rounded-lg"
            >
              {/* Review content here */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <Image src="/star.svg" alt="star" width={16} height={16} />
                  <Image src="/star.svg" alt="star" width={16} height={16} />
                  <Image src="/star.svg" alt="star" width={16} height={16} />
                  <Image src="/star.svg" alt="star" width={16} height={16} />
                  <Image src="/star.svg" alt="star" width={16} height={16} />
                </div>
                <p className="text-[#434242] text-base leading-6">
                  {review?.content}
                </p>
              </div>
              <div className="flex gap-1">
                <div className="relative w-14 h-14 rounded-full">
                  <Image
                    src="/chidera.jpeg"
                    alt="host"
                    fill
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-base font-bold text-[#001224]">
                    Jane Doe
                  </h2>
                  <p className="text-[#434242B2] text-[13px]">May, 2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {reviewsPerPage < allReviews.length && (
          <div className="flex justify-center items-center">
            <Button
              className="bg-transparent shadow-none border border-[#1A1A1A26] w-[355px] text-[#001224] hover:text-white"
              onClick={handleShowAll}
            >
              Show all {allReviews.length} Reviews
            </Button>
          </div>
        )}
        {reviewsPerPage === allReviews.length && (
          <div className="flex justify-center items-center">
            <Button
              className="bg-transparent shadow-none border border-[#1A1A1A26] w-[355px] text-[#001224] hover:text-white"
              onClick={handleShowLess}
            >
              See Less Reviews
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
