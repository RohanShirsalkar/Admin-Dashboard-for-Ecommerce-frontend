import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// This contains Sheet and Sheet Trigger as a Table Row.
const OrderDetailsSheet = ({ order }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TableRow>
          <TableCell>
            <div className="font-medium">{order?.name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {order?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <ul>
              {order?.items.map((item) => (
                <li className="text-slate-500">
                  {item.title} x {item.quantity}
                </li>
              ))}
            </ul>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {order?.status === "canceled" && (
              <Badge className="text-xs" variant="destructive">
                {order.status.toLocaleUpperCase()}
              </Badge>
            )}
            {order?.status !== "canceled" && (
              <Badge className="text-xs" variant="outline">
                {order.status.toLocaleUpperCase()}
              </Badge>
            )}
          </TableCell>
          <TableCell className="hidden md:table-cell">{order?.date}</TableCell>
          <TableCell className="text-right">${order?.amount}</TableCell>
        </TableRow>
      </SheetTrigger>
      <SheetContent className="p-0 w-full md:w-auto">
        <Card className="overflow-hidden">
          <ScrollArea className="h-screen">
            <CardHeader className="flex flex-row items-start bg-muted/50 pt-10">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Order {order.id}
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: {order.date}</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {order.status !== "canceled" && (
                  <Badge className="text-sm" variant="outline">
                    {order.status.toLocaleUpperCase()}
                  </Badge>
                )}
                {order.status === "canceled" && (
                  <Badge className="text-sm" variant="destructive">
                    {order.status.toLocaleUpperCase()}
                  </Badge>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <MoreVertical className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
                <div className="font-semibold">Order Details</div>
                <ul className="grid gap-3">
                  {order.items.map((item) => (
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {item.title} x <span>{item.quantity}</span>
                      </span>
                      <span>$ {item.price}.00</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-2" />
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$ {order.amount}.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$ {order.shippingCost}.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$ {order.tax}.00</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>
                      $ {order.amount + order.shippingCost + order.tax}.00
                    </span>
                  </li>
                </ul>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <div className="font-semibold">Shipping Information</div>
                  <address className="grid gap-0.5 not-italic text-muted-foreground">
                    {order.shippingAddress.split(",").map((str) => (
                      <span>{str}</span>
                    ))}
                    {/* <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span> */}
                  </address>
                </div>
                <div className="grid auto-rows-max gap-3">
                  <div className="font-semibold">Billing Information</div>
                  <div className="text-muted-foreground">
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Customer Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Customer</dt>
                    <dd>{order.name}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a href="mailto:">{order.email}</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a href="tel:">{order.phone}</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Payment Information</div>
                <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1 text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      {order.paymentInformation.cardType}
                    </dt>
                    <dd>{order.paymentInformation.cardNumber}</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              {/* <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronRight className="h-3.5 w-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination> */}
            </CardFooter>
          </ScrollArea>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default OrderDetailsSheet;
