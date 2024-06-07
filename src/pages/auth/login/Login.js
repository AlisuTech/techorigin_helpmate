import React from 'react'
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <Container fluid className="background-div border-red">
        <Row className="second-bac-div border-yellow">
          <Col className="div-one border-red col-6">
            <h1 className="div-one-head">Welcome Back</h1>
            <p className="div-one-text">
              Help mate connects you to professionals
            </p>
          </Col>
          <Col className="div-two border-blue col-6">
              <div className="center-div">
                <div>
                  <h1 className="login-txt">Login Your Account</h1>
                  <div className="icon-div"></div>

                  <input
                    className="input-div"
                    type="email"
                    placeholder="Email Address"
                  ></input>
                  <br></br>
                  <input
                    className="input-div"
                    type="password"
                    placeholder="Password"
                  ></input>
                  <div className="forget-pword">
                    <div className="c-box-div">
                      <input type="checkBox" id="cBox"></input>
                      <label for="cBox">Remember</label>
                    </div>
                    <p className="forgot">Forgot Password?</p>
                  </div>
                  <button className="login-button">LOGIN</button>
                  <br></br>
                  <p className="create-account">Create Account</p>
                </div>
              </div>
          </Col>
        </Row>
        {/* <Container className="second-bac-div">
          <div className="div-one">
            <h1 className="div-one-head">Welcome Back</h1>
            <p className="div-one-text">
              Help mate connects you to professionals
            </p>
          </div>
          <div className="div-two">
            <div className="center-div">
              <div>
                <h1 className="login-txt">Login Your Account</h1>
                <div className="icon-div"></div>

                <input
                  className="input-div"
                  type="email"
                  placeholder="Email Address"
                ></input>
                <br></br>
                <input
                  className="input-div"
                  type="password"
                  placeholder="Password"
                ></input>
                <div className="forget-pword">
                  <div className="c-box-div">
                    <input type="checkBox" id="cBox"></input>
                    <label for="cBox">Remember</label>
                  </div>
                  <p className="forgot">Forgot Password?</p>
                </div>
                <button className="login-button">LOGIN</button>
                <br></br>
                <p className="create-account">Create Account</p>
              </div>
            </div>
          </div>
        </Container> */}
      </Container>
    </div>
  );
}

// const Login = () => {
//   return (
    // <div>
    //   <div className="background-div">
    //     <div className="second-bac-div">
    //       <div className="div-one">
    //         <h1 className="div-one-head">Welcome Back</h1>
    //         <p className="div-one-text">
    //           Help mate connects you to professionals
    //         </p>
    //       </div>
    //       <div className="div-two">
    //         <div className="center-div">
    //           <div>
    //             <h1 className="login-txt">Login Your Account</h1>
    //             <div className="icon-div"></div>

    //             <input
    //               className="input-div"
    //               type="email"
    //               placeholder="Email Address"
    //             ></input>
    //             <br></br>
    //             <input
    //               className="input-div"
    //               type="password"
    //               placeholder="Password"
    //             ></input>
    //             <div className="forget-pword">
    //               <div className='c-box-div'>
    //                 <input type="checkBox" id="cBox"></input>
    //                 <label for="cBox">Remember</label>
    //               </div>
    //               <p className='forgot'>Forgot Password?</p>
    //             </div>
    //             <button className="login-button">LOGIN</button>
    //             <br></br>
    //             <p className="create-account">Create Account</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }

export default Login
