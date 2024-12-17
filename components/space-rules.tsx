import { Icons } from "./icons";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

export const SpaceRules = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[563px] gap-14">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Your Space Rules
            </h1>
            <p className="text-[#434242] text-base text-center">
              Let us know your space rules, arrival instructions and your
              cancellation policy. It’s important your guests know this.
            </p>
          </div>
          <div>
            <label className="text-[#001F3F] text-sm font-medium">
              Space Rules
            </label>
            <Select>
              <SelectTrigger className="w-full h-12 rounded-lg border border-[#1A1A1A26]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yaba">Yaba</SelectItem>
                <SelectItem value="ikorodu">Ikorodu</SelectItem>
                <SelectItem value="ikoyi">Ikoyi</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-1 mt-1">
              <Icons.lightning className="size-[18px]" />
              <p className="text-sm text-[#434242] ">
                Select as many that applies.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#001F3F] text-sm font-medium">
              Add more rules
            </label>
            <Textarea
              className="h-[220px] border border-[#1A1A1A26] placeholder:text-[#43424270]"
              placeholder="Enter any other space rules you have"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#001F3F] text-sm font-medium">
              Arrival Instructions
            </label>
            <Textarea
              className="h-[220px] border border-[#1A1A1A26] placeholder:text-[#43424270]"
              placeholder="Enter instructions"
            />
            <div className="flex gap-1 mt-1">
              <Icons.lightning className="size-[18px]" />
              <p className="text-sm text-[#434242] ">
                Include information like landmarks that will help your guests
                locate the address; what they should do upon arriving at your
                space, etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#001F3F] text-sm font-medium">
              Cancellation Policy
            </label>
            <Textarea
              className="h-[220px] border border-[#1A1A1A26] placeholder:text-[#43424270]"
              placeholder="Enter policy"
            />
            <div className="flex gap-1 mt-1">
              <Icons.lightning className="size-[18px]" />
              <p className="text-sm text-[#434242] ">
                Make sure your policy is well detailed to provide enough
                information for the guest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
