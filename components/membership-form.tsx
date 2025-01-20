import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "./ui/calendar";
import { format, isBefore, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { membershipPlans } from "@/lib/data";
import { Button } from "./ui/button";

interface MembershipFormProps {
  setCurrentPage: (currentPage: number) => void;
  selectedId: number;
}
export const MembershipForm = ({
  setCurrentPage,
  selectedId,
}: MembershipFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-3 max-w-[1055px]">
        <div className="bg-[#FFF3F5] py-1.5 px-3 rounded-[40px] text-[#F44363] text-sm font-medium w-fit">
          Twelve Verse
        </div>
        <div className="flex flex-col gap-12 lg:min-w-[1055px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#001224] md:text-[28px] text-lg font-bold text-center">
              Membership Application Form
            </h3>
            <p className="md:text-base text-sm text-[#434242] text-center">
              Please allow up to 2 working days after application to receive
              your membership code
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-[104px]">
            {/* <div
              className="flex flex-col gap-6 p-6 rounded-lg border border-[#1A1A1A0A] min-w-[360px] h-fit"
              style={{ boxShadow: "0px 4px 20px 0px #0000000F" }}
            >
              <div className="flex flex-col gap-6">
                <div
                  className={`flex justify-center items-center w-fit md:text-[13px] text-xs h-[29px] bg-[#68303A] text-[#FFF8F9] font-medium rounded-[40px] py-1 px-3`}
                >
                  ELITE
                </div>
                <h3 className="md:text-[28px] text-lg font-bold">
                  ₦300,000
                  <span className="md:text-base text-sm text-[#434242CC] font-normal">
                    /month
                  </span>
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/tick-circle.svg"
                    alt="circle check"
                    width={16}
                    height={16}
                  />
                  <p className="md:text-base text-sm text-[#434242CC] leading-6">
                    40 hours/month of studio time
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/tick-circle.svg"
                    alt="circle check"
                    width={16}
                    height={16}
                  />
                  <p className="md:text-base text-sm text-[#434242CC] leading-6">
                    30% discount on add- ons
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/tick-circle.svg"
                    alt="circle check"
                    width={16}
                    height={16}
                  />
                  <p className="md:text-base text-sm text-[#434242CC] leading-6">
                    Free use of all studio props
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/tick-circle.svg"
                    alt="circle check"
                    width={16}
                    height={16}
                  />
                  <p className="md:text-base text-sm text-[#434242CC] leading-6">
                    Assistance setting up and standby staff
                  </p>
                </div>
              </div>
              <p className={`md:text-sm text-xs text-[#001224] font-medium`}>
                - Access to all listings -
              </p>
            </div> */}
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
            <div className="flex flex-col gap-8 w-full">
              <h6 className="text-[#001F3F] md:text-lg text-base font-bold">
                Membership Details
              </h6>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#001F3F] text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[#001F3F] text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#001F3F] text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#001F3F] text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    type="email"
                    placeholder="Phone Number"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#001F3F] text-sm font-medium">
                    Membership Start Date
                  </label>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <p
                        className={cn(
                          "relative py-3 px-4 h-12 rounded-lg text-sm mt-2 bg-transparent shadow-none text-[#001224] font-normal cursor-pointer",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <div className="absolute top-0 left-0 w-full border border-[#1A1A1A26] py-3 px-4 flex justify-between gap-2.5 h-12 rounded-lg">
                            <span className="text-base font-normal text-[#001224]">
                              Today
                            </span>
                            <Image
                              src="/calendar.svg"
                              alt="Calendar"
                              width={16}
                              height={16}
                            />
                          </div>
                        )}
                      </p>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 rounded-[19px]"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isDisabled}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Button className="" disabled>
                  Submit & Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
