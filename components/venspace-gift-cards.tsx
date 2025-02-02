import Image from "next/image";

const imagesGroup = [
  "/space-1.png",
  "/space-2.png",
  "/space-3.png",
  "/space-4.png",
  "/space-5.png",
  "/space-6.png",
  "/space-7.png",
  "/space-8.png",
  "/space-9.png",
  "/space-10.png",
  "/space-11.png",
  "/space-12.png",
];

const imagesGroup1 = [
  "/space-1.png",
  "/space-2.png",
  "/space-3.png",
  "/space-4.png",
  "/space-5.png",
  "/space-6.png",
];

const imagesGroup2 = [
  "/space-7.png",
  "/space-8.png",
  "/space-9.png",
  "/space-10.png",
  "/space-11.png",
  "/space-12.png",
];

const ImageRow = ({
  images,
  translateX,
}: {
  images: string[];
  translateX: string;
}) => (
  <div
    className={`flex w-max gap-4 ${translateX} transition-transform duration-500 ease-in-out`}
  >
    {images.map((src, index) => (
      <Image
        key={index}
        src={src}
        alt={`space ${index + 1}`}
        width={300}
        height={245}
        className="rounded-xl object-cover w-[300px] h-[245px]"
      />
    ))}
  </div>
);

export const VenspaceGiftCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-[72px]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-[#001224] md:text-[28px] text-xl font-bold text-center max-w-[777px]">
          VenSpace Gift Cards can be used across all creative spaces
        </h2>
        <p className="md:text-base text-xs mx-4 text-[#434242] text-center max-w-[664px]">
          Our gift cards give your friends the freedom to explore any creative
          space on VenSpace. Whether it's a photography studio, art gallery, or
          event venue, they can use it to bring their creative vision to life!
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full relative flex flex-col gap-4 no-scrollbar overflow-x-auto h-[506px]">
        {/* First Row of Images */}
        <ImageRow images={imagesGroup1} translateX="-translate-x-6" />
        {/* Second Row of Images */}
        <ImageRow images={imagesGroup2} translateX="-translate-x-[184px]" />
      </div>
    </div>
  );
};
