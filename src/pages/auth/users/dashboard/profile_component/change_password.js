import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './change_password.css'

const ChangePassword = () => {
    return (
      <div>
        <Container className="edit-password-container">
          <div className="edit-password-div">
            <Row className="edit-password-row">
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="edit-password-column"
              >
                <label className="edit-password-label">Current password</label>
                <br></br>
                <input
                  className="edit-password-input"
                  placeholder="enter current password"
                ></input>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="edit-password-column"
              >
                <label className="edit-password-label">New password</label>
                <br></br>
                <input
                  className="edit-password-input"
                  placeholder="enter a new password"
                ></input>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="edit-password-column"
              >
                <label className="edit-password-label">Confirm password</label>
                <br></br>
                <input
                  className="edit-password-input"
                  placeholder="confirm new password"
                ></input>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className="edist-password-requirement-column"
              >
                <div className="edit-password-requirement-column">
                  <p className="edit-password-text">Password Requirements:</p>
                  <ul className="edit-pasword-ul">
                    <li className="edit-password-li">
                      Mininum 8 character long - the more, the better
                    </li>
                    <li className="edit-password-li">
                      At least one lower case
                    </li>
                    <li className="edit-password-li">
                      At least one number symbol, or special characters
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className="edit-password-btn-div">
              <button className="edit-password-save-btn">Save Changes</button>
              <button className="edit-password-cancel-btn">Cancel</button>
            </div>
          </div>
        </Container>
      </div>
    );
}

export default ChangePassword;
