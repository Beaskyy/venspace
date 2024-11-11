export const Explore = () => {
  return (
    <div className="lg:p-[72px] md:p-8 p-4">
      <h4 className="lg:text-[28px] md:text-2xl text-xs text-[#001224] font-bold">
        Explore spaces in the most popular areas in Lagos
      </h4>
      <div className="mt-4 flex items-center gap-6 overflow-x-auto no-scrollbar">
        <div className="relative bg-[url('/ikoyi-link-bridge.jpeg')] bg-top bg-cover bg-no-repeat lg:min-w-[400px] lg:h-[271px] min-w-[200px] h-[135px] rounded-lg">
          <div
            className="absolute bottom-0 rounded-b-lg w-full lg:h-16 h-10 lg:pl-4 pl-2 lg:pt-[9px] pt-1"
            style={{
              background:
                "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
              backdropFilter: "blur(50px)",
            }}
          >
            <h6 className="lg:text-lg text-sm font-medium text-white">Ikoyi</h6>
            <p className="lg:text-sm text-xs text-white">7 locations</p>
          </div>
        </div>
        <div className="relative bg-[url('/yaba.jpeg')] bg-top bg-cover bg-no-repeat lg:min-w-[400px] lg:h-[271px] min-w-[200px] h-[135px] rounded-lg">
          <div
            className="absolute bottom-0 rounded-b-lg w-full lg:h-16 h-10 lg:pl-4 pl-2 lg:pt-[9px] pt-1"
            style={{
              background:
                "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
              backdropFilter: "blur(50px)",
            }}
          >
            <h6 className="lg:text-lg text-sm font-medium text-white">Yaba</h6>
            <p className="lg:text-sm text-xs text-white">5 locations</p>
          </div>
        </div>
        <div className="relative bg-[url('/ikeja.png')] bg-top bg-cover bg-no-repeat lg:min-w-[400px] lg:h-[271px] min-w-[200px] h-[135px] rounded-lg">
          <div
            className="absolute bottom-0 rounded-b-lg w-full lg:h-16 h-10 lg:pl-4 pl-2 lg:pt-[9px] pt-1"
            style={{
              background:
                "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
              backdropFilter: "blur(50px)",
            }}
          >
            <h6 className="lg:text-lg text-sm font-medium text-white">Ikeja</h6>
            <p className="lg:text-sm text-xs text-white">10 locations</p>
          </div>
        </div>
        <div className="relative bg-[url('/lekki-bridge.jpeg')] bg-top bg-cover bg-no-repeat lg:min-w-[400px] lg:h-[271px] min-w-[200px] h-[135px] rounded-lg">
          <div
            className="absolute bottom-0 rounded-b-lg w-full lg:h-16 h-10 lg:pl-4 pl-2 lg:pt-[9px] pt-1"
            style={{
              background:
                "linear-gradient(90.51deg, rgba(74, 74, 74, 0.5) 0%, rgba(74, 74, 74, 0.2) 100%)",
              backdropFilter: "blur(50px)",
            }}
          >
            <h6 className="lg:text-lg text-sm font-medium text-white">Lekki</h6>
            <p className="lg:text-sm text-xs text-white">25 locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};
