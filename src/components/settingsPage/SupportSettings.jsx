import { useContext } from "react";
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
import SettingsFormContext from "../../context/SettingsFormContext";
import classNames from "classnames";

const SupportSettings = () => {
  const { register, errors } = useContext(SettingsFormContext);

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Support</CardTitle>
        <CardDescription>Edit your support settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full  items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter support email address"
            className={classNames({
              "border-red-500": errors.email,
            })}
            {...register("email", { required: true })}
          />
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="phone"
            id="phone"
            placeholder="Enter support phone or contact number"
            className={classNames({
              "border-red-500": errors.phone,
            })}
            {...register("phone", { required: true })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportSettings;
