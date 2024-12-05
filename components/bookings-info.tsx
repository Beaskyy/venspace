import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui";
import Link from "next/link";

export const BookingsInfo = () => {
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
                start time are not refundable. <span className="text-[#F44363]">Learn more</span>
              </p>
              <p className="text-xs text-[#839AB9] font-gold">All Bookings are subject to Venspace’s Grace Period policy which provides a full refund for Bookings cancelled within 24 hours from receipt of a Booking Confirmation but no later than 48 hours prior to the Event start time.</p>
            </div>
          </div>
        </div>
        <div className="flex">2</div>
      </div>
    </div>
  );
};
