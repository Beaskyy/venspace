"use client";

import { CreateListing } from "@/components/create-lisiting";
import { CreativeSpace } from "@/components/creative-space";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { HostingHero } from "@/components/hosting-hero";
import { HowHostingWorks } from "@/components/how-hosting-work";
import { SearchHeader } from "@/components/search-header";
import { WhyHost } from "@/components/why-host";

const Hosting = () => {
  return (
    <div>
      <SearchHeader />
      <div>
        <HostingHero />
        <HowHostingWorks />
        <CreativeSpace />
        <WhyHost />
        <Faqs />
        <CreateListing />
        <Footer />
      </div>
    </div>
  );
};

export default Hosting;
