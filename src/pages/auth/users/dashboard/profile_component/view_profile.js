import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './view_profile.css'

const ViewProfile = () => {
  return (
    <div>
      <Container className="view-profile-container-div">
        <Row className="view-profile-row">
          <Col sm={12} lg={12} xl={12} className="view-profile-top-div"></Col>
          <Col
            className="view-profile-div-1"
            style={{ backgroundColor: "white" }}
            sm={12}
            lg={5}
            xl={4}
          >
            <div>
              <p className="view-profile-about-text">About</p>
              <div className="view-profile-div">
                <i class="fa-solid fa-user profile-icon"></i>
                <label className="profile-label">User Name:</label>
                <p className="profile-details">Humphrey Barikpe Lezorga</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-calendar-days profile-icon"></i>
                <label className="profile-label">Date of Birth:</label>
                <p className="profile-details">25/12/2002</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-earth-africa icon profile-icon"></i>
                <label className="profile-label">Country:</label>
                <p className="profile-details">Nigeria</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-flag-usa profile-icon"></i>
                <label className="profile-label">State :</label>
                <p className="profile-details">Rivers State</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-language profile-icon"></i>
                <label className="profile-label">Language : </label>
                <p className="profile-details">English</p>
              </div>

              <div className="view-profile-div">
                <i class="fa-solid fa-handshake profile-icon"></i>
                <label className="profile-label">Joined :</label>
                <p className="profile-details">12:10:1990</p>
              </div>
              <p className="view-profile-about-text">Contacts</p>
              <div className="view-profile-div">
                <i class="fa-solid fa-phone profile-icon"></i>
                <label className="profile-label">Phone Number:</label>
                <p className="profile-details">9090200020</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-at profile-icon"></i>
                <label className="profile-label">Email Adress :</label>
                <p className="profile-details">barikpelezorn@gmail.com</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-compass profile-icon"></i>
                <label className="profile-label">Address:</label>
                <p className="profile-details">Atali</p>
              </div>
            </div>

            <div>
              <div className="view-profile-div">
                <i class="fa-solid fa-certificate profile-icon"></i>
                <label className="profile-label">Verify Status : </label>
                <p className="profile-details">Processing</p>
              </div>
              <p className="view-profile-about-text">Login Activities</p>
              <div className="view-profile-div">
                <i class="fa-solid fa-arrow-right-to-bracket profile-icon"></i>
                <label className="profile-label">Recent Login:</label>
                <p className="profile-details">12:30</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-arrow-right-from-bracket profile-icon"></i>
                <label className="profile-label">Recent Logout:</label>
                <p className="profile-details">Yesterday</p>
              </div>
              <div className="view-profile-div">
                <i class="fa-solid fa-notes-medical profile-icon"></i>
                <label className="profile-label">Appointment Record:</label>
                <p className="profile-details value">10</p>
              </div>
            </div>
          </Col>

          <Col className="edit-profile-div-2" sm={12} md={12} lg={7} xl={7}>
            <div className="notification-border">
              <p className="view-profile-notification">Notifications</p>
              <hr className="profile-line"></hr>
              <div className="notification-list">
                <div>
                  <p className="user-notification-header">Reminder</p>
                  <p className="user-notification-body">
                    You have an appointment with the physchologiest Professor
                    Barikpe Humphry Lezorga who has been so and so and so and so
                    today at 10:pm and you will
                  </p>
                </div>
                <div>
                  <p className="user-notification-date">22:06:2024</p>
                  <br></br>
                  <br></br>
                  <p className="user-notification-time">14:01</p>
                </div>
              </div>

              <div className="notification-list">
                <div>
                  <p className="user-notification-header">Reminder</p>
                  <p className="user-notification-body">
                    You have an appointment with the physchologiest Professor
                    Barikpe Humphry Lezorga who has been so and so and so and so
                    today at 10:pm and you will
                  </p>
                </div>
                <div>
                  <p className="user-notification-date">22:06:2024</p>
                  <br></br>
                  <br></br>
                  <p className="user-notification-time">14:01</p>
                </div>
              </div>

              <div className="notification-list">
                <div>
                  <p className="user-notification-header">Reminder</p>
                  <p className="user-notification-body">
                    You have an appointment with the physchologiest Professor
                    Barikpe Humphry Lezorga who has been so and so and so and so
                    today at 10:pm and you will
                  </p>
                </div>
                <div>
                  <p className="user-notification-date">22:06:2024</p>
                  <br></br>
                  <br></br>
                  <p className="user-notification-time">14:01</p>
                </div>
              </div>

              <div className="notification-list">
                <div className="display-div-flex">
                  <p className="user-notification-header">Reminder</p>
                  <p className="user-notification-body">
                    You have an appointment with the physchologiest Professor
                    Barikpe Humphry Lezorga who has been so and so and so and so
                    today at 10:pm and you will
                  </p>
                </div>
                <div>
                  <p className="user-notification-date">22:06:2024</p>
                  <br></br>
                  <br></br>
                  <p className="user-notification-time">14:01</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={12} xl={12} className="view-profile-top-div"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewProfile;
