import { AlignJustify, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Navigator } from "./navigator";

const links = [
  { label: "Messages", href: "/" },
  { label: "Notifications", href: "/" },
  { label: "Bookings", href: "/" },
  { label: "Wishlist", href: "/" },
  { label: "VenCredit", href: "/" },
  { label: "Gift Cards", href: "/" },
];

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const SearchHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div
      className="flex justify-between py-4 lg:px-[72px] px-4"
      style={{ boxShadow: "0px 2px 19px 0px #0000000D" }}
    >
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-6 z-50">
          <div className="relative md:w-16 md:h-16 w-[43px] h-[43px]">
            <Image src="/logo.png" alt="logo" fill className="absolute" />
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="hidden lg:block text-[#001224]">Browse Spaces</p>
                <ChevronDown className="text-[#001224] size-[18px]" />
              </div>
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
              <DropdownMenuItem>
                <p className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Become a Host
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
      <div className="hidden lg:flex items-center z-50">
        <Link href={"/auth/sign-up?mode=host"}>
          <Button>Become a Host</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="px-3 py-2 flex items-center gap-1">
              <div className="relative size-8 rounded-full bg-[url('/profile-circle.svg')] bg-cover bg-center"></div>
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
                <Link href="/profile" className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4">
                  Profile
                </Link>
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
        <Navigator color="[#434242]" />
      </div>
    </div>
  );
};
