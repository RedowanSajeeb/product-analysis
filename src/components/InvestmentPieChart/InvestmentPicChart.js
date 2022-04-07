import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChartData from '../../Utilities/ChartDataLoad';

const InvestmentPicChart = () => {
    const [data,setData] = useChartData([]);
    return (
        <PieChart  width={600} height={400}>
            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
    );
};

export default InvestmentPicChart;