import { useState } from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: string;
  bgColor?: string;
  textColor?: string;
}

const items: AccordionItem[] = [
  {
    title: "How does a membership work?",
    content:
      "A membership is a monthly rolling subscription which gives you priority access to any of our studios. You can use your allowance as and when you need throughout the month or use it all at once. The day you sign up is the membership renewal date.",
    bgColor: "#FFEDF0",
    textColor: "#001224",
  },
  {
    title: "What are the benefits of a membership?",
    content:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    title: "What if I don’t use my membership allowance?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Can I cancel my membership at any time?",
    content:
      "Yes. You can cancel your membership anytime, and it will remain active until the end of the billing period.",
  },
];

  

export const MembershipWork = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="px-10 py-16 bg-[#1D0207] rounded-[20px]">
      <div className="flex md:flex-row flex-col justify-between lg:gap-48 md:gap-12 gap-6">
        <div className="flex flex-col gap-2 text-white lg:min-w-[460px]">
          <h2 className="md:text-[28px] text-lg font-bold leading-[37.04px]">
            Some of the things you may want to know
          </h2>
          <p className="md:text-lg text-sm">
            We answered questions so you don’t have to ask them.
          </p>
        </div>

        <div className="w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg mb-4 overflow-hidden",
                activeIndex === index && "bg-[#FFEDF0]"
              )}
            >
              <button
                className={cn(
                  "w-full flex justify-between items-center p-4 text-[20px] text-white",
                  activeIndex === index
                    ? "text-[#001224] font-bold"
                    : "border-b font-semibold"
                )}
                onClick={() => toggleItem(index)}
              >
                {item.title}
                <span
                  className={`transition-transform transform duration-500 ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <Icons.arrowUp stroke="#ffffff" />
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-[#434242] text-sm">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
