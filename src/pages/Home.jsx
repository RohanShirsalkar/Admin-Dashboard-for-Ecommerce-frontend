import OverviewCard from "../components/dashboard/OverviewCard";
import RecentSalesBlock from "../components/dashboard/RecentSalesBlock";
import { useEffect, useState } from "react";
import useRouteGuard from "../hooks/useRouteGuard";
import { USDollarCurrency } from "@/lib/utils";
import { DollarSign, CreditCard, Users, Package, Package2 } from "lucide-react";
import { getQuickOverviewData } from "@/services/dashboard_service";
import OrdersChart from "@/components/dashboard/OrdersChart";

const Home = () => {
  const [quickOverviewData, setQuickOverviewData] = useState({});

  useEffect(() => {
    const makeHttpRequest = async () => {
      try {
        const { data } = await getQuickOverviewData();
        setQuickOverviewData(data);
      } catch (error) {
        console.log(error);
      }
    };
    makeHttpRequest();
  }, []);

  useRouteGuard();
  return (
    <section className="max-w-6xl mx-auto min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-4">
        <OverviewCard
          title={"Total Revenue"}
          main={USDollarCurrency.format(quickOverviewData?.totalRevenue)}
          type={"revenue"}
        >
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </OverviewCard>
        <OverviewCard
          title={"Total Sales"}
          main={quickOverviewData.totalSales}
          type={"sales"}
        >
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </OverviewCard>
        <OverviewCard
          title={"Customers"}
          main={quickOverviewData.customersCount}
          type={"customer"}
        >
          <Users className="h-4 w-4 text-muted-foreground" />
        </OverviewCard>
        <OverviewCard
          title={"Total Products"}
          main={quickOverviewData.activeProductsCount}
          type={"product"}
        >
          <Package2 className="h-4 w-4 text-muted-foreground" />
        </OverviewCard>
        <div className="md:col-span-2">
          <div className="w-full">
            <OrdersChart />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="w-full">
            <RecentSalesBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
