import React, { useRef, useState } from 'react'
import './Login.css'

const Login = () => {

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef()
  const password = useRef()

  function handleEmailFocus() {
    const enteredEmail = email.current.value;
    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    console.log('Sending HTTP request...');
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              name="email" 
              ref={email} 
              onBlur={handleEmailFocus}
            />
            <div className="control-error">
              {emailIsInvalid && <p>Please enter a valid email address.</p>}
            </div>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              ref={password}
            />
          </div>
        </div>

        <div className="form-actions">
          <button className="button">Login</button>
          <button className="button ">Register</button>
        </div>
      </form>
    </>
  );
}

export default Login