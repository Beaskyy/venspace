import Image from "next/image";

export const BookingImages = () => {
  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="relative w-full md:h-[552px] h-[226px] rounded">
          <Image
            src="/listing-2.jpeg"
            alt="booking"
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded md:h-[264px] h-[127px]">
            <Image
              src="/booking-1.jpeg"
              alt="booking"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="relative rounded md:h-[264px] h-[127px]">
            <Image
              src="/booking-3.jpeg"
              alt="booking"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="relative rounded md:h-[264px] h-[127px]">
            <Image
              src="/booking-2.jpeg"
              alt="booking"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="relative flex justify-center items-center rounded md:h-[264px] h-[127px]">
            <Image
              src="/booking-4.jpeg"
              alt="booking"
              fill
              className="absolute object-cover"
            />
            <div className="absolute inset-0 bg-[#000000B2]"></div>
            <div className="absolute flex flex-col justify-center items-center gap-2 cursor-pointer">
              <Image src="/more.svg" alt="more" width={32} height={32} />
              <p className="text-sm text-white">Show all photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
