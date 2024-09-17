import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const chartData = [
  { day: "Sunday", desktop: 18 },
  { day: "Monday", desktop: 30 },
  { day: "Tuesday", desktop: 23 },
  { day: "Wednesday", desktop: 13 },
  { day: "Thursday", desktop: 20 },
  { day: "Friday", desktop: 0 },
  { day: "Saturday", desktop: 15 },
];

const OrdersChart = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white border shadow-sm rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Orders</h2>
      <p className="text-sm text-gray-600 mb-6">This Week</p>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-xs"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "0.375rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* <div className="mt-6 text-sm">
        <p className="font-medium flex items-center mb-1">
          Trending up by 5.2% this month
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="text-gray-600">
          Showing total visitors for the last 6 months
        </p>
      </div> */}
    </div>
  );
};

export default OrdersChart;
