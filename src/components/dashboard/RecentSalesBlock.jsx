import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentSales } from "@/services/dashboard_service";
import { USDollarCurrency } from "@/lib/utils";

const RecentSalesBlock = () => {
  const [recentSales, setRecentSales] = useState([]);

  useEffect(() => {
    const makeHttpRequest = async () => {
      try {
        const { sales } = await getRecentSales();
        setRecentSales(sales);
      } catch (error) {
        console.error(`Error in fetching sales : ${error} `);
      }
    };
    makeHttpRequest();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentSales?.map((sale) => (
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>
                {sale.user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {sale.user.name}
              </p>
              <p className="text-sm text-muted-foreground">{sale.user.email}</p>
            </div>
            <div className="ml-auto font-medium">
              +{USDollarCurrency.format(sale.totalPrice)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSalesBlock;
