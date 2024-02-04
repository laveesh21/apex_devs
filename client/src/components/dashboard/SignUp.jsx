import React from 'react';
import '../styles/SignUp.css';

function SignUp() {
  return (
    <div className='signup-body'>
      <div className="signup-container">
        <h1>Sign up</h1>

        <form action="">
          <div className="signup-form">
            <label htmlFor="username">Username:</label>
            <input type="text" className="signup-input" name="Username" required />
            {/* <i className="bx bxs-user-circle"></i> */}
          </div>

          <div className="signup-form">
            <label htmlFor="email">Email ID:</label>
            <input type="text" className="signup-input" id="emailInput" name="Email" required />
          </div>

          <div className="signup-form">
            <label htmlFor="password">Password:</label>
            <input type="password" className='signup-input' id="passwordInput" name="Password" required />
          </div>

          <div className="signup-terms">
            <label htmlFor="agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
              />
              I agree to the <a href='https://google.com'>terms and conditions.</a>
            </label>
          </div>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}

export default SignUp;