import { Info } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import Image from "next/image";
import { Button } from "./ui";
import { membershipPlans } from "@/lib/data";
import { Input } from "./ui/input";

interface MembershipReviewProps {
  setCurrentPage: (currentPage: number) => void;
  selectedId: number;
  selectedAmount: number;
}
export const MembershipReview = ({
  setCurrentPage,
  selectedId,
  selectedAmount,
}: MembershipReviewProps) => {
  const processing = 3000;

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-3 max-w-[1055px]">
        <div className="bg-[#FFF3F5] py-1.5 px-3 rounded-[40px] text-[#F44363] text-sm font-medium w-fit">
          Twelve Verse
        </div>
        <div className="flex flex-col gap-12 lg:min-w-[1055px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#001224] md:text-[28px] text-lg font-bold text-center">
              Review & Pay
            </h3>
            <p className="md:text-base text-sm text-[#434242] text-center">
              Kindly review your membership details and pay
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-12 md:w-[608px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 pb-6 border-b border-[#1A1A1A14]">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-base text-[#001224] font-bold">
                      Membership Details
                    </h6>
                    <div className="flex justify-between items-center gap-2">
                      <p className="text-base text-[#434242] leading-6 font-normal">
                        Price
                      </p>
                      <p className="text-base text-[#434242] leading-6 font-normal">
                        {formatAmount(selectedAmount)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-[#434242] leading-6 font-normal">
                          Processing
                        </p>
                        <Info className="size-[13.3px] rotate-180 text-[#434242]" />
                      </div>
                      <p className="text-base text-[#434242] leading-6 font-normal">
                        {formatAmount(processing)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-lg text-[#001224] font-black">
                    <p>Total</p>
                    <p>{formatAmount((selectedAmount ?? 0) + processing)}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h6 className="text-base text-[#001224] font-bold">
                      Payment Method
                    </h6>
                    <p className="text-sm text-[#434242] font-normal">
                      All transactions are secure and encrypted
                    </p>
                  </div>
                  <div>
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex flex-col gap-6"
                    >
                      <div className="flex border border-[#1A1A1A26] placeholder:text-[#43424270] h-[77px] py-3 px-4 rounded-[10px] gap-3">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor="option-one"
                            className="text-base font-medium text-[#001224]"
                          >
                            Credit Card
                          </Label>
                          <small className="text-xs text-[#434242CC]">
                            We accept all major credit cards
                          </small>
                        </div>
                      </div>
                      <div className="flex border border-[#1A1A1A26] placeholder:text-[#43424270] h-[77px] py-3 px-4 rounded-[10px] gap-3">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <div className="flex flex-col gap-3">
                          <Label
                            htmlFor="option-two"
                            className="text-base font-medium text-[#001224]"
                          >
                            Pay through bank transfer
                          </Label>
                          <small className="text-xs text-[#434242CC]">
                            Guests who acknowledge and accept your host rules
                            can book instantly without any request
                          </small>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => {
                    setCurrentPage(1);
                  }}
                >
                  <Image
                    src="/arrow-left.svg"
                    alt="back"
                    width={24}
                    height={24}
                  />
                  <span className="text-base text-[#001224] font-medium">
                    Go Back
                  </span>
                </div>

                <Button
                  className="w-fit md:h-[52px] md:w-[184px] h-10 py-[14px] px-6 md:text-base text-sm font-medium"
                  onClick={() => setCurrentPage(3)}
                  // disabled={isDisabled}
                >
                  Pay Now
                </Button>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-[104px]">
              {membershipPlans
                ?.filter((plan) => selectedId === plan.id)
                ?.map((plan) => (
                  <div
                    className="flex flex-col gap-6 p-6 rounded-lg border border-[#1A1A1A0A] min-w-[360px] h-fit"
                    style={{ boxShadow: "0px 4px 20px 0px #0000000F" }}
                    key={plan.id}
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
