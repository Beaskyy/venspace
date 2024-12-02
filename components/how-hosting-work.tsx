export const HowHostingWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[72px] gap-12 mx-6">
      <h3 className="text-[#001224] text-[28px] font-bold leading-[37.04px]">
        How Hosting Works
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#F0F0F080]">
          <p className="text-[#001224] text-[22px] font-semibold">01</p>
          <p className="text-[#001224] text-lg font-bold">
            Sign up as a host for free
          </p>
          <p className="text-base text-[#434242]">
            If you own a property, you can host it on VenSpace. Simply create a
            new listing, add some basic info like price, photos and features,
            and then click ‘Publish’.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#FFEDF0]">
          <p className="text-[#001224] text-[22px] font-semibold">02</p>
          <p className="text-[#001224] text-lg font-bold">
            Welcome guests into your space
          </p>
          <p className="text-base text-[#434242]">
            Accept bookings through the VenSpace platform. Once you confirm,
            your guests will receive information on how to get there and other
            basic details.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#F0F0F080]">
          <p className="text-[#001224] text-[22px] font-semibold">03</p>
          <p className="text-[#001224] text-lg font-bold">
            Get paid immediately
          </p>
          <p className="text-base text-[#434242]">
            Guests are charged upfront through VenSpace’s secure payment system.
            Your payout is directly deposited after each booking, minus our
            service fee.
          </p>
        </div>
      </div>
    </div>
  );
};
