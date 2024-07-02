import React, { useEffect, useState } from "react";
import { LoginForm } from "../../apis/Auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isloggedIn = useSelector((state) => state.user.isloggedIn);
  const isSignUp = useSelector((state) => state.user.isSignUp);
  useEffect(() => {
    if (isSignUp && isloggedIn === true) {
      navigate("/main");
    }
  }, []);
  const loginUser = async () => {
    try {
      const response = await LoginForm(email);
      if (response.data.success) {
        dispatch(setLogin(true));
        navigate("/main");
        setEmail("");
        setError("");
      }
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        // setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser();
          }}
        >
          <h1>Login Account</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
