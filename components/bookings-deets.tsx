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
import { ChevronDown, Info, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingDeetsProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookingDeets = ({
  date,
  setDate,
  guests,
  setGuests,
  disabled,
  setDisabled,
}: BookingDeetsProps) => {
  
  const handleSelect = (event: React.SyntheticEvent<SVGSVGElement, Event>) => {
    // Extract the desired value from the event
    const selectedDate = new Date(); // Replace this with your logic to derive the date
    setDate(selectedDate); // Use the state setter
  };

  const addGuest = () => {
    setGuests((prev) => prev + 1);
    setDisabled(false);
  };

  const removeGuest = () => {
    setGuests((prev) => prev - 1);
    if (guests === 0) setDisabled(true);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col w-full">
        <label className="text-sm text-[#434242] font-medium">Purpose</label>
        <Input
          type="text"
          className="h-12 border border-[#1A1A1A26] py-3 px-4 placeholder:text-[#43424257] text-base leading-6"
          placeholder="Select date"
          value="Birthday Photoshoot"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-sm text-[#434242] font-medium">Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                "text-sm mt-2 font-medium bg-transparent shadow-none p-0 h-fit text-[#434242B2] cursor-pointer",
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
          <PopoverContent className="w-auto p-0 rounded-[19px]" align="start">
            <Calendar
              mode="single"
              selected={date}
              // @ts-ignore
              onSelect={handleSelect}
              disabled={disabled}
            />
          </PopoverContent>
        </Popover>
      </div>
      <TimeSelector />
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#434242] font-medium">Guests</label>
        <div className="flex justify-between">
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
      >
        Send Booking Request
      </Button>
    </div>
  );
};
