import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DeleteProductCard = () => {
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Delete Product</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
        <Button size="sm" variant="secondary" className="text-red-500">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default DeleteProductCard;
