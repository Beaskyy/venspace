"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { format, isBefore, startOfDay } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const [recentSearches, setRecentSearches] = useState("");
  const [recentPlaces, setRecentPlaces] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [showRecentPlaces, setShowRecentPlaces] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  return (
    <div className="z-10">
      <div
        className="h-[68px] bg-white py-2 pl-8 pr-2 lg:w-[990px] flex justify-between items-center rounded-[64px]"
        style={{ boxShadow: "0px 2px 19px 0px #0000000D" }}
      >
        <div className="grid grid-cols-3 gap-10 w-full">
          <div
            className="relative border-r-[1.5px] border-transparent mt-3"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            }}
          >
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              What are you planning?
            </p>
            <Input
              type="text"
              placeholder="Enter your activity"
              value={recentSearches}
              onChange={(e) => setRecentSearches(e.target.value)}
              onKeyUp={() => setShowRecentSearches(true)}
              className="border-transparent shadow-none text-base font-medium p-0 placeholder:text-[#434242B2]"
            />
            {showRecentSearches && (
              <div
                className="absolute bg-white w-full h-[181px] rounded-[19px] mt-1 py-4"
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
              >
                <p className="text-[#C2C2C2] uppercase text-[10px] font-bold tracking-[10%] mb-2 px-4">
                  Recent Searches
                </p>
                <div className="flex flex-col gap-1">
                  {["Photo shoot", "Wedding reception", "Graduation party"].map(
                    (search) => (
                      <p
                        key={search}
                        className="py-2 px-4 hover:bg-[#F4F5F6] text-base text-[#001224] font-medium leading-6 cursor-pointer"
                        onClick={() => {
                          setRecentSearches(search);
                          setShowRecentSearches(false); // Close the dropdown after selection
                        }}
                      >
                        {search}
                      </p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className="relative border-r-[1.5px] border-transparent mt-3"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(217, 217, 217, 0) 17.29%, #D9D9D9 54.02%, rgba(217, 217, 217, 0) 81.57%) 1",
            }}
          >
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              Where?
            </p>
            <Input
              type="text"
              placeholder="Enter the area"
              value={recentPlaces}
              onChange={(e) => setRecentPlaces(e.target.value)}
              onKeyUp={() => setShowRecentPlaces(true)}
              className="border-transparent shadow-none text-base font-medium p-0 placeholder:text-[#434242B2]"
            />
            {showRecentPlaces && (
              <div
                className="absolute bg-white w-full h-[181px] rounded-[19px] mt-1 py-4"
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
              >
                <p className="text-[#C2C2C2] uppercase text-[10px] font-bold tracking-[10%] mb-2 px-4">
                  Recent Searches
                </p>
                <div className="flex flex-col gap-1">
                  {["Ikeja", "Lekki Phase 1", "Ikate"].map((place) => (
                    <p
                      key={place}
                      className="py-2 px-4 hover:bg-[#F4F5F6] text-base text-[#001224] font-medium leading-6 cursor-pointer"
                      onClick={() => {
                        setRecentPlaces(place);
                        setShowRecentPlaces(false); // Close the dropdown after selection
                      }}
                    >
                      {place}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className=" border-r-[1.5px] border-transparent mt-3">
            <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
              When?
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <p
                  className={cn(
                    "text-sm mt-2 font-medium bg-transparent shadow-none p-0 h-fit text-[#434242B2] cursor-pointer",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="text-sm font-medium text-[#434242B2]">
                      Select Date
                    </span>
                  )}
                </p>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 rounded-[19px]"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={isDisabled}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Link href="/search">
          <Button className="w-[136px] h-[52px] rounded-[32px] py-[14px] px-[56px] bg-[#FDF1C3] shadow-none">
            <SearchIcon className="size-6 text-[#001224]" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
