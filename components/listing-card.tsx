import Image from "next/image";

interface ListingCardProps {
  listing: {
    image: string;
    name: string;
    location: string;
    ratings: string;
    reviews: number;
    price: string;
    people: number;
    instant: boolean;
  };
}
export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div>
      <div className="relative w-full h-[200px] rounded-t-xl">
        <Image
          fill
          alt="listing"
          src={listing.image}
          className="object-cover h-full w-full group-hover:scale-110 transition rounded-t-xl"
        />
        {listing.instant && (
          <div className="absolute left-3 top-3 text-[#F44363] bg-[#FFEBEE] py-1.5 px-3 rounded-[40px] w-fit text-xs font-medium leading-4">
            Instant Booking Available
          </div>
        )}
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-[#001224] font-bold leading-[21.17px]">
            {listing.name}
          </h3>
          <div className="flex items-center gap-1">
            <Image src="/location.svg" alt="location" width={18} height={18} />
            <p className="text-sm text-[#434242]">{listing.location}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/profile-2user.svg"
              alt="users"
              width={18}
              height={18}
            />
            <p className="text-sm text-[#434242]">{listing.people} People</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <p className="text-sm text-[#434242]">
              {listing.ratings} ({listing.reviews} reviews)
            </p>
          </div>
        </div>
        <hr className="h-[1px] my-4" />
        <div className="flex justify-between items-center">
          <p className="text-base text-[#001224]">
            From <span className="font-bold">₦{listing.price}</span>/hr
          </p>
          <p className="text-[13px] text-[#43424299] leading-5">
            Responds within 1 hr
          </p>
        </div>
      </div>
    </div>
  );
};
