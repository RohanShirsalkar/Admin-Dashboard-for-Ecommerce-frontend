import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SettingsFormContext from "@/context/SettingsFormContext";
import classNames from "classnames";

const LocationSettings = () => {
  const { register, errors } = useContext(SettingsFormContext);

  const locationSettings = [
    { name: "city", label: "City", placeholder: "Enter your city name" },
    { name: "state", label: "State", placeholder: " Enter state or region" },
    { name: "street", label: "Street", placeholder: "Enter your street" },
    { name: "pinCode", label: "Pincode", placeholder: "Enter your post code" },
  ];
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Loacation</CardTitle>
        <CardDescription>
          Used to identify your location in the world.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 w-full items-center">
          {locationSettings.map((setting, index) => (
            <div key={index} className="space-y-1">
              <Label>{setting.label}</Label>
              <Input
                type="text"
                placeholder={setting.placeholder}
                className={classNames({
                  "border-red-500": errors[setting.name],
                })}
                {...register(setting.name, { required: true })}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationSettings;
