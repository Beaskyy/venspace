import Image from "next/image";
import { Button } from "./ui";

interface MembershipCardProps {
  plan: {
    id: number;
    title: string;
    price: string;
    benefits: string[];
    bgColor: string;
    textColor: string;
    footerTextColor: string;
    footer: string;
  };
  setCurrentPage: (currentPage: number) => void;
  setSelectedId: (selectedId: number) => void;
}

export const MembershipCard = ({
  plan,
  setCurrentPage,
  setSelectedId,
}: MembershipCardProps) => {
  return (
    <div
      className="flex flex-col gap-6 p-6 rounded-lg border border-[#1A1A1A0A]"
      style={{ boxShadow: "0px 4px 20px 0px #0000000F" }}
    >
      <div className="flex flex-col gap-6">
        <div
          className={`flex justify-center items-center w-fit md:text-[13px] text-xs h-[29px] ${plan.bgColor} ${plan.textColor} font-medium rounded-[40px] py-1 px-3`}
        >
          {plan.title}
        </div>
        <h3 className="md:text-[28px] text-lg font-bold">
          {plan.price}
          <span className="md:text-base text-sm text-[#434242CC] font-normal">
            /month
          </span>
        </h3>
      </div>
      <Button className="h-11" onClick={() => {
        setCurrentPage(1);
        setSelectedId(plan.id);
      }}>
        Subscribe
      </Button>
      <div className="flex flex-col gap-6">
        {plan.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src="/tick-circle.svg"
              alt="circle check"
              width={16}
              height={16}
            />
            <p className="md:text-base text-sm text-[#434242CC] leading-6">
              {benefit}
            </p>
          </div>
        ))}
      </div>
      <p
        className={`md:text-sm text-xs ${plan.footerTextColor} font-medium mt-9`}
      >
        {plan.footer}
      </p>
    </div>
  );
};
