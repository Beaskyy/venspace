import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = [
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. You can style it however you want.",
    },
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. Add as many items as needed.",
    },
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. You can style it however you want.",
    },
    {
      title: "Who can be a VenSpace Host",
      content: "Yes. Add as many items as needed.",
    },
  ];

  return (
    <div className="mt-[72px]">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-[28px] text-[#001224] font-bold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#434242]">
            Got questions? We’ve got answers!
          </p>
        </div>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-8 w-full max-w-[900px] px-4">
            <div className="">
              <div
                onClick={() => toggleItem(index)}
                className="flex justify-between gap-8 pb-4 border-b border-[#1A1A1A14] cursor-pointer"
              >
                <p className="text-xl text-[#001224] font-medium">
                  Who can be a VenSpace Host
                </p>
                <Plus
                  size={28}
                  className={cn(
                    "transition-all duration-300",
                    activeIndex === index && "rotate-45"
                  )}
                />
              </div>
            </div>
            {activeIndex === index && (
              <div className="text-xl px-4 py-2 text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
