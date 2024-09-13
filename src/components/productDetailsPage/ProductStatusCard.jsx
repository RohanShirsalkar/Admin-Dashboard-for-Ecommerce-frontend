import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import FormDropdown from "../common/FormDropdown";
import { Controller } from "react-hook-form";

const ProductStatusCard = ({ control, errors }) => {
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormDropdown
                  onChange={onChange}
                  value={value}
                  options={[
                    { label: "Draft", value: "DRAFT" },
                    { label: "Active", value: "ACTIVE" },
                    { label: "Archived", value: "ARCHIVE" },
                  ]}
                />
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductStatusCard;
