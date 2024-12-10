import {
  Calendar,
  ChevronDown,
  Clock,
  Info,
  MapPin,
  Minus,
  Plus,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import SearchDropdown from "./search-dropdown";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format, isBefore, startOfDay } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimeSelector } from "./time-selector";
import { Button } from "./ui/button";

const items = [
  "Birthday Photo Shoot",
  "Birthday Party",
  "Board Room",
  "Art Exhibit",
];
export const BookingsInfo = () => {
  const [disabled, setDisabled] = useState(true);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState<Date | undefined>();

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  const handleSelect = () => {
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
    <div className="flex flex-col gap-8 lg:px-[72px] lg:pt-0 md:p-8 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[106px]">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#001224] text-[28px] font-bold">
            All Exclusive Shanty Studios
          </h4>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="flex gap-1 mb-2">
                <MapPin className="size-5 text-[#434242]" />
                <p className="text-base text-[#434242] leading-6">
                  Abule Oja, Yaba, Lagos
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-1">
                  <Users className="size-5 text-[#434242]" />
                  <p className="text-base text-[#434242] leading-6">
                    10 People
                  </p>
                </div>
                <div className="flex gap-1">
                  <Image src="/star.svg" alt="star" width={18} height={18} />
                  <p className="text-base text-[#434242] leading-6">
                    5.0 (10 reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6 border-t border-b py-6 mt-2">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full">
                  <Image
                    src="/chidera.jpeg"
                    alt="host"
                    fill
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-base text-[#434242] font-medium">
                  Hosted by Chidera Akannu
                </p>
              </div>
              <div>
                <Button className="bg-[#FDF1C3] h-11 shadow-none text-[#001224]">
                  Message Host
                </Button>
              </div>
            </div>
            <h6 className="text-lg text-[#001224] font-bold">About Space</h6>
            <p className="text-base text-[#434242] leading-6">
              Based in London Docklands and just 6 minutes from Canary Wharf
              this is a two floor daylight studio full of organic furniture and
              props. The ground floor has high ceilings and plenty of space with
              a full natural clay wall exposed with direct sunlight (with the
              option to block it out).
            </p>
            <Link href="#" className="text-base text-[#F44363] font-bold">
              Show More
            </Link>
            <div className="flex flex-col gap-[18px]">
              <h2 className="text-[#001224] text-lg font-bold">
                Included in your Booking
              </h2>
              <div className="grid grid-cols-2 gap-[72px]">
                <div className="flex items-center gap-2">
                  <Image src="/sun.svg" alt="sun" width={20} height={20} />
                  <p className="text-base text-[#434242] font-medium">
                    Lighting Equipments
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/buildings-2.svg"
                    alt="building"
                    width={20}
                    height={20}
                  />
                  <p className="text-base text-[#434242] font-medium">
                    Changing Room
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[72px]">
                <div className="flex items-center gap-2">
                  <Image src="/wifi.svg" alt="wifi" width={20} height={20} />
                  <p className="text-base text-[#434242] font-medium">WiFi</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/video-play.svg"
                    alt="video-play"
                    width={20}
                    height={20}
                  />
                  <p className="text-base text-[#434242] font-medium">
                    Video Equipment
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[72px]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/winter.svg"
                    alt="winter"
                    width={20}
                    height={20}
                  />
                  <p className="text-base text-[#434242] font-medium">
                    Air Conditioning
                  </p>
                </div>
              </div>
              <Link href="#" className="text-base text-[#F44363] font-bold">
                Show all items included in booking
              </Link>
            </div>
            <div className="flex  flex-col gap-[18px]">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-lg text-[#001224] font-bold mb-1.5">
                    Add-ons from the host
                  </h2>
                  <p className="text-base text-[#001224]">
                    Host provided services, items or options. Available at
                    checkout.
                  </p>
                </div>
                <div className="flex justify-between items-center gap-4 p-4 border borer-[#1A1A1A14] rounded-lg">
                  <div className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-md">
                      <Image
                        src="/camera.jpeg"
                        alt="camera"
                        fill
                        className="absolute object-cover object-left w-full h-full rounded-md"
                      />
                    </div>
                    <div>
                      <h6 className="text-black text-[15px] font-bold">
                        Camera
                      </h6>
                      <p className="text-sm text-[#434242]">
                        2016 Sony camera for photography
                      </p>
                    </div>
                  </div>
                  <h5 className="text-black text-[15px] font-bold">₦45,000</h5>
                </div>
                <div className="flex justify-between items-center gap-4 p-4 border borer-[#1A1A1A14] rounded-lg">
                  <div className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-md">
                      <Image
                        src="/camera.jpeg"
                        alt="camera"
                        fill
                        className="absolute object-cover object-left w-full h-full rounded-md"
                      />
                    </div>
                    <div>
                      <h6 className="text-black text-[15px] font-bold">
                        Camera
                      </h6>
                      <p className="text-sm text-[#434242]">
                        2016 Sony camera for photography
                      </p>
                    </div>
                  </div>
                  <h5 className="text-black text-[15px] font-bold">₦45,000</h5>
                </div>
                <div className="flex justify-between items-center gap-4 p-4 border borer-[#1A1A1A14] rounded-lg">
                  <div className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-md">
                      <Image
                        src="/camera.jpeg"
                        alt="camera"
                        fill
                        className="absolute object-cover object-left w-full h-full rounded-md"
                      />
                    </div>
                    <div>
                      <h6 className="text-black text-[15px] font-bold">
                        Camera
                      </h6>
                      <p className="text-sm text-[#434242]">
                        2016 Sony camera for photography
                      </p>
                    </div>
                  </div>
                  <h5 className="text-black text-[15px] font-bold">₦45,000</h5>
                </div>
              </div>
              <Link href="#" className="text-base text-[#F44363] font-bold">
                Show all add-ons
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-lg text-[#001224] font-bold">
                Hosting Rulese
              </h6>
              <p className="text-base text-[#434242] leading-6">
                Based in London Docklands and just 6 minutes from Canary Wharf
                this is a two floor daylight studio full of organic furniture
                and props. The ground floor has high ceilings and plenty of
                space with a full natural clay wall exposed with direct sunlight
                (with the option to block it out).
              </p>
              <Link href="#" className="text-base text-[#F44363] font-bold">
                Show More
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg text-[#333333] font-bold tracking-[1px]">
                Location
              </h2>
              <Image
                src="/city-map.png"
                alt="city-map"
                width={638}
                height={320}
                className="rounded"
              />
            </div>
            <div className="">
              <h6 className="text-lg text-[#001224] font-bold">
                Cancellation Policy
              </h6>
              <p className="text-base text-[#434242] leading-6">
                Guests may cancel their Booking until 7 days before the event
                start time and will receive a full refund (including all Fees)
                of their Booking Price. Guests may cancel their Booking between
                7 days and 24 hours before the event start time and receive a
                50% refund (excluding Fees) of their Booking Price. Booking
                cancellations submitted less than 24 hours before the Event
                start time are not refundable. 
                <span className="text-[#F44363]">Learn more</span>
              </p>
              <p className="text-xs text-[#839AB9] font-gold border-b border-[#1A1A1A14] pb-4">
                All Bookings are subject to Venspace’s Grace Period policy which
                provides a full refund for Bookings cancelled within 24 hours
                from receipt of a Booking Confirmation but no later than 48
                hours prior to the Event start time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div
            className="flex flex-col gap-8 p-8 h-fit rounded-lg"
            style={{
              boxShadow: "0 8px 22px 0 rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-2">
                <p className="bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] text-xs text-[#F44363] font-medium">
                  Instant Booking Available
                </p>
                <div className="relative group inline-block">
                  <Info className="size-4" />
                  <div
                    className="absolute bottom-full top-7 h-fit mb-2 lg:left-[90px] left-16 transform -translate-x-1/2 bg-white w-[243px]  text-xs font-medium p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      boxShadow: "0 8px 22px 0 rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex gap-4 items-center">
                        <Image
                          src="/flash-booking.svg"
                          alt="alt"
                          width={16}
                          height={16}
                        />
                        <h6 className="text-black text-sm font-bold">
                          Instant Booking
                        </h6>
                      </div>
                      <p className="text-[13px] text-[#434242] leading-[18px]">
                        After payment, your booking will be instantly confirmed,
                        with not need for a request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[32px] text-[#001224] font-[900]">
                  ₦30,000/hr
                </h3>
                <div className="flex items-center gap-1 text-[#434242B2]">
                  <Clock />
                  <p className="text-sm leading-[21px] uppercase">
                    2hr minimum
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-full gap-4">
                <label className="text-sm text-[#434242] font-medium">
                  Purpose
                </label>
                <SearchDropdown items={items} />
              </div>
              <div className="flex flex-col w-full gap-4">
                <label className="text-sm text-[#434242] font-medium">
                  Date
                </label>
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
                  <PopoverContent
                    className="w-auto p-0 rounded-[19px]"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      // @ts-expect-error
                      selected={date}
                      onSelect={handleSelect}
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
          </div>
          <div className="flex flex-col gap-8">
            <div className="border border-[#1A1A1A26] p-8 rounded-lg">
              <div className="flex flex-col gap-1">
                <h6 className="text-lg text-[#001224] font-bold mb-4">
                  Operating Hours
                </h6>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Monday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Tuesday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Wednesday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Thursday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Friday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Saturday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#434242] font-medium">
                    <p>Sunday</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex gap-1 items-center">
                <Image src="/flag.svg" alt="flag" width={16} height={16} />
                <p className="text-base text-[#DF1620]">Report this listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
