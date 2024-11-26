import { spaces } from "@/lib/data";
import { Map } from "lucide-react";

export const Spaces = () => {
  return (
    <div className="lg:px-[72px] md:p-8 p-4">
      <h4 className="lg:text-[28px] md:text-2xl text-xs text-[#001224] font-bold mb-4">
        Find spaces that suit your purpose
      </h4>
      <div className="grid lg:grid-cols-5 grid-cols-1 mt-2 gap-6">
        {spaces.map(({ name, spaceNumber, image }, index) => (
          <div
            key={index}
            className="relative bg-[#E5E5E5] bg-cover bg-center w-[240px] h-[323px] rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4">
              <h6 className="text-base text-white font-medium leading-[27px]">
                {name}
              </h6>
              <div className="flex items-center gap-[3px]">
                <Map className="size-4 text-white" />
                <p className="text-white text-sm leading-[21px]">
                  {spaceNumber}+ locations
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
