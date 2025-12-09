import React from 'react'
import Dashboard from "../components/donordashboard/Dashboard";
import DashboardCards from '../components/donordashboard/DashboardCards';
import DashboardCharts from '../components/donordashboard/DashboardCharts';
import Campaigns from '../components/donordashboard/Campaigns';
const donorDashboard = () => {
  return (
    <>
    <Dashboard/>
    <DashboardCards/>
    <DashboardCharts/>
    <Campaigns/>
   
    </>
  )
}

export default donorDashboard
