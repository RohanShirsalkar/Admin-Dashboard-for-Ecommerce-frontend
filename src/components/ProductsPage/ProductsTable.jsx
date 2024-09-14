import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import FilterDropdown from "../common/FilterDropdown";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../assets/placeholder.svg";
import {
  createNewProduct,
  deleteProductWithId,
  getAllProducts,
} from "@/services/product_service";
import dateFormat, { masks } from "dateformat";

const ProductsTable = () => {
  const [productsData, setProductsData] = useState([]);
  const [take, setTake] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(50);
  const [fdata, setFdata] = useState(0);
  const totalProducts = productsData.length;
  const navigate = useNavigate();

  useEffect(() => {
    const makeGetRequest = async () => {
      try {
        const products = await getAllProducts();
        console.log(dateFormat(new Date(), "paddedShortDate"));
        setProductsData(products.products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    makeGetRequest();
  }, []);

  const handleAddProduct = async () => {
    try {
      const { product } = await createNewProduct();
      navigate(`/add-product/${product.id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      try {
        const response = await deleteProductWithId(id);
        const { products } = await getAllProducts();
        setProductsData(products);
        alert(`Product deleted successfully: ${response.id}`);
      } catch (error) {
        console.log(error);
        alert("Error deleting product");
      }
    }
  };

  const handlePrevious = (e) => {
    setSkip(skip - take);
  };

  const handleNext = (e) => {
    setSkip(skip + take);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Products</CardTitle>
          <div className="space-x-2">
            <FilterDropdown
              options={[
                { label: "Draft", value: "DRAFT" },
                { label: "Active", value: "ACTIVE" },
                { label: "Archived", value: "ARCHIVE" },
              ]}
            />
            <Button
              onClick={() => handleAddProduct()}
              size="sm"
              className="h-8 gap-1"
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </div>
        </div>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Sales</TableHead>
              <TableHead className="hidden md:table-cell">Stock</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsData?.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.thumbnailUrl || placeholderImg}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>
                  {product.status === "ACTIVE" && (
                    <Badge variant="outline">Active</Badge>
                  )}
                  {product.status === "DRAFT" && (
                    <Badge variant="secondary">Draft</Badge>
                  )}
                  {product.status === "ARCHIVE" && (
                    <Badge variant="">Archive</Badge>
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  ${product.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.totalSales}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.stock}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {dateFormat(product.createdAt, "paddedShortDate")}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(product.id)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {/*  */}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>{totalProducts}</strong>{" "}
          products. <strong>{skip}</strong>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button
                name="prev"
                size="icon"
                variant="outline"
                className="h-6 w-6"
                onClick={(e) => handlePrevious(e)}
              >
                <ChevronLeft className="h-3.5 w-3.5 " />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                name="next"
                size="icon"
                variant="outline"
                className="h-6 w-6"
                onClick={(e) => handleNext(e)}
              >
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default ProductsTable;
