import React from 'react';
import "./appointment_records.css"
import { Col, Container, Row } from "react-bootstrap";
import AppointmetHistories from './component/appointment_history';
import AppointmentChat from './component/appointment_chat';
import AppointmentDetails from './component/appointment_details';

const AppointmentRecords = () => {
    return (
      <div>
        <Container fluid className="appointment-container-fluid">
          <Row className="appointment-row">
            <Col sm={12} md={5} lg={3} xl={4} className="appointment-history">
              <p>Appoinment history</p>
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
              <AppointmetHistories />
            </Col>
            <Col sm={12} md={6} lg={5} xl={4} className="appointment-chat">
              <AppointmentChat></AppointmentChat>
            </Col>
            <Col sm={12} md={5} lg={4} xl={4} className="appointment-details">
              <AppointmentDetails></AppointmentDetails>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default AppointmentRecords;
