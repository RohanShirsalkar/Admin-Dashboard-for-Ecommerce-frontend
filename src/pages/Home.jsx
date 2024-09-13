import OverviewCard from "../components/dashboard/OverviewCard";
import RecentSalesBlock from "../components/dashboard/RecentSalesBlock";
import React from "react";
import useRouteGuard from "../hooks/useRouteGuard";

const Home = () => {
  useRouteGuard();
  return (
    <section className="w-full min-h-screen">
      {/* <h1 className="text-center"> Welcome to our website </h1> */}
      <div className="mt-6 flex md:gap-0 gap-4 items-center md:justify-between justify-center flex-wrap">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
      <div className="mt-6 max-w-xl">
        <RecentSalesBlock />
      </div>
    </section>
  );
};

export default Home;
