
import React from "react";
import SellLineChart from "../SellLineChart/SellLineChart";
import InvestmentAreaChart from "../InvestmentAreaChart/InvestmentAreChart";
import InvestmentPieChart from "../InvestmentPieChart/InvestmentPicChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 mx-7 gap-4 mt-12 bg-blue-50">
      <div>
      <h1 className="font-bold text-7xl mb-11 px-11 text-5xl"> Dashboard🗃️📊</h1>
        <h1 className="text-2xl font-bold text-center">Month Wise Sell</h1>
        <SellLineChart></SellLineChart>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Investment VS Revenue🟩
        </h1>
        <InvestmentAreaChart></InvestmentAreaChart>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">
          Investment VS Revenue🟩
        </h1>
        <InvestmentPieChart></InvestmentPieChart>
      </div>
    </div>
  );
};

export default Dashboard;
