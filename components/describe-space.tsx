import Image from "next/image";
import { Input } from "./ui/input";

export const DescribeSpace = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[563px] gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Which of these best describes your space?
            </h1>
            <p className="text-[#434242] text-base text-center">
              Give your space a catchy title that will grab a guest’s interest
              and describes your space. Do not include your business’s name.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-[#001224] text-base leading-6 font-bold">
              Try to include the following:
            </h6>
            <ul className="text-base pl-6">
              <li className="list-disc">
                <span className="font-medium">The type of space - </span>
                photo studio, podcast room
              </li>
              <li className="list-disc">
                <span className="font-medium">Unique adjective - </span>
                exclusive, roomy
              </li>
              <li className="list-disc">
                <span className="font-medium">Location - </span> Lekki, Ajah
              </li>
            </ul>
            <div>
              <label className="text-[#001F3F] text-sm font-medium">
                Space Title
              </label>
              <Input
                type="text"
                placeholder="e.g “Bright Photo Studio in Lekki"
                className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Describe your space
            </h1>
            <p className="text-[#434242] text-base text-center">
              Sell your space! Include details about your space so that guests
              will know everything it offers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-[#001224] text-base leading-6 font-bold">
              Try to answer questions like:
            </h6>
            <ul className="text-base pl-6">
              <li className="list-disc">
                What activities work well in your space?
              </li>
              <li className="list-disc">
                What is the layout of the space and how can different areas be
                used?
              </li>
              <li className="list-disc">
                What unique features or amenities does your space have?
              </li>
            </ul>
            <div>
              <label className="text-[#001F3F] text-sm font-medium">
                Space Title
              </label>
              <textarea
                placeholder="e.g “Enter your space description"
                className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm mt-2 h-[220px] rounded-lg"
              />
            </div>
            <div className="flex items-start gap-1">
              <Image src="/lightning.svg" alt="back" width={18} height={18} />
              <p className="text-sm text-[#001224] leading-[21px]">
                Do not include your contact information like your phone number,
                address, email or other personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
