import React from "react";
import DashboardCards from "./DashboardCards";
import Campaigns from "./Campaigns";
import DashboardChart from "./DashboardCharts";

const Dashboard = () => {
  return (
    <section className="pt-20 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Dashboard summary cards */}
        <DashboardCards />

        {/* Active Campaigns */}
        <Campaigns />

        {/* Charts & Analytics */}
        <DashboardChart />
      </div>
    </section>
  );
};

export default Dashboard;
