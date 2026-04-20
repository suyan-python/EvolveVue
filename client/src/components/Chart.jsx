import * as React from "react";
import
{
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CustomerGrowthChart()
{
  const data = [
    { year: "2025", Team: 12 },
    { year: "2026", Team: 50 },
  ];

  return (
    <div className="w-full h-72 sm:h-96 md:h-80 lg:h-96 xl:h-[400px] ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#dcdcdc" />
          <XAxis
            dataKey="year"
            stroke="#ffff"
            tick={{ fontSize: 12, fontFamily: "Arial, sans-serif" }}
            axisLine={{ stroke: "#ffff" }}
          />
          <YAxis
            stroke="#ffff"
            tick={{ fontSize: 12, fontFamily: "Arial, sans-serif" }}
            axisLine={{ stroke: "#ffff" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderColor: "#ffff",
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
            }}
            labelStyle={{
              fontWeight: "bold",
              color: "#ffff",
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              color: "#ffff",
            }}
          />
          <Line
            type="monotone"
            dataKey="Team"
            stroke="#ffff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
