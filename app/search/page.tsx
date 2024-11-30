"use client";
import { Footer } from "@/components/footer";
import { Listings } from "@/components/listings";
import { ListingsMap } from "@/components/listings-map";
import { Search } from "@/components/search";
import { SearchFilter } from "@/components/search-filter";
import { SearchHeader } from "@/components/search-header";
import { listings } from "@/lib/data";
import { useState } from "react";

const SearchPage = () => {
  const [showMap, setShowMap] = useState(true);
  return (
    <div>
      <SearchHeader />
      <div className="hidden lg:flex justify-center items-center gap-[56px] my-[56px] ">
        <Search />
      </div>
      <div className="flex flex-col gap-8 lg:px-[72px] md:p-8 p-4">
        <SearchFilter />
        {showMap ? <ListingsMap /> : <Listings listings={listings} />}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
