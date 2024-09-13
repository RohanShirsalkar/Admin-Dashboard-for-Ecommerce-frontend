import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import SettingsFormContext from "../../context/SettingsFormContext";
import { Controller } from "react-hook-form";

const paymentMethods = [
  { name: "credit_card", label: "Credit Card" },
  { name: "debit_card", label: "Debit card" },
  { name: "razorpay", label: "Razorpay" },
  { name: "pay_on_delivery", label: "Pay On Delivery" },
];

const PaymentSettings = () => {
  const { control } = useContext(SettingsFormContext);

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Payment</CardTitle>
        <CardDescription>Select Payment Methods.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {paymentMethods.map((method) => {
            return (
              <Controller
                key={method.name}
                name={method.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div className="flex items-center justify-between">
                    <Label htmlFor={method.name}>{method.label}</Label>
                    <Switch
                      id={method.name}
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  </div>
                )}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSettings;
