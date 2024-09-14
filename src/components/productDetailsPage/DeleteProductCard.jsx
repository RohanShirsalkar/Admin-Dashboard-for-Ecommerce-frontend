import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteProductWithId } from "@/services/product_service";
import { useNavigate } from "react-router-dom";

const DeleteProductCard = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      try {
        const response = await deleteProductWithId(id);
        alert(`Product deleted successfully: ${response.id} `);
        navigate("/all-products");
      } catch (error) {
        console.log(error);
        alert("Error deleting product");
      }
    }
  };

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
        <Button
          onClick={handleDelete}
          size="sm"
          variant="secondary"
          className="text-red-500"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default DeleteProductCard;
