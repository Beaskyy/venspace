import { Button } from "./ui/button";

export const HostingHero = () => {
  return (
    <div className="relative bg-[url('/hosting.jpeg')] bg-cover bg-center bg-no-repeat md:h-[657px] h-80 mx-6 rounded-[20px]">
      <div className="absolute rounded-[20px] inset-0 bg-[linear-gradient(256.85deg,_rgba(0,0,0,0)_1.67%,_rgba(0,0,0,0.6)_101.58%)]"></div>
      <div className="absolute md:top-[325px] top-10 lg:left-10 left-5 flex flex-col gap-5 w-full max-w-[624px]">
        <div className="flex md:flex-row flex-col md:items-center gap-2">
          <div className="relative flex items-center bg-[#FFFFFF59] w-[134px] h-11 rounded-[44px] py-2 px-3">
            <div className="absolute left-3 w-8 h-8 border-[1.5px] border-white bg-[#FFE7CC] rounded-full bg-[url('/avt-1.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute left-10 w-8 h-8 border-[1.5px] border-white bg-[#D4AFBD] rounded-full bg-[url('/avt-2.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute left-16 w-8 h-8 border-[1.5px] border-white bg-[##D4AFBD] rounded-full bg-[url('/avt-3.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className="absolute right-3 w-8 h-8 border-[1.5px] border-white bg-[##D4AFBD] rounded-full bg-[url('/avt-4.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>
          <p className="text-white text-sm font-medium">
            Join 50+ hosts already renting their spaces.
          </p>
        </div>
        <h2 className="md:text-[56px] text-2xl text-white font-semibold md:leading-[60px]">
          Earn extra income by opening your doors
        </h2>
        <Button className="w-fit">List your first space</Button>
      </div>
    </div>
  );
};
