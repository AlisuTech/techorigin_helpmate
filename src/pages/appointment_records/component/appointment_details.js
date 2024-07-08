import React from "react";
import "./appointment_details.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const AppointmentDetails = () => {
  return (
    <div className="appointment-details-bg">
      <p>Appoinment details</p>
      <div>
        <div className="appointment-top-divs">
          <div>
            <div className="appointment-details-img-div"></div>
            <div className="appointment-details-top-text">
              <p>Doctor Ben</p>
              <p>Relationship Expert</p>
            </div>
          </div>
        </div>

        <div className="appointment-details-new-appointment">
          <p className="appointment-details-new-appointment">
            <i class="fas fa-plus "></i> New Appointment
          </p>
          <p className="appointment-details-cancel-appointment">
            Cancel Appointment
          </p>
        </div>
      </div>

      <Accordion defaultActiveKey="0" className="accordion-div">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="appointment-detials-header">
            About Doctor Ben
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <p className="appointment-details-title">First Name</p>
              <p className="appointment-details-sibtitle">Benson</p>
            </div>
            <hr></hr>
            <div>
              <p className="appointment-details-title">Last Name</p>
              <p className="appointment-details-sibtitle">Jacob</p>
            </div>
            <hr></hr>
            <div>
              <p className="appointment-details-title">Qualification</p>
              <p className="appointment-details-sibtitle">PhD</p>
            </div>
            <hr></hr>
            <p>Rating</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Appointment Details</Accordion.Header>
          <Accordion.Body>
            <p>Date Create</p>
            <p>Sunday, July 7, 2024</p>
            <hr></hr>
            <p>Time Created</p>
            <p>15:00 GMT+1</p>
            <hr></hr>
            <p>Date Scheduled</p>
            <p>Monday, July 8, 2024</p>
            <hr></hr>
            <p>Time Scheduled</p>
            <p>19:00 GMT+1</p>
            <hr></hr>
            <p>Duration</p>
            <p>30 : minutes</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Previous Appointment With Dr Ben</Accordion.Header>
          <Accordion.Body>
            <div>
              <p>Saturday, July 6, 2024</p> <p>12:30 GMT+1</p>
            </div>
            <hr></hr>
            <div>
              <p>Friday, July 5, 2024</p> <p>12:30 GMT+1</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AppointmentDetails;
