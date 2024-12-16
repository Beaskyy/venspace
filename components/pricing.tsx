import { useState } from "react";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Pricing = () => {
  const [value, setValue] = useState<string>("");
  const [rawValue, setRawValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(inputValue)) {
      setRawValue(inputValue);
      // Format the input value with commas
      setValue(new Intl.NumberFormat().format(Number(inputValue)));
    }
  };

  const handleSubmit = (): void => {
    console.log("Raw Value Submitted:", rawValue); // Raw value to submit to the API
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[563px] gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Availability and Pricing
            </h1>
            <p className="text-[#434242] text-base text-center">
              Tell us the minimum and maximum hours a guests can book your space
              for also how much you charge per hour.{" "}
              <span className="font-bold">You can always change this.</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#001F3F] text-sm font-medium">
                Min. hours
              </label>
              <Select>
                <SelectTrigger className="w-full h-12 rounded-lg border border-[#1A1A1A26]">
                  <SelectValue placeholder="2 hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2 hours">2 hours</SelectItem>
                  <SelectItem value="3 hours">3 hours</SelectItem>
                  <SelectItem value="4 hours">4 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#001F3F] text-sm font-medium">
                Max. hours
              </label>
              <Select>
                <SelectTrigger className="w-full h-12 rounded-lg border border-[#1A1A1A26]">
                  <SelectValue placeholder="10 hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10 hours">10 hours</SelectItem>
                  <SelectItem value="12 hours">12 hours</SelectItem>
                  <SelectItem value="14 hours">14 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-[#001F3F] text-sm font-medium">
              Pricing per hour
            </label>
            <div className="relative">
              <Input
                type="text"
                placeholder="amount"
                className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm pl-8"
                value={value}
                onChange={handleChange}
              />
              <span className="absolute top-3.5 left-4">₦</span>
            </div>
          </div>
          <div>
            <label className="text-[#001F3F] text-sm font-medium">
              Deposit Required
            </label>
            <div className="relative">
              <Input
                type="text"
                placeholder="amount"
                className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm pl-8"
                value={value}
                onChange={handleChange}
              />
              <span className="absolute top-3.5 left-4">₦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
