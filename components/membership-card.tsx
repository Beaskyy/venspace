import Image from "next/image";
import { Button } from "./ui/button";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface MembershipCardProps {
  plan: {
    id: number;
    title: string;
    price: number;
    benefits: string[];
    bgColor: string;
    textColor: string;
    footerTextColor: string;
    footer: string;
  };
  setCurrentPage: (currentPage: number) => void;
  setSelectedId: (selectedId: number) => void;
  setSelectedAmount: (selectedAmount: number) => void;
}

export const MembershipCard = ({
  plan,
  setCurrentPage,
  setSelectedId,
  setSelectedAmount,
}: MembershipCardProps) => {
  return (
    <div
      className="flex flex-col gap-6 p-6 rounded-lg border border-[#1A1A1A0A]"
      style={{ boxShadow: "0px 4px 20px 0px #0000000F" }}
    >
      <div className="flex flex-col gap-6">
        <div
          className={`flex justify-center items-center w-fit md:text-[13px] text-xs h-[29px] ${plan.bgColor} ${plan.textColor} font-medium rounded-[40px] py-1 px-3`}
        >
          {plan.title}
        </div>
        <h3 className="md:text-[28px] text-lg font-bold">
          {plan.price}
          <span className="md:text-base text-sm text-[#434242CC] font-normal">
            /month
          </span>
        </h3>
      </div>
      <Button
        className="h-11"
        onClick={() => {
          setCurrentPage(1);
          setSelectedId(plan.id);
          setSelectedAmount(plan.price);
        }}
      >
        Subscribe
      </Button>
      <div className="flex flex-col gap-6">
        {plan.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src="/tick-circle.svg"
              alt="circle check"
              width={16}
              height={16}
            />
            <p className="md:text-base text-sm text-[#434242CC] leading-6">
              {benefit}
            </p>
          </div>
        ))}
      </div>
      <div className="relative group">
      <p
        className={`md:text-sm text-xs ${plan.footerTextColor} font-medium mt-9`}
      >
        {plan.footer}
      </p>
      {/* hover to show listing */}
      <div
        className="absolute bottom-2 w-[200px] z-50 group-hover:opacity-100 opacity-0"
        style={{
          boxShadow: "0px 4px 20px 0px #0000000F",
        }}
      >
        <div>fam
          <div className="relative w-full h-[125px] rounded-t-xl overflow-hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true} // Enables navigation arrows
              pagination={{
                clickable: true,
                type: "bullets",
              }} // Adds round dots below
              modules={[Navigation, Pagination]}
              className="h-full custom-swiper" // Add a custom class for Swiper
            >
              {[
                "/listing-1.jpeg",
                "/listing-2.jpeg",
                "/listing-3.jpeg",
                "/listing-4.jpeg",
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      alt={`listing-${index}`}
                      src={image}
                      className="object-cover h-full w-full transition rounded-t-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <div className="flex flex-col gap-2">
              <h3 className="md:text-[15px] text-sm truncate text-[#001224] font-bold leading-[21.17px]">
                All Exclusive Shanty studios
              </h3>
              <div className="flex items-center gap-1">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={18}
                  height={18}
                />
                <p className="text-sm text-[#434242]">Ikeja, Lagos</p>
              </div>
            </div>
            <hr className="h-[1px] my-4" />
            <div className="">
              <p className="text-base text-[#001224]">
                From <span className="font-bold">₦30,000</span>
                /hr
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
