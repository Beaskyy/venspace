import { AlignJustify, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const SearchHeader = () => {
  return (
    <div
      className="flex justify-between py-4 lg:px-[72px] px-4"
      style={{ boxShadow: "0px 2px 19px 0px #0000000D" }}
    >
      <Link href="/" className="flex items-center gap-6 z-50">
        <Image src="/logo.png" alt="logo" width={64} height={64} />
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="hidden lg:block text-[#001224]">Browse Spaces</p>
          <ChevronDown className="text-[#001224] size-[18px]" />
        </div>
      </Link>
      <div className="hidden lg:flex items-center z-50">
        <Link href={"/auth/sign-up?mode=host"}>
          <Button>Become a Host</Button>
        </Link>
        <div className="px-3 py-2 flex items-center gap-1">
          <div className="relative size-9 rounded-full bg-[url('/profile.png')] bg-cover bg-center">
            <div className="absolute size-4 bg-[#F44363] rounded-full flex justify-center items-center text-white -top-2 -right-1">
              1
            </div>
          </div>
          <Image src="/arrow-down.png" alt="logo" width={12} height={6.75} />
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center z-50">
        <AlignJustify className="text-white size-6" />
      </div>
    </div>
  );
};
