import React, { useState } from 'react'
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, emailChanged] = useState('')
  const [password, passwordChanged] = useState('')
  const [error, setError] = useState('');

  return (
    <div>
      <Container fluid className="login-page-container-fluid">
        <Container className="login-container">
          <Row className="login-page-row">
            <Col sm={12} md={5} lg={6} xl={6} className="login-page-col-1">
              <p className="login-welcome-back">Welcome Back</p>
              
            </Col>
            <Col
              xs={12}
              sm={12}
              md={7}
              lg={6}
              xl={6}
              className="login-page-col-2"
            >
              <div className="login-col-2-center-div">
                <h1 className="login-txt">Login</h1>

                <div className="login-input-div">
                  <label className="login-email-label">Email</label>
                  <br />
                  <input
                    className="login-input"
                    type="email"
                    placeholder="Enter your email"
                    // value={email}
                    // onChange={(e) => emailChanged(e.target.value)}
                  ></input>
                </div>
                <br></br>
                <div className="login-input-div">
                  <label className="login-email-label">Password</label>
                  <br />
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Enter your password"
                    // value={password}
                    // onChange={(e) => passwordChanged(e.target.value)}
                  ></input>
                </div> 
                <div className="login-forget-pword">
                  <div className="c-box-div">
                    <input
                      type="checkBox"
                      id="cBox"
                      className="login-check-box"
                    ></input>
                    <label className='c-box' for="cBox">Remember Me</label>
                  </div>
                  <p className="forgot">Forgot Password?</p>
                </div>
                <button className="login-button">Log in</button>
                <br></br>
                <div className="login-question-div">
                  <p className="login-question-text">
                    Dont have an account?{" "}
                    <Link className="create-account" to="/user-flow">
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}



export default Login
