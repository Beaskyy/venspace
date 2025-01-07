"use client";

import { Footer } from "@/components/footer";
import { ListingCard } from "@/components/listing-card";
import { SearchHeader } from "@/components/search-header";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { listings } from "@/lib/data";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SpaceTypesId = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Get current listings to display
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <SearchHeader />
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-12 gap-6 lg:pl-[72px] md:pl-8">
        <div className="flex flex-col gap-6 max-w-[542px] md:mt-0 mt-6 md:p-8 p-4">
          <div className="flex flex-col gap-2">
            <h2 className="lg:text-[32px] md:text-3xl text-2xl text-[#001224] font-bold leading-[42.34px] max-w-[432px]">
              Find {id.replace("-", " ")}s near me
            </h2>
            <p className="md:text-base text-sm text-[#434242] md:leading-6">
              Discover thousands of unique {id.replace("-", " ")} for
              hire perfect for your production.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-[#1A1A1A26] md:p-4 py-2 px-4 rounded-xl md:h-20 h-[70px]">
              <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
                What are you planning?
              </p>
              <Input
                type="text"
                placeholder="Enter your activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="border-transparent shadow-none text-[15px] font-medium p-0 placeholder:text-[#434242B2]"
              />
            </div>
            <div className="border border-[#1A1A1A26] md:p-4 py-2 px-4 rounded-xl md:h-20 h-[70px]">
              <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
                Where?
              </p>
              <Input
                type="text"
                placeholder="Enter the area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-transparent shadow-none text-[15px] font-medium p-0 placeholder:text-[#434242B2]"
              />
            </div>
          </div>
          <Button className="group bg-[#FDF1C3] h-12 rounded-lg hover:bg-[#001224]">
            <Search className="text-[#001224] size-5 group-hover:text-white" />
            <p className="text-black group-hover:text-white">Search</p>
          </Button>
        </div>
        <div className="relative lg:w-[720px] lg:h-[825px] md:w-[540px] md:h-[615px] w-full h-[520px]">
          <Image
            src="/podcast.jpeg"
            alt="location"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:px-[72px] md:p-8 p-4 mt-16">
        <div className="relative flex flex-col gap-8">
          <h2 className="md:text-2xl text-lg text-[#001224] font-bold">
            Popular {id.replace("-", " ")}s
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {currentListings.map((listing, index) => (
              <div
                className="rounded-xl lg:w-[312px]"
                style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
                key={index}
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpaceTypesId;
