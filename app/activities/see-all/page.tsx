"use client";

import { ActivitiesList } from "@/components/activities-lists";
import { Footer } from "@/components/footer";
import { SearchHeader } from "@/components/search-header";

const SeeAll = () => {
  return (
    <div>
      <SearchHeader />
      <ActivitiesList />
      <Footer />
    </div>
  );
};

export default SeeAll;
