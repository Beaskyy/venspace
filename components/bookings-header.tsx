import { AlignJustify, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Navigator } from "./navigator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { submenuItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export const BookingsHeader = () => {
  return (
    <div
      className="flex gap-6 justify-between py-4 lg:px-[72px] px-4"
      style={{ boxShadow: "0px 2px 19px 0px #0000000D" }}
    >
      <div className="flex md:gap-4 gap-2">
        <Link href="/" className="flex items-center gap-6 z-50">
          <div className="relative md:w-16 md:h-16 w-[43px] h-[43px]">
            <Image src="/logo.png" alt="logo" fill className="absolute" />
          </div>
        </Link>
        <DropdownMenu>
          {/* Main Trigger */}
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-1 cursor-pointer">
              <p className="hidden lg:block text-[#001224]">Browse Spaces</p>
              <ChevronDown className="text-[#001224] size-[18px]" />
            </div>
          </DropdownMenuTrigger>

          {/* Main Menu */}
          <DropdownMenuContent
            className="bg-white w-[165px] shadow-lg py-2 rounded-xl"
            sideOffset={8}
            align="start"
          >
            {Object.keys(submenuItems).map((item) => (
              <DropdownMenuSub key={item}>
                {/* Main Menu Item */}
                <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-2 text-[#001224] text-base font-medium hover:bg-gray-100 cursor-pointer">
                  {item}
                </DropdownMenuSubTrigger>

                {/* Submenu */}
                <DropdownMenuSubContent
                  className={cn(
                    "bg-white min-w-[165px] shadow-lg py-2 rounded-none rounded-tr-xl rounded-br-xl"
                  )}
                  sideOffset={8}
                >
                  {submenuItems[item].map((submenuItem, index) => (
                    <DropdownMenuItem asChild key={index}>
                      <Link
                        href={`/${item
                          .toLowerCase()
                          .replace(/\s/g, "-")}/${submenuItem
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className={`block px-4 py-2 text-base font-medium whitespace-nowrap ${
                          submenuItem === "See All"
                            ? "text-[#F44363]"
                            : "text-[#001224]"
                        } hover:bg-gray-100`}
                      >
                        {submenuItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        className="hidden md:flex items-center gap-12 md:w-[365px] w-full h-[60px] border border-[#1A1A1A14] rounded-[64px] py-1.5 pl-8 pr-2"
        style={{ boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.06)" }}
      >
        <div className="flex gap-x-4 md:w-[229px] w-full">
          <div>
            <p className="md:text-[13px] text-xs text-[#434242CC] font-medium leading-[21px] whitespace-nowrap">
              What are you planning?
            </p>
            <p className="text-[#434242] md:text-sm text-xs font-medium whitespace-nowrap">
              Birthday Photo Shoot
            </p>
          </div>
          <div
            className="w-[1.5px] h-12"
            style={{
              background:
                "linear-gradient(to bottom, #D9D9D900, #D9D9D9, #D9D9D900)",
            }}
          ></div>
          <div>
            <p className="md:text-[13px] text-xs text-[#434242CC] font-medium leading-[21px] whitespace-nowrap">
              Where?
            </p>
            <p className="text-[#434242] md:text-sm text-xs font-medium whitespace-nowrap">
              Yaba
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center min-w-12 min-h-12 w-12 h-12 bg-[#FDF1C3] rounded-[79px] md:-translate-x-0 -translate-x-2">
          <Image src="/search-normal.svg" alt="search" width={24} height={24} />
        </div>
      </div>
      <div className="hidden lg:flex items-center z-50">
        <Link href={"/auth/sign-up?mode=host"}>
          <Button>Become a Host</Button>
        </Link>
        <div className="px-3 py-2 flex items-center gap-1">
          <div className="relative size-8 rounded-full bg-[url('/profile-circle.svg')] bg-cover bg-center"></div>
          <Image src="/arrow-down.png" alt="logo" width={12} height={6.75} />
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center z-50">
        <Navigator color="[#434242]" />
      </div>
    </div>
  );
};
