import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './edit_profile.css'

const EditProfil = () => {
    return (
      <div className='edit-profile-main-div'>
        <Container className="edit-profile-container">
          <Row className="edit-profile-container-row">
            <Col
              clas
              sm={12}
              lg={6}
              xl={6}
              className="edit-profile-container-column"
            >
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">First Name</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="Humphrey"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Last Name</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="Barikpe"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Middle Name</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="Lezorga"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Date of Birth</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="25:12:2002"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Country</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="Nigeria"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">State</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="Rivers"
                ></input>
              </div>
            </Col>

            <Col
              sm={12}
              lg={6}
              xl={6}
              className="edit-profile-container-column"
            >
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Language</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="English"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Phone Number</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="09031631629"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Email</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="barikpelezorn@gmail.com"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">Backup Email</label>
                <br></br>
                <input
                  className="edit-profile-input"
                  placeholder="barikpehumphrey@gmail.com"
                ></input>
              </div>
              <div className="edit-profile-input-div">
                <label className="edit-profile-label">About</label>
                <br></br>
                <textarea
                  className="edit-profile-input"
                  placeholder="First Name"
                ></textarea>
              </div>
                <div className='edit-profile-btn-div'>
                  <button className='edit-profile-save-btn'>Save Changes</button>
                  <button className='edit-profile-cancel-btn'>Cancel</button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default EditProfil;
