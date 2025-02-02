import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const GiftCardHero = () => {
  const router = useRouter();
  return (
    <div className="relative bg-[url('/bg-gift.webp')] bg-cover bg-center bg-no-repeat md:h-[789px] h-[450px] mx-6 rounded-[20px]">
      <div className="flex flex-col justify-center items-center md:pt-[112px] pt-14">
        <div className="flex flex-col md:gap-12 gap-6">
          <div className="text-white text-center">
            <h1 className="md:text-[54px] md:leading-[74.09px] text-2xl">
              Your Giftcard, Their Ideal Space
            </h1>
            <span className="font-light md:text-[48px] md:leading-[63.5px] text-xl">
              Express Yourself with this Card
            </span>
          </div>
          <p className="text-[#FFFFFFE5] max-w-[850px] text-center md:text-xl text-xs font-normal mx-5">
            With Venspace gift cards, give the gift of choice—whether for
            workspace bookings, inspiring events, or creative pursuits. Choose
            the value, and brighten someone’s day.
          </p>
          <div className="text-center">
            <Button onClick={() => router.push("/send-gift-card")} className="w-fit md:h-[52px] h-10 py-[14px] px-6 md:text-base text-sm font-medium">Send a Venspace Gift Card</Button>
          </div>
        </div>
        <Image
          src="/card.webp"
          alt="card"
          width={886}
          height={818}
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
};
