import { Input } from "./ui/input";

export const SpaceAddress = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[563px] gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Space Address
            </h1>
            <p className="text-[#434242] text-base text-center">
              Your space’s exact address will not be displayed publicly on your
              VenSpace’s listing. It will only be shared with a guest after
              their booking has been confirmed by you.
            </p>
          </div>
          <div>
            <label className="text-[#001F3F] text-sm font-medium">
              Street Address *
            </label>
            <Input
              type="text"
              placeholder="Enter street address"
              className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
            />
          </div>
          <div>
            <label className="text-[#001F3F] text-sm font-medium">
              Apartment Number
            </label>
            <Input
              type="text"
              placeholder="Apartment Number"
              className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
