import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormDropdown = ({ options, onChange, value }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id="category" aria-label="Select category">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FormDropdown;
