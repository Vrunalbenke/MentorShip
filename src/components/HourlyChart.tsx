"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", mobile: 80 },
  { month: "February", mobile: 200 },
  { month: "March", mobile: 120 },
  { month: "April", mobile: 190 },
  { month: "May", mobile: 130 },
  { month: "June", mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#A46BEC",
  },
  mobile: {
    label: "Mobile",
    color: "#A46BEC",
  },
} satisfies ChartConfig;

export function HourlyChart() {
  return (
    <ChartContainer config={chartConfig} className="min- h-[150px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
      {/* <div className="w-full h-5 bg-[#A46BEC]" /> */}
    </ChartContainer>
  );
}
