import { Header } from "./header";

export const Hero = () => {
  return (
    <div className="bg-[url('/hero-1.jpeg')] bg-cover bg-center w-full h-[790px]">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,67,0.32)] via-[rgba(0,0,0,0.39)] to-[rgba(0,33,67,0.32)]"></div>
      <Header />
      <div className="flex justify-center items-center mt-[170px]">
        <h1 className="lg:text-[64px] text-3xl md:text-6xl max-w-[788px] text-center text-white font-bold">
          Find creative spaces in <span className="text-[#FDF1C3]">Lagos, Nigeria</span>
        </h1>
      </div>
    </div>
  );
};
