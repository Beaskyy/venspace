import Image from "next/image";
import React from "react";

export const CreativeSpace = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-[72px]">
      <div className="flex flex-col justify-center items-center gap-3 max-w-[664px]">
        <h2 className="text-[#001224] text-[28px] font-bold text-center">Every Creative Space Belongs on VenSpace</h2>
        <p className="text-base text-[#434242] text-center">
          Creative spaces of all shapes, styles, and sizes do well on VenSpace –
          from photo studios to content spaces. After all, it’s the diversity of
          options that makes VenSpace special.
        </p>
      </div>
      <div className="w-full relative flex flex-col gap-4 overflow-x-auto h-[506px]">
        <div className="flex w-[1880px] gap-4 -translate-x-6">
          <Image src="/space-1.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-2.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-3.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-4.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-5.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-6.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
        </div>
        <div className="flex w-[1880px] gap-4 -translate-x-[184px]">
          <Image src="/space-7.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-8.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-9.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-10.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-11.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
          <Image src="/space-12.png" alt="space" width={300} height={245} className="rounded-xl object-cover w-[300px] h-[245px]" />
        </div>
      </div>
    </div>
  );
};
