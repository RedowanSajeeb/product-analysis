import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../Utilities/ChartDataLoad';

const InvestmentAreaChart = () => {
    const [data,setData] = useChartData([]);
    return (
       <AreaChart   
       width={600}
       height={400}
       data={data}
       margin={{
         top: 10,
         right: 30,
         left: 0,
         bottom: 0,
       }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='month'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8"></Area>
        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
       </AreaChart>
    );
};

export default InvestmentAreaChart;