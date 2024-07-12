import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./userprofile.css"

const UsersProfile = () => {
  return (
    <div className="edit-profile-main-div">
      {/* <div className="user-dashboard-top-div">
        {" "}
        <UserDashboardNavbar></UserDashboardNavbar>
      </div> */}
      <Container className="user-dashboard-container">
        <Row className="user-dashboard-row">
          <Col className="user-dashboard-column" sm={12} md={8} lg={7} xl={7}>
            <p className="edit-profile-div-head-text">Profile Details</p>
            <div className="user-dashboard-profile">
              <div className="edit-profile-image-div">
                <div className="user-dashboard-img-column-div">
                  <p>BH</p>
                  <div className="edit-photo">
                    <i class="fa-solid fa-pen edit-profile-icon-img"></i>
                  </div>
                </div>
              </div>
              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Full Name</p>
                <p className="edit-profile-text">Barikpe Humphrey Lezorga</p>
              </div>
              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Mobile Number</p>
                <p className="edit-profile-text">090316316429</p>
              </div>
              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Gender</p>
                <p className="edit-profile-text">Male</p>
              </div>
              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Nationality</p>
                <p className="edit-profile-text">Nigeria</p>
              </div>

              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Languate </p>
                <div className="edit-profile-input-div">
                  <input
                    className="edit-profile-input"
                    value={"English"}
                  ></input>
                  <i class="fa-solid fa-pen edit-profile-icon"></i>
                </div>
              </div>

              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Date of Birth</p>
                <p className="edit-profile-text">25:12:****</p>
              </div>
              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Email</p>
                <p className="edit-profile-text">barikpelezorn@gmail.com</p>
              </div>

              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Address</p>
                <div className="edit-profile-input-div">
                  <input
                    className="edit-profile-input"
                    value={"21 Atali"}
                  ></input>
                  <i class="fa-solid fa-pen edit-profile-icon"></i>
                </div>
              </div>

              <div className="edit-profile-div">
                <p className="edit-profile-text-title">Country</p>
                <div className="edit-profile-input-div">
                  <input
                    className="edit-profile-input"
                    value={"Nigeria"}
                  ></input>
                  <i class="fa-solid fa-pen edit-profile-icon"></i>
                </div>
              </div>

              <div className="edit-profile-div">
                <p className="edit-profile-text-title">State Of residence</p>
                <div className="edit-profile-input-div">
                  <input
                    className="edit-profile-input"
                    value={"Rivers"}
                  ></input>
                  <i class="fa-solid fa-pen edit-profile-icon"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col className="user-dashboard-column" sm={12} md={8} lg={7} xl={7}>
            <p className="edit-profile-div-head-text">Change Password</p>
            <div className="user-dashboard-change-password ">
              <div className="edit-password-dive">
                <p className="edit-profile-text-title">Current Password</p>
                <input className="change-user-password-"></input>
              </div>
            </div>
            <div className="user-dashboard-change-password ">
              <div className="edit-password-dive">
                <p className="edit-profile-text-title">New Password</p>
                <input className="change-user-password-"></input>
              </div>
            </div>
            <div className="user-dashboard-change-password ">
              <div className="edit-password-dive">
                <p className="edit-profile-text-title">Confirm Password</p>
                <input className="change-user-password-"></input>
              </div>
            </div>

            <div className="edit-profile-bottom-div">
              <button className="edit-profile-save">Save Changes</button>
              <button className="edit-profile-cancel">Cancel </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UsersProfile;
