import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const Filter = () => {
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
        <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
          {/* Filter */}
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
        {/* <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          <DropdownMenuCheckboxItem>Check 1</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Check 2</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Check 3</DropdownMenuCheckboxItem>
        </DropdownMenuRadioGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
