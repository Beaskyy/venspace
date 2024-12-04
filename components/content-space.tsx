import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContentSpaceProps {
  spaces: { name: string; image: string }[];
  selectedSpace?: string | null;
  setSelectedSpace: (space: any) => void;
  setIsDisabled: (disabled: boolean) => void;
}

export const ContentSpace = ({ spaces, setSelectedSpace, selectedSpace, setIsDisabled }: ContentSpaceProps) => {
  const handleSpaceClick = (name: string) => {
    setSelectedSpace((prev: any) => (prev === name ? null : name));
    setIsDisabled(false);
    // Add additional logic here, e.g., navigation or API calls
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-[28px] text-black font-bold text-center">
        Which of these best describes your space?
      </h1>
      <div>
        <div className="max-w-[843px] w-full grid md:grid-cols-3 grid-cols-1 gap-6">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={cn(
                "relative w-[265px] h-[228px] rounded-lg cursor-pointer",
                selectedSpace === space.name && "border border-[#F44363]"
              )}
              onClick={() => handleSpaceClick(space.name)}
            >
              <Image
                src={space.image}
                alt="space"
                fill
                className="absolute rounded-lg"
              />
              <div
                className="absolute bottom-0 rounded-b-lg w-full h-10 lg:pl-4 p-2"
                style={{
                  background:
                    "linear-gradient(180.37deg, rgba(0, 0, 0, 0) 55.52%, rgba(0, 0, 0, 0.45) 76.44%)",
                  backdropFilter: "blur(50px)",
                }}
              >
                <p className="lg:text-sm text-xs text-white">{space.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
