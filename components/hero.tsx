import { Header } from "./header";

export const Hero = () => {
  return (
    <div className="bg-[url('/hero-1.jpeg')] bg-cover bg-center w-full h-[790px]">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,33,67,0.32)] via-[rgba(0,0,0,0.39)] to-[rgba(0,33,67,0.32)]"></div>
     <Header />
    </div>
  );
};
