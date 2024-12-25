import { AlignJustify, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Navigator } from "./navigator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const links = [
  { label: "Messages", href: "/" },
  { label: "Notifications", href: "/" },
  { label: "Bookings", href: "/" },
  { label: "Wishlist", href: "/" },
  { label: "VenCredit", href: "/" },
  { label: "Gift Cards", href: "/" },
];

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const submenuItems: Record<string, string[]> = {
    Locations: [
      "Yaba",
      "Lekki",
      "Ebute Metta",
      "Ikorodu",
      "Ikoyi",
      "Victoria Island",
    ],
    Activities: [
      "Photoshoot",
      "Videoshoot",
      "Party",
      "Dinner",
      "Large Gathering",
      "Training",
      "See All",
    ],
    "Space Types": [
      "Content House",
      "Photo Studio",
      "Podcast Room",
      "Party Room",
    ],
    Amenities: [
      "Free WiFi",
      "Lightening",
      "Abstract Props",
      "Wheelchair Accessible",
      "Graphic Walls",
    ],
  };
  return (
    <div className="flex justify-between py-4 lg:px-[72px] px-4">
      <div className="flex items-center md:gap-6 gap-3 z-50">
        <div className="relative md:w-16 md:h-16 w-[43px] h-[43px]">
          <Image src="/logo.png" alt="logo" fill className="absolute" />
        </div>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="hidden lg:block text-white">Browse Spaces</p>
                <ChevronDown className="text-white size-[18px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="py-4 w-[165px]">
              {Object.keys(submenuItems).map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="flex items-center h-9"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                    {item}
                  </p>
                  <ChevronRight className="size-4" />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>

            {/* Submenu */}
            {hoveredItem && (
              <div
                className="absolute top-[29px] -right-[185px] bg-white w-[165px] rounded-tr-xl rounded-br-xl py-4"
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
              >
                <div className="flex flex-col gap-y-1.5">
                  {submenuItems[hoveredItem].map((submenuItem, index) => (
                    <Link
                      key={index}
                      href="/"
                      className={`py-1.5 px-4 text-base leading-6 font-medium ${
                        submenuItem === "See All"
                          ? "text-[#F44363]"
                          : "text-[#001224]"
                      } hover:bg-[#F4F5F6]`}
                    >
                      {submenuItem}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </DropdownMenu>
        </div>
      </div>
      <div className="hidden lg:flex items-center z-50">
        <Link href={"/auth/sign-up?mode=host"}>
          <Button>Become a Host</Button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="px-3 py-2 flex items-center gap-1">
              <div className="relative size-9 rounded-full bg-[url('/profile.png')] bg-cover bg-center">
                <div className="absolute size-4 bg-[#F44363] rounded-full flex justify-center items-center text-white -top-2 -right-1">
                  1
                </div>
              </div>
              <Image
                src="/arrow-down.png"
                alt="logo"
                width={12}
                height={6.75}
              />
            </div>
          </DropdownMenuTrigger>
          {loggedIn ? (
            <DropdownMenuContent>
              {links.map((link) => (
                <DropdownMenuItem key={link.label} className="h-9">
                  <Link
                    href={link.href}
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="h-9">
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Profile
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="h-9">
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Become a Host
                </p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="h-9">
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Log Out
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent>
              <DropdownMenuItem className="h-9">
                <p
                  onClick={() => setLoggedIn(true)}
                  className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                >
                  Log In
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="h-9">
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Sign Up
                </p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="h-9">
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Become a Host
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
      <div className="lg:hidden flex justify-center items-center z-50">
        <Navigator color="#ffffff" />
      </div>
    </div>
  );
};
