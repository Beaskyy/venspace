import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";

interface VenspaceGiftCardProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  showAmount: boolean;
  cardDetails: boolean;
  selectedAmount: number | null;
  disabled: boolean;
  setSelectedAmount: (selectedAmount: number | null) => void;
  setShowReview: (showReview: boolean) => void;
  setCardDetails: (cardDetails: boolean) => void;
  setDisabled: (disabled: boolean) => void;
  setShowAmount: (showAmount: boolean) => void;
}

const isValidEmail = (email: string) => {
  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const VenspaceGiftCard = ({
  name,
  email,
  selectedAmount,
  showAmount,
  cardDetails,
  disabled,
  setName,
  setEmail,
  setSelectedAmount,
  setShowReview,
  setCardDetails,
  setDisabled,
  setShowAmount,
}: VenspaceGiftCardProps) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(startOfDay(new Date()));

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };

  const amounts = [50000, 100000, 150000, 200000, 250000, 300000];

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCardDetails(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setSelectedAmount(Number(value));
    if (selectedAmount) {
      setCardDetails(true);
    }
  };

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  const checkFormValidity = (name: string, email: string) => {
    if (name && isValidEmail(email)) {
      setDisabled(false);
      setShowAmount(true);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = async () => {
    try {
      setShowReview(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="md:my-[90px] my-12 w-full max-w-[949px] mx-5">
        <div className="flex flex-col justify-center items-center md:gap-12 gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-[28px] text-lg text-black font-bold text-center">
              VenSpace Gift Card
            </h1>
            <p className="text-[#434242] md:text-base text-sm text-center max-w-[449px]">
              Support your friend’s creative idea by gifting them a venSpace
              gift card. This gift card can only be used on VenSpace
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-[104px] w-full">
            <div className="flex flex-col gap-4">
              <div
                className="bg-white md:w-[395px] w-full"
                style={{ boxShadow: "0px 4px 20px 0px #0000000F" }}
              >
                <div className="flex justify-center items-center bg-[url('/host.png')] bg-cover bg-no-repeat w-full md:h-[245px] h-[185px] rounded-tr-[10px] rounded-tl-[10px]">
                  <div className="relative md:w-[349px] w-[290px] md:h-[200px] h-[160px]">
                    <Image
                      src="/gift-card.webp"
                      alt="card"
                      fill
                      className="absolute bg-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-[23px] gap-[23px]">
                  {showAmount ? (
                    <div className="flex flex-col gap-4 ">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <p className="md:text-sm text-xs text-[#434242B2]">
                            From:
                          </p>
                          <p className="md:text-base text-sm text-[#434242] font-medium leading-6">
                            {name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="md:text-sm text-xs text-[#434242B2]">
                            To:
                          </p>
                          <p className="md:text-base text-sm text-[#434242] font-medium leading-6">
                            {email}
                          </p>
                        </div>
                      </div>
                      <p className="md:text-base text-xs text-[#434242] font-medium">
                        Hope you enjoy this VenSpace Gift Card! I wish you all
                        the best in your creative endeavour
                      </p>
                      <div className="border-t pt-4 border-[#1A1A1A14]">
                        <h5 className="md:text-[26px] text-lg text-[#001224] font-bold">
                          {selectedAmount ? formatAmount(selectedAmount) : "₦0"}
                        </h5>
                        <p className="md:text-sm text-xs text-[#434242] font-medium">
                          venspace.com/giftcards
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h6 className="md:text-[26px] text-lg text-[#001224] leading-[34.4px] font-bold">
                        Amount
                      </h6>
                      <p className="text-sm text-[#434242] font-medium">
                        venspace.com/giftcards{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <p className="md:text-sm text-xs text-[#434242] font-medium text-center">
                Card Preview
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <p className="text-lg text-[#001F3F] font-bold">
                  Amount Selection
                </p>
                <div className="flex flex-col gap-2">
                  <label className="text-[#001F3F] text-sm font-medium">
                    Gift Value*
                  </label>
                  <div className="flex flex-col gap-6">
                    {/* Render first row of amounts */}
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                      {amounts.slice(0, 4).map((amount) => (
                        <div
                          key={amount}
                          className={`py-2 px-4 rounded-lg text-sm font-medium h-[37px] cursor-pointer ${
                            selectedAmount === amount
                              ? "border-2 border-[#F44363] bg-[#FFF5F7] text-[#434242]"
                              : "border border-[#1A1A1A26] text-[#434242]"
                          }`}
                          onClick={() => handleSelectAmount(amount)}
                        >
                          ₦{amount.toLocaleString()}
                        </div>
                      ))}
                    </div>

                    {/* Render second row of amounts and input */}
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                      {amounts.slice(4).map((amount) => (
                        <div
                          key={amount}
                          className={`py-2 px-4 rounded-lg text-sm font-medium h-[37px] cursor-pointer ${
                            selectedAmount === amount
                              ? "border-2 border-[#F44363] bg-[#FFF5F7] text-[#434242]"
                              : "border border-[#1A1A1A26] text-[#434242]"
                          }`}
                          onClick={() => handleSelectAmount(amount)}
                        >
                          ₦{amount.toLocaleString()}
                        </div>
                      ))}

                      {/* Input for custom amount */}
                      <div className="relative col-span-2">
                        <Input
                          className="h-[37px] m-0 border border-[#1A1A1A26] pl-11"
                          placeholder="Enter amount"
                          value={selectedAmount || ""}
                          onChange={handleInputChange}
                        />
                        <div className="absolute top-0 flex justify-center items-center w-[35px] h-[37px] bg-[#F0F0F0] text-sm text-[#001224] font-medium border-y border-[#1A1A1A26] border-l rounded-tl-lg rounded-bl-lg">
                          ₦
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {cardDetails && (
                <div className="flex flex-col gap-6">
                  <h6 className="text-lg text-[#001F3F] font-bold">
                    Gift Card Details
                  </h6>
                  <div className="flex flex-col gap-8">
                    <div>
                      <label className="text-[#001F3F] text-sm font-medium">
                        Your Name*
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                          const newName = e.target.value;
                          setName(newName);
                          checkFormValidity(newName, email);
                        }}
                        className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[#001F3F] text-sm font-medium">
                        Recipient’s Email Address*
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const newEmail = e.target.value;
                          setEmail(newEmail);
                          checkFormValidity(name, newEmail);
                        }}
                        placeholder="Enter the recipient’s email address"
                        className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[#001F3F] text-sm font-medium">
                        Personal Message
                      </label>
                      <Textarea
                        placeholder="Add a personal message (optional)"
                        className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm h-[106px]"
                      />
                    </div>
                    <div>
                      <label className="text-[#001F3F] text-sm font-medium">
                        Delivery Date
                      </label>
                      <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                          <p
                            className={cn(
                              "border border-[#1A1A1A26] py-3 px-4  h-12 rounded-lg text-sm mt-2 bg-transparent shadow-none text-[#001224] font-normal cursor-pointer",
                              !date && "text-muted-foreground"
                            )}
                          >
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <div className="border border-[#1A1A1A26] py-3 px-4 flex justify-between gap-2.5 h-12 rounded-lg">
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
                    <Button disabled={disabled} onClick={handleSubmit}>
                      Buy Gift Card Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
