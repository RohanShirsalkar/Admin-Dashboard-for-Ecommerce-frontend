import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const FilterDropdown = ({}) => {
  const [positions, setPositions] = useState({
    Completed: true,
    Cancled: false,
    Inprogress: false,
  });

  const togglePosition = (position) => {
    setPositions((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8  gap-1 text-sm">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Order Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={positions.top}
          onCheckedChange={() => togglePosition("top")}
        >
          Completed
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={positions.bottom}
          onCheckedChange={() => togglePosition("bottom")}
        >
          Cancled
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={positions.right}
          onCheckedChange={() => togglePosition("right")}
        >
          Inprogress
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
