import React, { useEffect, useState } from 'react'
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activateUserLoggedIn, loginUser, setUser } from '../../../app/user/userSlice';
import Loader from '../../../components/Loader';
//import { State } from 'ionicons/dist/types/stencil-public-runtime';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (userInfo){
  //     navigate('/')
  //   }
  // }, [navigate, userInfo])

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    console.log("User credentials:", userCredentials);
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail('');
        setPassword('');
        console.log("User payload:", result.payload); 
        dispatch(setUser(result.payload.user));
        navigate('/');
      } else {
        console.error("Login failed:", result.error);
      }
    }).catch((error) => {
      console.error("Error in loginUser thunk:", error);
    });
  };




  return (
    <form onSubmit={handleLoginEvent}>
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
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
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
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
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
                <button type='submit' className="login-button">
                  {/* {loading? 'Loading...':'Login'} */}Login
                </button>
                {loading && <Loader />}
                {error && (
                  <div className='error' role='alert'>{typeof error === 'string' ? error : 'AN error occured'}</div>
                )}

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

    </form>
  );
}

export default Login
