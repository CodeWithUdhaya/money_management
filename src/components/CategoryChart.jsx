import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Java", value: 40 },
  { name: "Spring Boot", value: 30 },
  { name: "React", value: 20 },
  { name: "Others", value: 10 },
];
    
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CategoryChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 style={{ textAlign: "center" }}>Course Distribution</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
