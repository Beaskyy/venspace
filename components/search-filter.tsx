import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { CategoryBox } from "./category-box";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SearchFilter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [range, setRange] = useState([500, 1000000]);

  const amenities = [
    "Free WiFI",
    "Lighting Equipments",
    "Changing Room",
    "Video Equipment",
    "Air Conditioning",
    "Free WiFI",
    "Wheelchair Accessible",
  ];

  // Toggle selection of an item
  const toggleSelection = (item: string) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item) // Remove item if already selected
          : [...prevSelected, item] // Add item if not selected
    );
  };

  const scrollContainer = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2; // Scroll by half the container's width
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    // Update button visibility
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(container.scrollLeft < maxScrollLeft);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(container.scrollLeft < maxScrollLeft);
  };

  const places = [
    "Daylight Studio",
    "Content House",
    "Apartment",
    "Park",
    "Outdor Space",
    "Production Studio",
    "Daylight Studio",
    "Content House",
    "Apartment",
    "Park",
    "Outdor Space",
    "Production Studio",
  ];
  return (
    <div className="lg:flex lg:flex-row flex-col justify-between w-full lg:gap-24 gap-12">
      <div className="flex gap-3 mb-4 md:mb-0">
        <Button className="md:text-sm text-xs md:w-10 w-7 h-8 md:h-[37px] rounded-[46px] bg-[#FDF1C3] py-2 px-3 shadow-none text-[#001224] font-medium hover:bg-[#001224] hover:text-white">
          All
        </Button>
        <div className="relative w-full">
          {/* Fade Effect */}
          {showRightButton && (
            <div className="absolute top-0 right-0 h-[71px] w-[185px] md:bg-[linear-gradient(270deg,_#FFFFFF_25.85%,_rgba(255,_255,_255,_0)_84.92%)] pointer-events-none z-10" />
          )}

          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => scrollContainer("left")}
              className="absolute flex justify-center items-center left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-none z-20 size-9"
              aria-label="Scroll left"
              style={{
                backdropFilter: "blur(2.222222328186035px)",
              }}
            >
              <ChevronLeft className="size-4 text-[#001224]" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            className="flex flex-row justify-between overflow-x-auto md:w-[765px] w-72 no-scrollbar gap-3 relative"
            ref={containerRef}
            onScroll={handleScroll}
            style={{ scrollBehavior: "smooth" }}
          >
            {places.map((place, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-[##1A1A1A14] bg-transparent shadow-none py-2 md:px-4 px-2 rounded-[32px] md:h-[37px] h-8 text-[#434242] md:text-sm text-xs leading-[21px] whitespace-nowrap hover:bg-transparent hover:shadow-none cursor-pointer"
              >
                <CategoryBox place={place} />
              </div>
            ))}
          </div>

          {/* Right Button */}
          {showRightButton && (
            <button
              onClick={() => scrollContainer("right")}
              className="absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 bg-white border border-[#1A1A1A14] rounded-full z-20 size-9"
              aria-label="Scroll right"
              style={{
                backdropFilter: "blur(2.222222328186035px)",
              }}
            >
              <ChevronRight className="size-4 text-[#001224]" />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row lg:items-center gap-4">
        <Select>
          <SelectTrigger className="md:w-[221px] w-1/2 h-11 border-[#1A1A1A26] rounded-xl text-sm text-[#001F3F66]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent
            className="rounded-xl border-none"
            style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
          >
            <SelectGroup>
              <SelectLabel></SelectLabel>
              <SelectItem
                value="recommended"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                Recommended
              </SelectItem>
              <SelectItem
                value="new listings"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                New Listings
              </SelectItem>
              <SelectItem
                value="top rated"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                Top Rated
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-2 lg:w-[110px] w-full h-11 bg-[#F8F9FA] hover:bg-[#ebebeb]/90 py-2 px-4 rounded-lg">
                <Image
                  src="/adjustment.svg"
                  alt="filter"
                  width={18}
                  height={18}
                />
                <p className="text-sm text-[#434242] font-medium">Filters</p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="w-[483px] rounded-xl p-6 max-h-[90vh] overflow-y-auto"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <DialogHeader>
                <DialogTitle className="text-base text-[#001224] leading-[21.17px]">
                  Filters
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <p className="text-sm text-[#434242] font-semibold">
                    Price Range
                  </p>

                  <Slider
                    defaultValue={range}
                    onValueChange={(values) => setRange(values)}
                    min={500}
                    max={1000000}
                    step={1000}
                    className="h-[1px]"
                  />
                  <div className="flex justify-between text-[#434242] font-medium">
                    <span>
                      <strong>₦{range[0].toLocaleString()}</strong>
                    </span>
                    <span>
                      <strong>₦{range[1].toLocaleString()}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-b border-[#1A1A1A14]">
                  <p className="text-sm text-[#434242] leading-[21px] pt-4">
                    Number of Guests
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <Input
                      type="text"
                      placeholder="2"
                      className="border border-[#1A1A1A26] rounded-xl py-3 px-4 h-12"
                    />
                    <p>to</p>
                    <Input
                      type="text"
                      placeholder="5"
                      className="border border-[#1A1A1A26] rounded-xl py-3 px-4 h-12"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 pb-6 border-b border-[#1A1A1A14]">
                  <p className="text-sm text-[#434242]">
                    Amenities - included in booking
                  </p>

                  <div className="flex flex-wrap gap-[18px]">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        onClick={() => toggleSelection(amenity)} // Toggle selection
                        className={`border py-2 px-4 rounded-[32px] h-[37px] text-[#434242] md:text-sm text-xs leading-[21px] whitespace-nowrap cursor-pointer 
              ${
                selectedItems.includes(amenity)
                  ? "border-[#1A1A1A]" // Selected border color
                  : "border-[#1A1A1A14]" // Default border color
              }`}
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1.5 border-b border-[#1A1A1A14]">
                  <div>
                    <Input type="checkbox" className="w-[18px] h-[18px]" />
                  </div>
                  <div className="flex items-start flex-col gap-1 pb-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src="flash.svg"
                        alt="flash"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm text-[#434242] font-semibold">
                        Instant Booking
                      </p>
                    </div>
                    <p className="md:text-sm text-xs text-[#434242CC]">
                      Only see spaces that can be instantly booked
                    </p>
                  </div>
                </div>
                <div className="flex gap-1.5 border-b border-[#1A1A1A14]">
                  <div>
                    <Input type="checkbox" className="w-[18px] h-[18px]" />
                  </div>
                  <div className="flex items-start flex-col gap-1 pb-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src="flash.svg"
                        alt="flash"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm text-[#434242] font-semibold">
                        Membership
                      </p>
                      <Image
                        src="badges.svg"
                        alt="badge"
                        width={16}
                        height={16}
                      />
                    </div>
                    <p className="md:text-sm text-xs text-[#434242CC]">
                      Only see spaces that their host offers membership
                    </p>
                  </div>
                </div>
              </DialogDescription>
              <DialogFooter className="flex flex-row justify-start gap-3 mt-6">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="bg-transparent border w-full border-[##1A1A1A26] text-[#001224] text-sm font-normal leading-[21px] hover:text-white hover:bg-[#001224] hover:border-none shadow-none"
                  >
                    Clear All
                  </Button>
                </DialogClose>
                <Button className="bg-[#F44363] w-full font-medium shadow-none">
                  Show 10 Results
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
