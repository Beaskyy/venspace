import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const CreativeIdea = () => {
  const router = useRouter();
  return (
    <div className="pt-[90px] pb-12 mx-6">
      <div className="bg-[#1D0207] flex flex-col md:gap-12 gap-6 rounded-[20px] md:py-16 py-8 md:px-8 px-4">
        <h2 className="text-white md:text-[28px] text-lg font-bold text-center">
          Support Your Friend’s Creative Idea with VenSpace Gift Cards
        </h2>
        <div className="flex flex-col md:gap-12 gap-6">
          <div className="flex md:flex-row flex-col md:gap-12 gap-6 justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-12 justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-12 justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white md:text-xl text-sm">
                  Empower Creativity
                </p>
              </div>
              <div>
                <p className="text-white md:text-base text-xs pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button onClick={() => router.push("/send-gift-card")} className="w-fit md:h-[52px] h-10 py-[14px] px-6 md:text-base text-sm font-medium">
            Send a Venspace Gift Card
          </Button>
        </div>
      </div>
    </div>
  );
};
