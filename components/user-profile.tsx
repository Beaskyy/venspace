import { Button } from "@/components/ui";
import { CalendarDays, Check } from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRef, useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export const UserProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  
  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy text:", error);
        });
    }
  };
  return (
    <div className="flex md:flex-row flex-col gap-6">
      <div className="relative md:min-w-[150px] md:min-h-[150px] md:w-[150px] md:h-[150px] w-[72px] h-[72px] rounded-full border-[3px] border-[#001F3F]">
        <Image
          src="/profile-img.png"
          alt="profile"
          fill
          className="absolute rounded-full"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-between md:items-center w-full gap-6">
        <div
          className="flex flex-col gap-[2px]"
          onMouseEnter={() => setShowDialog(true)}
          onMouseLeave={() => setShowDialog(false)}
        >
          <div className="relative flex items-center gap-1">
            <h2 className="md:text-[28px] text-2xl text-[#001224] font-bold">
              Twelve Verse
            </h2>
            {showDialog && (
              <div
                className="absolute bg-white top-9 left-9 flex flex-col gap-3 w-[176px] p-4 rounded-lg"
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.06)" }}
              >
                <p className="text-base text-[#001224] font-semibold">
                  Twelve’s confirmed information
                </p>
                <hr />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 items-center">
                    <Check className="size-5 text-[#51BE27]" />
                    <p className="text-base text-black leading-6">
                      Email address
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Check className="size-5 text-[#51BE27]" />
                    <p className="text-base text-black leading-6">
                      Phone number
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Check className="size-5 text-[#51BE27]" />
                    <p className="text-base text-black leading-6">Identity</p>
                  </div>
                </div>
              </div>
            )}
            <Image src="/verify.svg" alt="verify" width={20} height={20} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="text-[#434242]" />
              <p className="md:text-sm text-[13px] text-[#434242] border-r border-[#1A1A1A1A] pr-4">
                Joined June 2024
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/star.svg" alt="star" width={18} height={18} />
              <p className="md:text-sm text-[13px] text-[#434242]">
                18 reviews
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger>
              <div className="border border-[#1A1A1A26] shadow-none rounded-lg h-11 py-2.5 px-5 text-[#001224] hover:bg-[#001224] hover:text-white md:text-base text-sm font-medium whitespace-nowrap">
                Message Host
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[500px] p-10 rounded-lg flex flex-col gap-6">
              <DialogHeader>
                <DialogTitle className="text-lg text-[#001224] font-semibold mb-6">
                  Share Profile
                </DialogTitle>

                <DialogDescription className="flex items-center flex-col gap-5">
                  <p className="text-lg text-center text-[#434242] font-normal">
                    Pick a listing from this page and then click the ‘Message
                    Host’ button from the listing.
                  </p>

                  <Button className="w-fit">
                    <Link href="/hosting">Go to Host’s Listings</Link>
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="group flex items-center h-11 py-2.5 px-5 bg-[#FDF1C3] hover:bg-[#001224] rounded-lg text-[#001224] hover:text-white font-medium whitespace-nowrap">
                <span className="md:text-base text-sm">Share Profile</span>
                {/* <Image
                      src="/send-2.svg"
                      alt="send"
                      width={24}
                      height={24}
                    /> */}

                <Icons.send2
                  width={30}
                  className=" stroke-[#001224] group-hover:stroke-white"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[500px] p-10 rounded-lg flex flex-col gap-6">
              <DialogHeader>
                <DialogTitle className="flex justify-center items-center">
                  <h2 className="text-[22px] text-[#001224] font-semibold mb-3 max-w-[279px] text-center leading-[29.11px]">
                    Select a listing to message Twelve
                  </h2>
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#001224] font-medium">URL</p>
                    <Input
                      type="text"
                      value={`https://www.venspace.com/host/profile/fhdjsjdhsjjsdhsjs`}
                      ref={inputRef}
                      readOnly
                      className="text-[15px] text-[#434242]"
                    />
                  </div>
                  <Button onClick={copyToClipboard}>Copy Link</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
