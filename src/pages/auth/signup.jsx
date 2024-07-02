import React, { useEffect, useState } from "react";
import { signupForm } from "../../apis/Auth/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp } from "../../redux/AuthSlice";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isloggedIn = useSelector((state) => state.user.isloggedIn);
  const isSignUp = useSelector((state) => state.user.isSignUp);
  useEffect(() => {
    if (isSignUp && isloggedIn === true) {
      navigate("/main");
    }
  }, []);
  const register = async () => {
    try {
      const response = await signupForm(email, password);
      console.log(response);
      if (response.data.success) {
        alert(response.data.message);
        navigate("/login");
        dispatch(setSignUp(true));
        setEmail("");
        setPassword("");
      }
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
            register();
          }}
        >
          <h1>Create Account</h1>
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
