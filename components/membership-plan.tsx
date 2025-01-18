import { MembershipCard } from "./membership-card";
import { membershipPlans } from "@/lib/data";
import { MembershipWork } from "./membership-work";
import { UserProfile } from "./user-profile";

interface MembershipPlanProps {
  setCurrentPage: (currentPage: number) => void;
  setSelectedId: (selectedId: number) => void;
}

export const MembershipPlan = ({
  setCurrentPage,
  setSelectedId,
}: MembershipPlanProps) => {
  return (
    <>
      <UserProfile />
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div
              className="
          flex flex-col gap-3"
            >
              <h4 className="md:text-2xl text-lg font-bold leading-[31.75px] text-center">
                Choose Your Membership Plan
              </h4>
              <p className="md:text-base text-sm text-[#434242] leading-6 text-center">
                Find the perfect package to suit your content creation needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
              {membershipPlans.map((plan) => (
                <MembershipCard
                  key={plan.id}
                  plan={plan}
                  setCurrentPage={setCurrentPage}
                  setSelectedId={setSelectedId}
                />
              ))}
            </div>
          </div>
          <MembershipWork />
        </div>
      </div>
    </>
  );
};
