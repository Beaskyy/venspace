import { listings } from "@/lib/data";
import Image from "next/image";

export const Listing = () => {
  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <h4 className="lg:text-[28px] md:text-2xl text-lg text-[#001224] font-bold">
        Top rated listings
      </h4>
      <p className="text-sm leading-6 text-[#434242]">
        Curated to ensure the highest level of satisfaction
      </p>
      <div className="mt-6 flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
        {listings.map(
          (
            { name, location, ratings, reviews, price, image, people },
            index
          ) => (
            <div
              key={index}
              className="flex flex-col min-w-[312px] min-h-[200px]"
              style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.059)" }}
            >
              <Image
                src={image}
                alt="hero"
                width={312}
                height={200}
                className="rounded-t-lg max-w-[312px] max-h-[200px] object-cover"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
                    {name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/location.svg"
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">{location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">{people} People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">
                      {ratings} ({reviews} reviews)
                    </p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦{price}</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
