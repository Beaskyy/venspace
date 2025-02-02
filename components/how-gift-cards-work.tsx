export const HowGiftCardWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-[72px] mt-10 md:gap-12 gap-6 mx-6">
      <h3 className="text-[#001224] md:text-[28px] text-xl font-bold leading-[37.04px]">
        How VenSpace Gift Card Works
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#F0F0F080]">
          <p className="text-[#001224] md:text-[22px] text-base font-semibold">01</p>
          <p className="text-[#001224] md:text-lg text-sm font-bold">
            Choose the perfect amount
          </p>
          <p className="md:text-base text-xs text-[#434242]">
            Select a predefined value or enter a custom amount to suit your
            friend’s creative needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#FFEDF0]">
          <p className="text-[#001224] md:text-[22px] text-base font-semibold">02</p>
          <p className="text-[#001224] md:text-lg text-sm font-bold">
            Enter the recipient’s details
          </p>
          <p className="md:text-base text-xs text-[#434242]">
            Provide your friend’s name and email address, along with a personal
            message to make it extra special.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-[10px] p-6 bg-[#F0F0F080]">
          <p className="text-[#001224] md:text-[22px] text-base font-semibold">03</p>
          <p className="text-[#001224] md:text-lg text-sm font-bold">Send and surprise</p>
          <p className="md:text-base text-xs text-[#434242]">
            Once you pay for it, your friend will receive their Venspace gift
            card on the day specified, ready to use on their creative journey.
          </p>
        </div>
      </div>
    </div>
  );
};
