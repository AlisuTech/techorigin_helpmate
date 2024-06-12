import React from 'react'
import ServiceProviderList from '../../../components/cards/serviceProvider/ServiceProviderList';
import Booking from '../../../components/cards/BookAppointment/Booking';

const Dashboard = () => {
  return (
    <>
      <div class="grid grid-rows-3 grid-flow-col gap-4 border-green">
        <div class="row-span-3 border-red">
            <ServiceProviderList/>
        </div>
        <div class="col-span-2 border-yellow">
            <Booking/>
        </div>
        <div class="row-span-1 col-span-2 border-blue">03</div>
      </div>
    </>
  );
}

export default Dashboard