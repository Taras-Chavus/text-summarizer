"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/app/components/ui/select";
import { Calendar, Search } from "lucide-react";
import useStore from "@/app/store/useStore";

interface FilterBarProps {
  classname?: string;
}

const filterOptions = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 14 Days",
  "Last 30 Days",
  "30-60 Days ago",
  "> 60 Days ago",
];

export const FilterBar: React.FC<FilterBarProps> = ({ classname }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  // Set a debounce delay
  const debounceDelay = 500; // in ms

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(localSearchQuery); // Update the global store after delay
    }, debounceDelay);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [localSearchQuery, setSearchQuery, debounceDelay]);

  return (
    <div className={cn("flex justify-between h-[32x]", classname)}>
      <Select>
        <SelectTrigger className="w-[150px] border rounded-lg flex items-center shadow-custom">
          <Calendar className="mr-1 h-4 w-4" />
          <SelectValue placeholder="Last 7 Days" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="relative flex items-center w-[400px]">
        <Search className="absolute left-2 w-5 h-5 text-inputTextPlaceholder" />
        <Input
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          value={localSearchQuery}
          type="text"
          placeholder="Search"
          className="pl-8 border border-mainBorder shadow-custom"
        />
      </div>
    </div>
  );
};
