import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";

// Define type for the extra day object
interface Day {
  startTime: string;
  endTime: string;
}

export const TimeSelector: React.FC = () => {
  // State to manage default start and end times
  const [defaultStartTime, setDefaultStartTime] = useState<string>("");
  const [defaultEndTime, setDefaultEndTime] = useState<string>("");

  // State to manage extra days
  const [extraDays, setExtraDays] = useState<Day[]>([]);

  // Handler to add a new day
  const handleAddDay = () => {
    setExtraDays((prev) => [...prev, { startTime: "", endTime: "" }]);
  };

  // Handler to remove the last day
  const handleRemoveDay = () => {
    setExtraDays((prev) => prev.slice(0, -1));
  };

  // Handler to update start or end time for a specific day
  const handleTimeChange = (index: number, field: keyof Day, value: string) => {
    setExtraDays((prev) =>
      prev.map((day, i) => (i === index ? { ...day, [field]: value } : day))
    );
  };

  // Reusable options for the dropdown
  const timeOptions = [
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
  ];

  // Reusable Select component
  const TimeSelect: React.FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
  }> = ({ label, value, onChange }) => (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm text-[#434242] font-medium">{label}</label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full rounded-lg h-12 border border-[#1A1A1A26] py-3 px-4 placeholder:text-[#43424257] text-base leading-6">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Default Start and End Time */}
      <div className="flex justify-between gap-4">
        <TimeSelect
          label="Start Time"
          value={defaultStartTime}
          onChange={setDefaultStartTime}
        />
        <TimeSelect
          label="End Time"
          value={defaultEndTime}
          onChange={setDefaultEndTime}
        />
      </div>

      {/* Render Extra Days */}
      {extraDays.map((day, index) => (
        <div key={index} className="flex justify-between gap-4 mt-4">
          <TimeSelect
            label={`Extra Start Time`}
            value={day.startTime}
            onChange={(value) => handleTimeChange(index, "startTime", value)}
          />
          <TimeSelect
            label={`Extra End Time`}
            value={day.endTime}
            onChange={(value) => handleTimeChange(index, "endTime", value)}
          />
        </div>
      ))}

      {/* Add/Remove Buttons */}
      <div className="flex justify-between mt-4">
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={handleAddDay}
        >
          <span className="text-[#003B77] text-lg">+</span>
          <p className="text-sm text-[#003B77] font-medium">Add another day</p>
        </div>
        {extraDays.length > 0 && (
          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={handleRemoveDay}
          >
            <Trash2 className="size-4 text-[#FA2933]" />
            <p className="text-sm text-[#FA2933] font-medium">
              Remove extra day
            </p>
          </div>
        )}
      </div>

      {/* Debugging State */}
      {/* <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(
          { defaultStartTime, defaultEndTime, extraDays },
          null,
          2
        )}
      </pre> */}
    </div>
  );
};
