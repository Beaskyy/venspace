import Image from "next/image";
import { useState } from "react";

interface Listing {
  image: string;
  name: string;
  location: string;
  ratings: string;
  reviews: number;
  price: string;
  people: number;
  instant: boolean;
}

interface ListingsProps {
  listings: Listing[];
}

export const ListingsMap = ({ listings }: ListingsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  // Get current listings to display
  const currentListings = listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {currentListings.map((listing, index) => (
              <div
                className="rounded-xl"
                style={{ boxShadow: "0px 2px 20px 0px #0000000F" }}
                key={index}
              >
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
                        <Image
                          src="/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                        />
                        <p className="text-sm text-[#434242]">
                          {listing.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/profile-2user.svg"
                          alt="users"
                          width={18}
                          height={18}
                        />
                        <p className="text-sm text-[#434242]">
                          {listing.people} People
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/star.svg"
                          alt="star"
                          width={18}
                          height={18}
                        />
                        <p className="text-sm text-[#434242]">
                          {listing.ratings} ({listing.reviews} reviews)
                        </p>
                      </div>
                    </div>
                    <hr className="h-[1px] my-4" />
                    <div className="flex justify-between items-center">
                      <p className="text-base text-[#001224]">
                        From <span className="font-bold">₦{listing.price}</span>
                        /hr
                      </p>
                      <p className="text-[13px] text-[#43424299] leading-5">
                        Responds within 1 hr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span2">beaskty</div>
      </div>
    </div>
  );
};
