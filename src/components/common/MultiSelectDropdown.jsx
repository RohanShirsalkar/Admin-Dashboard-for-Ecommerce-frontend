import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const MultiSelectDropdown = ({ onChange, value, options }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    Completed: true,
    Cancled: false,
    Inprogress: false,
  });

  const togglePosition = (position) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex justify-between items-center">
          <div className="font-normal">Select Tags</div>
          <ChevronDown width="16px" color="gray" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuCheckboxItem
          checked={selectedOptions.top}
          onCheckedChange={() => togglePosition("top")}
        >
          Completed
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.bottom}
          onCheckedChange={() => togglePosition("bottom")}
        >
          Cancled
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedOptions.right}
          onCheckedChange={() => togglePosition("right")}
        >
          Inprogress
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelectDropdown;
