import {
  ChevronDown,
  Clock,
  Info,
  MapPin,
  Minus,
  Plus,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
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

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  OverlayView,
} from "@react-google-maps/api";

import { TimeSelector } from "./time-selector";
import { Calendar } from "./ui/calendar";
import { useRouter } from "next/navigation";
import { addOns, bookingItems } from "@/lib/data";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showAllAddOns, setShowAllAddOns] = useState(false);

  const [selectedMarker, setSelectedMarker] = useState<{
    coordinates: string;
    price: string;
  } | null>(null);

  const visibleItems = showAll ? bookingItems : bookingItems.slice(0, 4);

  // Control the number of items to display initially
  const visibleAddOns = showAllAddOns ? addOns : addOns.slice(0, 3);

  let text = `Based in London Docklands and just 6 minutes from Canary Wharf this is a two floor daylight studio full of organic furniture and props. The ground floor has high ceilings and plenty of space with a full natural clay wall exposed with direct sunlight (with the option to block it out). `;

  // Split the text into words for truncation
  const words = text.split(" ");
  const shouldTruncate = words.length > 20;

  const handleShowMore = () => {
    setIsExpanded(true);
  };

  const router = useRouter();

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `AIzaSyB8TB09-wgicZebEtZI4ij9-SSVaBT3mEI`,
    libraries: ["places"],
  });

  let locations = [
    { coordinates: "6.7101, 3.4486", price: "50,000" },
    { coordinates: "7.1936, 3.9344", price: "20,000" },
    { coordinates: "7.2936, 3.8444", price: "20,000" },
    { coordinates: "6.8936, 3.8444", price: "20,000" },
    { coordinates: "6.9036, 3.6444", price: "20,000" },
    { coordinates: "6.9936, 4.2444", price: "20,000" },
  ];

  if (!isLoaded) {
    return "loading....";
  }

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
            <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-6 border-t border-b py-6 mt-2 lg:w-[640px] w-full">
              <div className="flex md:flex-row items-center gap-2">
                <div className="relative w-14 h-14 rounded-full">
                  <Image
                    src="/chidera.jpeg"
                    alt="host"
                    fill
                    className="absolute object-cover rounded-full"
                  />
                </div>
                <p className="text-sm text-[#434242] font-medium">
                  Hosted by Chidera Akannu
                </p>
                <div className="relative group inline-block">
                  <Image src="badges.svg" alt="badge" width={24} height={24} />
                  <div
                    className="flex justify-center items-center gap-1 absolute bottom-full md:-top-12 md:h-[37px] mb-2 md:lg:left-[90px] -left-16 border border-[#1A1A1A14] transform -translate-x-1/2 bg-white md:w-[354px] w-[300px] h-full text-xs font-medium p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      boxShadow: "0 8px 22px 0 rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div className="flex md:gap-4 gap-2 items-center">
                      <Image
                        src="/info-solid.svg"
                        alt="alt"
                        width={18}
                        height={18}
                      />
                      <p className="md:text-[13px] text-[10px] text-[#434242] md:leading-[18px] md:whitespace-nowrap">
                        This studio offers exclusive benefits for members.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button className="bg-transparent w-fit px-[14px] h-11 shadow-none text-[#001224] border border-[#1A1A1A26]">
                  Explore Membership
                </Button>
                <Button className="bg-[#FDF1C3] h-11 w-fit px-[14px] shadow-none text-[#001224]">
                  Message Host
                </Button>
              </div>
            </div>
            <h6 className="text-lg text-[#001224] font-bold">About Space</h6>
            <p className="text-base text-[#434242] leading-6">
              {isExpanded || !shouldTruncate
                ? text
                : `${words.slice(0, 20).join(" ")}...`}
            </p>
            {!isExpanded && shouldTruncate && (
              <div
                className="text-base text-[#F44363] font-bold cursor-pointer"
                onClick={handleShowMore}
              >
                Show More
              </div>
            )}
            <div className="flex flex-col gap-[18px]">
              <h2 className="text-[#001224] text-lg font-bold">
                Included in your Booking
              </h2>
              <div className="grid grid-cols-2 gap-[18px]">
                {visibleItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={item.text.toLowerCase()}
                      width={20}
                      height={20}
                    />
                    <p className="text-base text-[#434242] font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              {bookingItems.length > 4 && (
                <div
                  onClick={() => setShowAll((prev) => !prev)}
                  className="text-base text-[#F44363] font-bold cursor-pointer"
                >
                  {showAll ? "Show less" : "Show all items included in booking"}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-lg text-[#001224] font-bold mb-1.5">
                    Add-ons from the host
                  </h2>
                  <p className="text-base text-[#001224]">
                    Host provided services, items, or options. Available at
                    checkout.
                  </p>
                </div>
                {visibleAddOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className="flex justify-between items-center gap-4 p-4 border border-[#1A1A1A14] rounded-lg"
                  >
                    <div className="flex gap-3">
                      <div className="relative w-14 h-14 rounded-md">
                        <Image
                          src={addOn.image}
                          alt={addOn.title}
                          fill
                          className="absolute object-cover object-left w-full h-full rounded-md"
                        />
                      </div>
                      <div>
                        <h6 className="text-black text-[15px] font-bold">
                          {addOn.title}
                        </h6>
                        <p className="text-sm text-[#434242]">
                          {addOn.description}
                        </p>
                      </div>
                    </div>
                    <h5 className="text-black text-[15px] font-bold">
                      {addOn.price}
                    </h5>
                  </div>
                ))}
              </div>
              {addOns.length > 3 && (
                <div
                  onClick={() => setShowAllAddOns((prev) => !prev)}
                  className="text-base text-[#F44363] font-bold cursor-pointer"
                >
                  {showAllAddOns ? "Show less add-ons" : "Show all add-ons"}
                </div>
              )}
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
                Hosting Rules
              </h6>
              <p className="text-base text-[#434242] leading-6">
                {isExpanded || !shouldTruncate
                  ? text
                  : `${words.slice(0, 20).join(" ")}...`}
              </p>
              {!isExpanded && shouldTruncate && (
                <div
                  className="text-base text-[#F44363] font-bold cursor-pointer"
                  onClick={handleShowMore}
                >
                  Show More
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg text-[#333333] font-bold tracking-[1px]">
                Location
              </h2>
              <div className="md:w-[600px] w-full h-[320px]">
                <GoogleMap
                  center={{ lat: 7.1483, lng: 3.9486 }}
                  zoom={9}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                >
                  {locations.map((location, index) => {
                    const [lat, lng] = location.coordinates
                      .split(",")
                      .map(Number);

                    return (
                      <div key={index}>
                        {/* Marker Icon */}
                        <Marker
                          position={{ lat, lng }}
                          icon={{
                            url: `/dot.svg`,
                            scaledSize: new google.maps.Size(16, 16),
                          }}
                          onClick={() => setSelectedMarker(location)} // Open dialog on marker click
                        />
                      </div>
                    );
                  })}
                </GoogleMap>
              </div>
              {/* <Image
                src="/city-map.png"
                alt="city-map"
                width={638}
                height={320}
                className="rounded"
              /> */}
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] text-xs text-[#F44363] font-medium">
                  Instant Booking Available
                </p>
                <div className="relative group inline-block">
                  <Info className="size-4" />
                  <div
                    className="absolute bottom-full top-7 h-fit mb-2 -lg:left-[90px] left-16 transform -translate-x-1/2 bg-white lg:w-[243px] md:w-[180px]  text-xs font-medium p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
                        <h6 className="text-black lg:text-sm text-xs font-bold">
                          Instant Booking
                        </h6>
                      </div>
                      <p className="lg:text-[13px] text-[10px] text-[#434242] lg:leading-[18px]">
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
                            className="h-12 absolute -left-4 -top-5 border-none -z-10 py-3 px-4 placeholder:text-[#43424257] text-base leading-6"
                            placeholder="Select date"
                          />
                          <ChevronDown className="absolute -right-0.5 top-1.5 text-[#494E50] size-4" />
                        </div>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-full p-0 rounded-[19px]"
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
                onClick={() => router.push("/bookings/requests")}
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
