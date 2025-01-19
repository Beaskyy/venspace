"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { MembershipPlan } from "@/components/membership-plan";
import { SearchHeader } from "@/components/search-header";
import { MembershipForm } from "@/components/membership-form";
import { MembershipReview } from "@/components/membership-review";

const Membership = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [selectedAmount, setSelectedAmount] = useState(0)
  return (
    <div>
      <SearchHeader />
      <div className="flex flex-col gap-12 lg:px-[72px] my-10 lg:pt-0 md:p-8 p-4">
        {currentPage === 0 ? (
          <MembershipPlan
            setCurrentPage={setCurrentPage}
            setSelectedId={setSelectedId}
            setSelectedAmount={setSelectedAmount}
          />
        ) : currentPage === 1 ? (
          <MembershipForm
            setCurrentPage={setCurrentPage}
            selectedId={selectedId}
          />
        ) : currentPage === 2 ? (
          <MembershipReview
            setCurrentPage={setCurrentPage}
            selectedId={selectedId}
            selectedAmount={selectedAmount}
          />
        ) : (
          "beasky"
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
