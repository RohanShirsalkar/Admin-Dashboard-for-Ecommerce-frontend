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

const FilterDropdown = ({ selectedStatus, setSelectedStatus }) => {
  const [t, setT] = useState("");

  // const togglePosition = (status) => {
  //   setSelectedStatus((prev) => ({
  //     ...prev,
  //     [status]: !prev[status],
  //   }));
  // };

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
          checked={selectedStatus === undefined}
          onCheckedChange={() => setSelectedStatus(undefined)}
        >
          All
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "COMPLETED"}
          onCheckedChange={() => setSelectedStatus("COMPLETED")}
        >
          Completed
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "CANCLED"}
          onCheckedChange={() => setSelectedStatus("CANCLED")}
        >
          Cancled
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "INPROGRESS"}
          onCheckedChange={() => setSelectedStatus("INPROGRESS")}
        >
          Inprogress
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
