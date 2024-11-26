"use client";

import { listings } from "@/lib/data";
import Image from "next/image";
import { ListingCard } from "./listing-card";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Listing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollContainer = (direction: "left" | "right"): void => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2; // Scroll by half the container's width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(container.scrollLeft < maxScrollLeft);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      handleScroll(); // Initialize button visibility on load
    }
  }, []);

  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <h4 className="lg:text-[28px] md:text-2xl text-lg text-[#001224] font-bold">
        Top rated listings
      </h4>
      <p className="text-sm leading-6 text-[#434242]">
        Curated to ensure the highest level of satisfaction
      </p>

      <div className="relative py-4">
        {/* Left Button */}
        {showLeftButton && (
          <button
            onClick={() => scrollContainer("left")}
            className="absolute flex justify-center items-center left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-20 size-12 shadow-xl"
            aria-label="Scroll left"
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <ChevronLeft className="size-8 text-[#001224]" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          className="flex overflow-x-auto gap-4 no-scrollbar pb-6 "
          ref={containerRef}
          onScroll={handleScroll}
          style={{ scrollBehavior: "smooth" }}
        >
          {listings.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[312px] rounded-xl"
              style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.059)" }}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        {showRightButton && (
          <button
            onClick={() => scrollContainer("right")}
            className="absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-20 size-12 shadow-xl"
            aria-label="Scroll right"
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <ChevronRight className="size-8 text-[#001224]" />
          </button>
        )}
      </div>
    </div>
  );
};
