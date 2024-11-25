import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";

export const SearchFilter = () => {
  return (
    <div className="flex justify-between gap-24">
      <div>left</div>
      <div className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[221px] h-11 border-[#1A1A1A26] rounded-xl text-sm text-[#001F3F66]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent
            className="rounded-xl border-none"
            style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
          >
            <SelectGroup>
              <SelectLabel></SelectLabel>
              <SelectItem
                value="recommended"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                Recommended
              </SelectItem>
              <SelectItem
                value="new listings"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                New Listings
              </SelectItem>
              <SelectItem
                value="top rated"
                className="text-sm text-[#001224] hover:bg-[#F4F5F6] h-10"
              >
                Top Rated
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-2 w-[110px] h-11 bg-[#F8F9FA] hover:bg-[#ebebeb]/90 py-2 px-4 rounded-lg">
                <Image
                  src="/adjustment.svg"
                  alt="filter"
                  width={18}
                  height={18}
                />
                <p className="text-sm text-[#434242] font-medium">Filters</p>
              </div>
            </DialogTrigger>
            <DialogContent
              className="w-[483px] rounded-xl p-6"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <DialogHeader>
                <DialogTitle className="text-base text-[#001224] leading-[21.17px]">
                  Filters
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <p className="text-sm text-[#434242] font-semibold">
                      Price Range
                    </p>
                    <Slider max={100} step={1} className="h-[1px]" />
                  </div>
                  <div className="flex flex-col gap-4 border-t border-b border-[#1A1A1A14]">
                    <p className="text-sm text-[#434242] leading-[21px] py-4">
                      Number of Guests
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <Input
                        type="text"
                        placeholder="2"
                        className="border border-[#1A1A1A26] rounded-xl py-3 px-4 h-12"
                      />
                      <p>to</p>
                      <Input
                        type="text"
                        placeholder="5"
                        className="border border-[#1A1A1A26] rounded-xl py-3 px-4 h-12"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 border-b border-[#1A1A1A14]">
                    <p className="text-sm text-[#434242]">
                      Amenities - included in booking
                    </p>
                    <div className="flex gap-[18px]">
                      <div className="border border-[#1A1A1A14] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                      <div className="border border-[#1A1A1A] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                      <div className="border border-[#1A1A1A14] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                      <div className="border border-[#1A1A1A14] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                    </div>
                    <div className="flex gap-[18px]">
                      <div className="border border-[#1A1A1A14] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                      <div className="border border-[#1A1A1A14] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] whitespace-nowrap">
                        Free WiFI
                      </div>
                      <div className="border border-[#1A1A1A] py-2 px-4 rounded-[32px] h-[37px] text-[#434242] text-sm leading-[21px] mb-6">
                        Wheelchair Accessible
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 border-b border-[#1A1A1A14]">
                    <div>
                      <Input type="checkbox" className="w-[18px] h-[18px]" />
                    </div>
                    <div className="flex items-start flex-col gap-1 pb-4">
                      <div className="flex items-center gap-1">
                        <Image
                          src="flash.svg"
                          alt="flash"
                          width={16}
                          height={16}
                        />
                        <p className="text-sm text-[#434242] font-semibold">
                          Instant Booking
                        </p>
                      </div>
                      <p className="text-sm text-[#434242CC]">
                        Only see spaces that can be instantly booked
                      </p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
