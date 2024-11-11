import { AlignJustify, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="flex justify-between py-4 lg:px-[72px] px-4">
      <div className="flex items-center gap-6">
        <img src="./logo.png" alt="logo" width={64} height={64} />
        <div>
          <p className="hidden lg:block text-white">Browse Spaces</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <Button>Become a Host</Button>
        <div className="px-3 py-2 flex items-center gap-1">
          <div className="relative size-9 rounded-full bg-[url('/profile.png')] bg-cover bg-center">
            <div className="absolute size-4 bg-[#F44363] rounded-full flex justify-center items-center text-white -top-2 -right-1">
              1
            </div>
          </div>
          <img src="./arrow-down.png" alt="logo" width={12} height={6.75} />
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center">
        <AlignJustify className="size-6" />
      </div>
    </div>
  );
};
