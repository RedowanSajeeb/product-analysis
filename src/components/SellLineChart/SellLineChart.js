import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChartData from "../../Utilities/ChartDataLoad";

const SellLineChart = () => {
  const [data, setData] = useChartData([])
  return (
    <LineChart 
    width={600} 
    height={430} 
    data={data}
    >
      <Line type="monotone" dataKey="sell"></Line>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
      <Legend></Legend>
    </LineChart>
  );
};

export default SellLineChart;
