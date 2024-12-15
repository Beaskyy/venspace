import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Minus,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimeSelector } from "./time-selector";

import { format, isBefore, startOfDay } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Addons } from "./add-ons";
import Image from "next/image";
import { Payment } from "./payment";

export const BookingsRequest = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState<Date | undefined>();

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  const addGuest = () => {
    setGuests((prev) => prev + 1);
    setDisabled(false);
  };

  const removeGuest = () => {
    setGuests((prev) => prev - 1);
    if (guests === 0) setDisabled(true);
  };

  const goBack = () => {
    setCurrentPage((prev) => prev - 1);
    if (currentPage === 1) setDisabled(true);
  };

  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center">
          <Button
            onClick={goBack}
            disabled={disabled}
            className="absolute -left-10 cursor-pointer p-0 bg-transparent text-[#001224] shadow-none hover:bg-transparent"
          >
            <ChevronLeft className="size-6" />
          </Button>
          <h2 className="lg:text-[32px] text-[#001224] font-bold">
            {currentPage === 1
              ? "Request to book"
              : currentPage === 2
              ? "Select add-ons"
              : currentPage === 3
              ? "Review & Pay"
              : "Pay"}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center md:gap-2 gap-1">
            <span
              className={cn(
                "lg:text-lg md:text-md text-sm font-bold",
                currentPage === 1 ? "text-[#001224]" : "text-[#43424287]"
              )}
            >
              Booking Details
            </span>
            <ChevronRight className="size-[22px] text-[#43424287]" />
            <span
              className={cn(
                "lg:text-lg md:text-md text-sm font-bold",
                currentPage === 2 ? "text-[#001224]" : "text-[#43424287]"
              )}
            >
              Add-ons
            </span>
            <ChevronRight className="size-[22px] text-[#43424287]" />
            <span
              className={cn(
                "lg:text-lg md:text-md text-sm font-bold",
                currentPage === 3 ? "text-[#001224]" : "text-[#43424287]"
              )}
            >
              Review
            </span>
            <ChevronRight className="size-[22px] text-[#43424287]" />
            <span
              className={cn(
                "lg:text-lg md:text-md text-sm font-bold",
                currentPage === 4 ? "text-[#001224]" : "text-[#43424287]"
              )}
            >
              Pay
            </span>
          </div>
        </div>
        {/* <BookingDeets
            date={date}
            setDate={setDate}
            guests={guests}
            setGuests={setGuests}
            disabled={disabled}
            setDisabled={setDisabled}
          /> */}
        {currentPage === 1 ? (
          <div className="flex md:flex-row flex-col gap-8 justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm text-[#434242] font-medium">
                  Purpose
                </label>
                <Input
                  type="text"
                  className="h-12 border border-[#1A1A1A26] py-3 px-4 placeholder:text-[#43424257] text-base leading-6"
                  placeholder="Select date"
                  value="Birthday Photoshoot"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-[#434242] font-medium">
                  Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      className={cn(
                        "text-sm mt-2 font-medium bg-transparent shadow-none p-0 text-[#434242B2] cursor-pointer h-12 border border-[#1A1A1A26] py-3 px-4 rounded-lg",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <div className="relative">
                          <Input
                            type="text"
                            className="h-12 border border-[#1A1A1A26] py-3 px-4 placeholder:text-[#43424257] text-base leading-6"
                            placeholder="Select date"
                          />
                          <ChevronDown className="absolute right-4 top-4 text-[#494E50] size-4" />
                        </div>
                      )}
                    </div>
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
              <TimeSelector />
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#434242] font-medium">
                  Guests
                </label>
                <div className="flex justify-between gap-3">
                  <Button
                    onClick={removeGuest}
                    disabled={guests === 0}
                    className="bg-[#1A1A1A0D] h-9 shadow-none py-2.5 px-[14px] rounded-[2px] w-[163px]"
                  >
                    <Minus className="size-4 text-[#171717]" />
                  </Button>
                  <div className="flex justify-center items-center border border-[#1A1A1A14] py-2.5 px-[14px] w-[130px] h-9 rounded text-base text-[#001224] font-semibold">
                    {guests}
                  </div>
                  <Button
                    onClick={addGuest}
                    disabled={guests >= 30}
                    className="bg-[#1A1A1A0D] h-9 shadow-none py-2.5 px-[14px] rounded-[2px] w-[163px]"
                  >
                    <Plus className="size-4 text-[#171717]" />
                  </Button>
                </div>
                <div className="flex items-center gap-1 text-[#434242B2]">
                  <Info className="size-4" />
                  <p className="text-[13px]">Maximum of 30 Guests</p>
                </div>
              </div>
              <Button
                disabled={guests === 0 || guests > 30}
                className={cn("w-fit shadow-none", disabled && "opacity-30")}
                onClick={() => setCurrentPage(2)}
              >
                Next
              </Button>
            </div>
            <div
              className="flex flex-col gap-6 bg-white w-full max-w-[550px] rounded-lg lg:p-8 p-5 lg:-mt-20"
              style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
            >
              <div className="flex flex-col gap-2">
                <div className="relative w-[209px] h-[120px]">
                  <Image
                    src="/listing-2.jpeg"
                    alt="img"
                    fill
                    className="absolute object-cover"
                  />
                </div>
                <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                  All Exclusive Shanty Studios
                </h3>
                <div className="flex items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  <p className="text-sm text-[#434242]">
                    Abule Oja, Yaba, Lagos
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                  Purpose of Booking
                </h3>
                <p className="text-sm text-[#434242]">Birthday Photoshoot</p>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                  Date & Time
                </h3>
                <p className="text-sm text-[#434242]">Tue, Sep 13, 2024</p>
                <p className="text-sm text-[#434242]">10:00 AM - 2:00 PM</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                  Rental
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#434242] leading-6">
                        ₦30,000
                      </p>
                      <p className="text-sm text-[#434242] leading-6">x</p>
                      <p className="text-sm text-[#434242] leading-6">
                        4 hours
                      </p>
                    </div>
                    <p className="text-sm text-[#434242] leading-6">₦120,000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#434242] leading-6">
                        ₦30,000
                      </p>
                      <p className="text-sm text-[#434242] leading-6">x</p>
                      <p className="text-sm text-[#434242] leading-6">
                        4 hours
                      </p>
                    </div>
                    <p className="text-sm text-[#434242] leading-6">₦120,000</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="text-lg text-[#001224] font-black">Total</p>
                <p className="text-lg text-[#001224] font-black">₦123,000</p>
              </div>
            </div>
          </div>
        ) : currentPage === 2 ? (
          <Addons />
        ) : currentPage === 3 ? (
          <Payment />
        ) : (
          "Beasky"
        )}
      </div>
    </div>
  );
};
