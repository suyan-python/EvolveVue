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
    { year: "2013", Team: 2 },
    { year: "2014", Team: 5 },
    { year: "2015", Team: 10 },
    { year: "2016", Team: 13 },
    { year: "2017", Team: 15 },
    { year: "2018", Team: 20 },
    { year: "2019", Team: 25 },
    { year: "2020", Team: 35 },
    { year: "2021", Team: 35 },
    { year: "2022", Team: 35 },
    { year: "2023", Team: 35 },
    { year: "2024", Team: 45 },
    { year: "2025", Team: 50 },
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
