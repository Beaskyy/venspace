import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const Addons = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center gap-6">
        <div className="flex items-center w-full max-w-[638px] gap-3 border border-[#1A1A1A14] p-4 rounded-lg">
          <div className="relative min-w-[120px] min-h-[120px] w-[120px] h-[120px] rounded-md">
            <Image
              src="/camera.jpeg"
              alt="camera"
              fill
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col md:gap-8 gap-6 w-full">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-black text-[15px] font-bold leading-[19.85px]">
                    Camera
                  </p>
                  <div className="size-2 bg-[#1A1A1A26] rounded-full"></div>
                  <p className="text-[13px] text-[#434242E5] font-medium leading-5">
                    Max 1
                  </p>
                </div>
                <div className="md:text-sm text-xs text-[#434242] font-medium">
                  2016 Sony Camera for photography
                </div>
              </div>
              <div>
                <p className="text-black text-[15px] leading-[19.85px] font-bold">
                  ₦45,000
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Minus className="size-4 text-[#171717]" />
              </Button>
              <div className="flex justify-center items-center border border-[#1A1A1A14] py-2.5 px-[14px] w-full lg:w-[130px] lg:h-9 h-6 rounded text-base text-[#001224] font-semibold">
                0
              </div>
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Plus className="size-4 text-[#171717]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center w-full max-w-[638px] gap-3 border border-[#1A1A1A14] p-4 rounded-lg">
          <div className="relative min-w-[120px] min-h-[120px] w-[120px] h-[120px] rounded-md">
            <Image
              src="/camera.jpeg"
              alt="camera"
              fill
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col md:gap-8 gap-6 w-full">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-black text-[15px] font-bold leading-[19.85px]">
                    Camera
                  </p>
                  <div className="size-2 bg-[#1A1A1A26] rounded-full"></div>
                  <p className="text-[13px] text-[#434242E5] font-medium leading-5">
                    Max 1
                  </p>
                </div>
                <div className="md:text-sm text-xs text-[#434242] font-medium">
                  2016 Sony Camera for photography
                </div>
              </div>
              <div>
                <p className="text-black text-[15px] leading-[19.85px] font-bold">
                  ₦45,000
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Minus className="size-4 text-[#171717]" />
              </Button>
              <div className="flex justify-center items-center border border-[#1A1A1A14] py-2.5 px-[14px] w-full lg:w-[130px] lg:h-9 h-6 rounded text-base text-[#001224] font-semibold">
                0
              </div>
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Plus className="size-4 text-[#171717]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center w-full max-w-[638px] gap-3 border border-[#1A1A1A14] p-4 rounded-lg">
          <div className="relative min-w-[120px] min-h-[120px] w-[120px] h-[120px] rounded-md">
            <Image
              src="/camera.jpeg"
              alt="camera"
              fill
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col md:gap-8 gap-6 w-full">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-black text-[15px] font-bold leading-[19.85px]">
                    Camera
                  </p>
                  <div className="size-2 bg-[#1A1A1A26] rounded-full"></div>
                  <p className="text-[13px] text-[#434242E5] font-medium leading-5">
                    Max 1
                  </p>
                </div>
                <div className="md:text-sm text-xs text-[#434242] font-medium">
                  2016 Sony Camera for photography
                </div>
              </div>
              <div>
                <p className="text-black text-[15px] leading-[19.85px] font-bold">
                  ₦45,000
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Minus className="size-4 text-[#171717]" />
              </Button>
              <div className="flex justify-center items-center border border-[#1A1A1A14] py-2.5 px-[14px] w-full lg:w-[130px] lg:h-9 h-6 rounded text-base text-[#001224] font-semibold">
                0
              </div>
              <Button className="bg-[#1A1A1A0D] lg:h-9 h-6 shadow-none py-2.5 px-[14px] rounded-[2px] w-full lg:w-[163px]">
                <Plus className="size-4 text-[#171717]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-[638px]">
        <Button className="bg-transparent text-[#001224] shadow-none hover:bg-white/90 hover:shadow-none border border-[#1A1A1A14]">
          Back
        </Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};
