import Image from "next/image";
import React from "react";

export const WhyHost = () => {
  return (
    <div className="pt-[72px] mx-6">
      <div className="bg-[#1D0207] flex flex-col gap-12 rounded-[20px] py-16 md:px-8 px-4">
        <h2 className="text-white text-[28px] font-bold text-center">
          Why Host on VenSpace?
        </h2>
        <div className="flex flex-col gap-12">
          <div className="flex md:flex-row flex-col gap-12 justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[580px]">
              <div className="flex gap-4">
                <Image
                  src="/rocket-launch.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                />
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
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
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
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
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
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
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
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
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
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
                <p className="text-white text-xl">Flexible pricing</p>
              </div>
              <div>
                <p className="text-white text-base pl-10">
                  You’re in control. Select pricing by the hour, day of week,
                  time of day, and number of attendees. Customize day rate
                  discounts or create a custom offer for an all-inclusive price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
