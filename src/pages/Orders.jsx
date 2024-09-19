import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilterDropdown from "../components/common/FilterDropdown";
import OrderDetailsSheet from "../components/orders/OrderDetailsSheet";
import useRouteGuard from "@/hooks/useRouteGuard";
import { getUserOrders } from "@/services/order_service";

const Orders = () => {
  useRouteGuard();
  const [orderArr, setOrderArr] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(undefined);

  useEffect(() => {
    console.log(selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    const makeHttpRequest = async () => {
      try {
        const { orders } = await getUserOrders(
          "cb141659-1615-4c52-9d2a-015d0ab2c658",
          selectedStatus
        );
        console.log(orders);
        setOrderArr(orders);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    makeHttpRequest();
  }, [selectedStatus]);

  const totalOrders = orderArr?.length;
  return (
    <section className="max-w-6xl mx-auto">
      <Card className="mt-6">
        <CardHeader className="px-7">
          <div className="flex justify-between items-center">
            <CardTitle>Orders</CardTitle>
            <div className="space-x-2">
              <FilterDropdown
                setSelectedStatus={setSelectedStatus}
                selectedStatus={selectedStatus}
              />
            </div>
          </div>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Items</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderArr?.map((order) => (
                // Table row and details sheet trigger component.
                <OrderDetailsSheet order={order} key={order.id} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>{totalOrders}</strong>{" "}
            products
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Orders;
