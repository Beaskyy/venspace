import Image from "next/image";
import { Button } from "./ui";
import { useRouter } from "next/navigation";

export const MembershipWelcome = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center flex-col gap-6 w-full rounded-[16px] md:mt-[90px]">
      <div className="flex justify-center items-center bg-[url('/success.png')] bg-contain w-[411px] h-[167.2px]">
        <div className="flex justify-center items-center md:size-[148px] size-24 rounded-full">
          <Image
            src="/success.svg"
            alt="success"
            width={100}
            height={100}
            className="md:size-[100px] size-16"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-[449px]">
        <h2 className="md:text-[28px] text-lg text-[#001224] font-bold text-center leading-[37.04px]">
          Thank you for purchasing Twelve’s Verse Membership
        </h2>
        <p className="md:text-base text-sm text-[#434242] text-center">
          Your membership access code will be sent to your email within 2
          business days. We’re processing your membership to ensure everything
          is set up perfectly for you
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Button onClick={() => router.push("/")} className="w-fit md:h-[52px] h-10 py-[14px] px-6 md:text-base text-sm font-medium">
          Explore Creative Spaces
        </Button>
       
      </div>
    </div>
  );
};
