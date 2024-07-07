import React from "react";
import "./appointment_history.css"

const AppointmetHistories = () => {
  return (
    <div>
      <div className="appointment-history-card-background">
        <div className="appointment-history-card">
          <div className="appointment-history-div">
            <div className="appointment-history-circle">B.J</div>
          </div>
          <div className="appointment-history-card-div">
            <p className="appointment-history-docor">Doctor Ben</p>
            <p>Relationship Expert</p>
            <p>Sunday, July 7, 2024 &nbsp; 15:00 GMT+1</p>
          </div>
        </div>
        {/* <div className="appointment-top-div">
          <p className="appointment-date">
            friday, 05, 2024 &nbsp;&nbsp;&nbsp; 02:40
          </p>

          <p className="appointment-state">Completed</p>
        </div> */}
      </div>
    </div>
  );
};

export default AppointmetHistories;
