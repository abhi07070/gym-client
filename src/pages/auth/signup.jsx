import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupForm = async () => {
    try {
      const response = await axios.post(
        "https://gym-backend-beta.vercel.app/api/user/signup",
        {
          email,
          password,
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupForm();
          }}
        >
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
          {/* <span>or use your email for registration</span> */}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
