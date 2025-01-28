"use client";
import { useState } from "react";

export const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const MIN = 500;
  const MAX = 1000000;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000); // Ensure min < max
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000); // Ensure max > min
    setMaxPrice(value);
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Filter by Price Range</h2>

      {/* Display the price range */}
      <div className="flex justify-between text-sm mb-4">
        <div>Min: <span className="font-semibold">#{minPrice.toLocaleString()}</span></div>
        <div>Max: <span className="font-semibold">#{maxPrice.toLocaleString()}</span></div>
      </div>

      {/* Price Range Sliders */}
      <div className="relative w-full h-10">
        {/* Background line */}
        <div className="absolute top-[50%] left-0 right-0 h-1 bg-gray-300 rounded-full -translate-y-1/2"></div>

        {/* Min Slider */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute top-0 w-full appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 2 }}
        />
        
        {/* Max Slider */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute top-0 w-full appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 1 }}
        />

        {/* Custom Circular Buttons */}
        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer"
          style={{
            left: `${((minPrice - MIN) / (MAX - MIN)) * 100}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
            zIndex: 3,
          }}
        ></div>
        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer"
          style={{
            left: `${((maxPrice - MIN) / (MAX - MIN)) * 100}%`,
            transform: "translate(-50%, -50%)",
            top: "50%",
            zIndex: 3,
          }}
        ></div>
      </div>
    </div>
  );
}
