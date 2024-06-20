import React, { useState } from 'react'
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { activateUserLoggedIn } from '../../../app/user/userSlice';
import { useDispatch } from 'react-redux'


const Login = () => {
  const [email, emailChanged] = useState('')
  const [password, passwordChanged] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = () => {
    dispatch(activateUserLoggedIn(true))
    navigate("/");
  }

  return (
    <div>
      <Container fluid className="background-div ">
        <Row className="second-bac-div ">
          <Col className="div-one" sm={12} md={12} lg={5} xl={6}>
            <h1 className="div-one-head">Welcome Back</h1>
            <p className="div-one-text position-absolute bottom-0">
              Help mate connects you to professionals
            </p>
          </Col>
          <Col className="div-two " lg={7} xl={6}>
            <div className="center-div">
              <Col
                xs={10}
                sm={12}
                md={10}
                lg={12}
                xl={12}
              >
                <h1 className="login-txt">Login</h1>
                <div className="icon-div"></div>

                <input
                  className="input-div"
                  type="email"
                  placeholder="Email Address" value={email} onChange={e => emailChanged(e.target.value)}
                ></input>
                <br></br>
                <input
                  className="input-div"
                  type="password"
                  placeholder="Password" value={password} onChange={e => passwordChanged(e.target.value)}
                ></input>
                <div className="forget-pword">
                  <div className="c-box-div">
                    <input type="checkBox" id="cBox"></input>
                    <label for="cBox">Remember</label>
                  </div>
                  <p className="forgot">Forgot Password?</p>
                </div>
                <button onClick={loggedInUser} className="login-button">LOGIN</button>
                <br></br>
                <div className="text-center">
                  <p className="text-[10px]">
                    Dont have an account?{" "}
                    <Link className="create-account" to="/signup">
                      Create Account
                    </Link>
                  </p>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default Login
