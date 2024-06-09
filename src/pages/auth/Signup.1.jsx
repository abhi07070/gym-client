import React from "react";

export const Signup = () => {
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
      {/* <div className="form-container sign-in">
              <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                  <a href="#" className="icon">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email and password</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forget Your Password?</a>
                <button type="button">Sign In</button>
              </form>
            </div> */}
    </div>
  );
};
