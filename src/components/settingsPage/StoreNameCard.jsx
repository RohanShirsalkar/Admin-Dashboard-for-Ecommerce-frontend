import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SettingsFormContext from "../../context/SettingsFormContext";
import classNames from "classnames";

const StoreNameCard = () => {
  const { register, errors } = useContext(SettingsFormContext);

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>General</CardTitle>
        <CardDescription>
          Edit the general information of your store.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="storename">Store Name</Label>
          <Input
            type="storeName"
            id="storename"
            placeholder="Name"
            className={classNames({
              "border border-red-500": errors.storeName,
            })}
            {...register("storeName", { required: true })}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter your store description here..."
            className={classNames("min-h-32", {
              "border border-red-500": errors.description,
            })}
            {...register("description", { required: true })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreNameCard;
