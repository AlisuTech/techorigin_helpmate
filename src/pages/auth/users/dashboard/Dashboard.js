import React from 'react'
import Header from '../dashboard_components/header';
// import Sidebar from '../dashboard_components/sidebar';
import './Dashboard.css'
import Dashboardbutton from '../dashboard_components/dashboardbutton';
import UserProfile from '../dashboard_components/user_profile';
// import MainContent from '../dashboard_components/maincontent';

const Dashboard = () => {
  return (
    <div className="dashboard-app">
      <Header></Header>
      <Dashboardbutton></Dashboardbutton>
      <UserProfile></UserProfile>
      <div className="long-div"></div>
    </div>
  );
}

export default Dashboard

/**
 * <div class="grid grid-rows-3 grid-flow-col gap-4 border-green">
        <div class="row-span-3 border-red">
            <ServiceProviderList/>
        </div>
        <div class="col-span-2 border-yellow">
            <div>hello</div>
        </div>
        <div class="row-span-1 col-span-2 border-blue">03</div>
      </div>
 * 
 */