"use client";
import { Footer } from "@/components/footer";
import { Listings } from "@/components/listings";
import { Search } from "@/components/search";
import { SearchHeader } from "@/components/search-header";
import { listings } from "@/lib/data";

const SearchPage = () => {
  return (
    <div>
      <SearchHeader />
      <div className="flex justify-center items-center gap-[56px] my-[56px] ">
        <Search />
      </div>
      <div className="flex flex-col gap-8 lg:px-[72px] md:p-8 p-4">
        <div>first</div>
        <Listings listings={listings} />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
