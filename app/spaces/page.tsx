"use client";

import { ContentSpace } from "@/components/content-space";
import { DescribeSpace } from "@/components/describe-space";
import { SpaceAddress } from "@/components/space-address";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const Spaces = () => {
  const totalPages = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const spaces = [
    {
      name: "Content Space",
      image: "/content.jpeg",
    },
    {
      name: "Content Space 1",
      image: "/content.jpeg",
    },
    {
      name: "Content Space 2",
      image: "/content.jpeg",
    },
    {
      name: "Content Space 3",
      image: "/content.jpeg",
    },
    {
      name: "Content Space 4",
      image: "/content.jpeg",
    },
    {
      name: "Content Space 5",
      image: "/content.jpeg",
    },
  ];

  // const handleSpaceClick = (name: string) => {
  //   setSelectedSpace((prev) => (prev === name ? null : name));
  //   setIsDisabled(false);
  //   // Add additional logic here, e.g., navigation or API calls
  // };

  // Calculate progress width as a percentage
  const progressWidth = (currentPage / totalPages) * 100;

  // Handler for navigation
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div>
        <div className="px-10 py-4 flex justify-between">
          <Image src="/logo.png" alt="logo" width={64} height={64} />
          <Button
            variant="ghost"
            className="border border-[#1A1A1A26] text-[#001224] text-base font-medium"
          >
            Save and Exit
          </Button>
        </div>
        <div className="relative bg-[#1A1A1A1A] h-2.5">
          <div
            className="absolute h-2.5 bg-[#F44363] z-50 top-0"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-scroll py-16">
        {currentPage === 1 ? (
          <ContentSpace
            spaces={spaces}
            selectedSpace={selectedSpace}
            setSelectedSpace={setSelectedSpace}
            setIsDisabled={setIsDisabled}
          />
        ) : currentPage === 2 ? (
          <DescribeSpace />
        ) : currentPage === 3 ? (
          <SpaceAddress />
        ) : (
          <p className="flex justify-center items-center text-2xl font-medium">
            This is the content for page {currentPage}. You can add dynamic
            components or data here based on the current page.
          </p>
        )}
      </div>

      {/* Fixed Footer */}
      <div className="px-10 pb-16">
        <hr className="border-t border-[#1A1A1A14] pt-4" />
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleBack}
          >
            <Image src="/arrow-left.svg" alt="back" width={24} height={24} />
            <span>Back</span>
          </div>
          <p className="text-base font-medium">
            {currentPage}/{totalPages}
          </p>
          <Button onClick={handleNext} disabled={isDisabled}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
