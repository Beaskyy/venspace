"use client";
import { Search } from "@/components/search";
import { SearchHeader } from "@/components/search-header";
import Image from "next/image";

const SearchPage = () => {
  return (
    <div>
      <SearchHeader />
      <div className="flex justify-center items-center gap-[56] my-[56px] ">
        <Search />
      </div>
      <div className="flex flex-col gap-8 lg:px-[72px] md:p-8 p-4">
        <div>first</div>
        <div className="flex flex-col">
          <p className="text-sm text-[#333333] font-medium leading-[21px] mb-4">
            10 birthday photo shoot spaces in Yaba, Lagos
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl w-[312px]"
              style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
            >
              <div className="relative bg-[url('/listing-1.jpeg')] bg-cover bg-center w-[312px] h-[200px] rounded-t-xl">
                <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
                  Instant Booking Available
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
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
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.svg"
                      alt="users"
                      width={18}
                      height={18}
                    />
                    <p className="text-sm text-[#434242]">10 People</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/star.svg" alt="star" width={18} height={18} />
                    <p className="text-sm text-[#434242]">5.0 (10 reviews)</p>
                  </div>
                </div>
                <hr className="h-[1px] my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-base text-[#001224]">
                    From <span className="font-bold">₦30,000</span>/hr
                  </p>
                  <p className="text-[13px] text-[#43424299] leading-5">
                    Responds within 1 hr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
