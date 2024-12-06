"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface SearchDropdownProps {
  items: string[];
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ items }) => {
  const [query, setQuery] = useState(""); // Holds the current input value
  const [isOpen, setIsOpen] = useState(false); // Manages dropdown visibility
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Tracks the selected item

  // Filter items based on the query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemClick = (item: string) => {
    setSelectedItem(item); // Set selected item
    setQuery(item); // Set query to the selected item
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative w-full">
      {/* Input */}
      <input
        type="text"
        placeholder="Enter your activity"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true); // Open dropdown when typing
        }}
        onFocus={() => setIsOpen(true)} // Open dropdown on focus
        className="relative w-full focus:outline-none focus:ring focus:ring-[#F44363] h-12 border border-[#1A1A1A26] py-3 px-4 placeholder:text-[#43424257] text-base leading-6 rounded-lg"
      />
      <ChevronDown className="absolute right-4 top-4 text-[#494E50] size-4" />

      {/* Dropdown */}
      {isOpen && filteredItems.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md max-h-40 overflow-y-auto z-10">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-3 py-2 cursor-pointer text-sm text-[#001224] hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* No results */}
      {isOpen && filteredItems.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md p-3 text-gray-500 text-sm">
          No results found.
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
