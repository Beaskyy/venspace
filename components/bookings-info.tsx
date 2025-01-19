import Image from "next/image";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Info } from "lucide-react";
import { Button } from "./ui";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import Link from "next/link";

export const Payment = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="flex md:flex-row flex-col gap-8 justify-between">
      <div className="flex flex-col gap-6 w-full max-w-[638px]">
        <div className="flex items-center gap-1.5 bg-[#F8F9FA] h-12 p-1.5 rounded-md">
          <Image src="/info-circle.svg" alt="info" width={20} height={20} />
          <p className="lg:text-base md:text-sm text-xs text-[#001224] leading-6 font-medium">
            Have a gift card? Click here to enter the code
          </p>
        </div>
        <div>
          <label className="text-[#001F3F] text-sm font-medium">
            Membership Code (Optional)
          </label>
          <div className="flex md:flex-row flex-col md:items-center md:gap-6 gap-2">
            <Input
              type="text"
              placeholder="Enter your membership code for this studio"
              className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
              required
            />
            <Button className="bg-[#FDF1C3] text-[#001224] hover:text-white hover:bg-[#001224] font-medium">
              Apply Code
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-base text-[#001224] font-bold">Price Details</p>
            <div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-[#434242] leading-6">₦30,000</p>
                    <p className="text-sm text-[#434242] leading-6">x</p>
                    <p className="text-sm text-[#434242] leading-6">4 hours</p>
                  </div>
                  <p className="text-sm text-[#434242] leading-6">₦120,000</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-[#434242] leading-6">
                      Processing
                    </p>
                    <Info className="w-4 text-[#434242]" />
                  </div>
                  <p className="text-sm text-[#434242] leading-6">₦3,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-[#001224] font-black">Total</p>
            <p className="text-lg text-[#001224] font-black">₦123,000</p>
          </div>
          <p className="text-base text-[#001224] font-bold border-y border-[#1A1A1A14] py-6">
            Cancellation Policy: Flexible
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#001224] font-bold">Host Rules</p>
            <ul className="flex flex-col gap-4 border-b border-[#1A1A1A14] pb-6">
              <li className="list-disc ml-6 text-base text-[#434242]">
                Based in London Docklands and just 6 minutes from Canary Wharf
                this is a two floor daylight studio full of organic furniture
                and props. The ground floor has high ceilings and plenty of
                space with a full natural clay wall exposed with direct sunlight
                (with the option to block it out).
              </li>
              <li className="list-disc ml-6 text-base text-[#434242]">
                Based in London Docklands and just 6 minutes from Canary Wharf
                this is a two floor daylight studio full of organic furniture
                and props. The ground floor has high ceilings and plenty of
                space with a full natural clay wall exposed with direct sunlight
                (with the option to block it out).
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="relative w-14 h-14 rounded-full">
              <Image
                src="/chidera.jpeg"
                alt="host"
                fill
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-base text-[#001224] leading-6">
                Message Chidera Akannu
              </h2>
              <p className="text-[#434242] text-sm">
                Introduce yourself to Chidera and describe what you’re planning
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#001F3F] text-sm font-medium">
              Message
            </label>
            <textarea
              className="border border-[#1A1A1A26] text-lg h-[220px] max-w-[563px p-4 rounded-lg"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#434242] leading-[21px]">
                By clicking Request to book, you are requesting to book
                Chidera’s space and a hold will be placed on your card. If Santi
                accepts, your booking will be confirmed and your card will be
                charged.
              </p>
              <p className="text-sm text-[#434242] leading-[21px]">
                By checking the checkbox, you also agree to Venspace's Services
                Agreement, which includes the Community Guidelines and
                Cancellation and Refund Policy.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="w-[16px] h-[16px]" />
              <label className="text-sm text-[#434242] leading-[21px]">
                I agree to the Venspace Terms of Service
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                onClick={() => setShowConfirm(!showConfirm)}
                className="w-[16px] h-[16px]"
              />
              <label className="text-sm text-[#434242] leading-[21px]">
                Are you a member?
              </label>
              <Image src="/badges.svg" alt="badges" width={16} height={16} />
            </div>
            {showConfirm ? (
              <p className="text-sm leading-5 text-[#434242] max-w-[486px] ml-6">
                Proceed to confirm your booking. Your host will apply membership
                benefits.
              </p>
            ) : (
              <p className="text-sm leading-5 text-[#434242] max-w-[486px] ml-6">
                Not a member? Save on bookings and unlock exclusive perks by
                joining today!{" "}
                <Link
                  href="/profile/membership"
                  className="text-[#0164CB] font-medium"
                >
                  Explore Membership
                </Link>
              </p>
            )}
            <Button className="w-fit">Send Booking Request</Button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-6 bg-white w-full max-w-[550px] rounded-lg lg:p-8 p-5 lg:-mt-20 h-fit"
        style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
            Host
          </h3>
          <div className="flex items-center gap-3">
            <div className="relative md:min-w-16 md:min-h-16 md:w-16 md:h-16 w-[72px] h-[72px] rounded-full">
              <Image
                src="/profile-img.png"
                alt="profile"
                fill
                className="absolute rounded-full"
              />
            </div>
            <p className="text-sm text-[#434242]">Twelve Verse</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
              Date & Time
            </h3>
            <p className="text-sm text-[#434242]">Tue, Sep 13, 2024</p>
            <p className="text-sm text-[#434242]">10:00 AM - 2:00 PM</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
            Attendees
          </h3>
          <p className="text-sm text-[#434242]">10 people</p>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
            Purpose of Booking
          </h3>
          <p className="text-sm text-[#434242]">Birthday Photoshoot</p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
              Space
            </h3>
            <p className="text-sm text-[#434242]">
              All Exclusive Shanty Studios
            </p>
            <p className="text-sm text-[#434242]">Abule Oja, Yaba</p>
          </div>
          <div className="relative w-full rounded-lg h-[288px]">
            <Image
              src="/listing-2.jpeg"
              alt="img"
              fill
              className="absolute object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
