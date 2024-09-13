import React from "react";
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

const orderData = [
  {
    id: "Jku55uidv4",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 123 456 7890",
    status: "completed",
    date: "10th Jan, 2023",
    amount: 399,
    tax: 20,
    shippingCost: 15,
    shippingAddress: "Liam Johnson, 1234 Main St, Anytown, CA, 12345",
    paymentMethod: "Credit/Debit Card",
    paymentStatus: "Paid",
    paymentInformation: {
      cardNumber: "1234-9876-0000-0000",
      expiryDate: "01/23",
      cvv: "123",
      nameOnCard: "John Doe",
      cardType: "Visa",
    },
    items: [
      {
        id: "Jku55uidv4",
        title: "Apple iPhone XR (6th Gen)",
        quantity: 2,
        price: 78.6,
      },
    ],
  },
  {
    id: "Hjs78klop9",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 987 654 3210",
    status: "pending",
    date: "15th Feb, 2023",
    amount: 300,
    tax: 15,
    shippingCost: 10,
    shippingAddress: "123 Maple Ave, Springfield, IL, 62701",
    paymentMethod: "PayPal",
    paymentStatus: "Pending",
    paymentInformation: {
      cardNumber: "N/A",
      expiryDate: "N/A",
      cvv: "N/A",
      nameOnCard: "N/A",
      cardType: "PayPal",
    },
    items: [
      {
        id: "Hjs78klop9",
        title: "Samsung Galaxy S23",
        quantity: 1,
        price: 250,
      },
      {
        id: "Hjs78klop9-2",
        title: "Samsung Wireless Charger",
        quantity: 1,
        price: 40,
      },
    ],
  },
  {
    id: "Acd23bnm34",
    name: "Robert Brown",
    email: "robert@example.com",
    phone: "+1 321 654 0987",
    status: "shipped",
    date: "20th Mar, 2023",
    amount: 560,
    tax: 28,
    shippingCost: 20,
    shippingAddress: "456 Elm St, Smalltown, TX, 78945",
    paymentMethod: "Credit/Debit Card",
    paymentStatus: "Paid",
    paymentInformation: {
      cardNumber: "5678-1234-4321-0000",
      expiryDate: "02/24",
      cvv: "456",
      nameOnCard: "Robert Brown",
      cardType: "MasterCard",
    },
    items: [
      {
        id: "Acd23bnm34-1",
        title: "Sony WH-1000XM4 Headphones",
        quantity: 1,
        price: 300,
      },
      {
        id: "Acd23bnm34-2",
        title: "Nintendo Switch",
        quantity: 1,
        price: 160,
      },
    ],
  },
  {
    id: "Opq65trf78",
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 555 666 7777",
    status: "completed",
    date: "5th Apr, 2023",
    amount: 1050,
    tax: 52.5,
    shippingCost: 25,
    shippingAddress: "789 Pine St, Bigcity, NY, 10001",
    paymentMethod: "Credit/Debit Card",
    paymentStatus: "Paid",
    paymentInformation: {
      cardNumber: "9876-5432-2109-8765",
      expiryDate: "03/25",
      cvv: "789",
      nameOnCard: "Emily Davis",
      cardType: "American Express",
    },
    items: [
      {
        id: "Opq65trf78-1",
        title: "Apple MacBook Pro",
        quantity: 1,
        price: 950,
      },
      {
        id: "Opq65trf78-2",
        title: "Apple Magic Mouse",
        quantity: 1,
        price: 100,
      },
    ],
  },
  {
    id: "Lmn89qwe12",
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1 444 555 6666",
    status: "canceled",
    date: "25th May, 2023",
    amount: 199,
    tax: 9.95,
    shippingCost: 5,
    shippingAddress: "1010 Birch Ln, Newcity, FL, 33101",
    paymentMethod: "Credit/Debit Card",
    paymentStatus: "refunded",
    paymentInformation: {
      cardNumber: "0000-1111-2222-3333",
      expiryDate: "04/26",
      cvv: "321",
      nameOnCard: "Michael Johnson",
      cardType: "Discover",
    },
    items: [
      {
        id: "Lmn89qwe12-1",
        title: "Google Pixel 7",
        quantity: 1,
        price: 199,
      },
    ],
  },
];

const Orders = () => {
  useRouteGuard();
  const totalOrders = orderData.length;
  return (
    <section className="max-w-6xl mx-auto">
      <Card className="mt-6">
        <CardHeader className="px-7">
          <div className="flex justify-between items-center">
            <CardTitle>Orders</CardTitle>
            <div className="space-x-2">
              <FilterDropdown />
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
              {orderData?.map((order) => (
                // Table row and details sheet trigger component.
                <OrderDetailsSheet order={order} />
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
