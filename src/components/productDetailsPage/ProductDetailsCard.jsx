import React from "react";
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

const ProductDetailsCard = ({ register, errors }) => {
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Price</Label>
            <Input
              id="name"
              type="number"
              className="w-full"
              {...register("price", { required: true })}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="min-h-32"
              {...register("description", { required: true })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
