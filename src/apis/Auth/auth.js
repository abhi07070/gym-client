import axios from "axios";

const signupForm = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/api/user/signup`,
      {
        email,
        password,
      }
    );

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    throw error; // Throw the error to be handled by the component
  }
};

const LoginForm = async (email) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/api/user/login`,
      {
        email,
      }
    );

    return response;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};

export { signupForm, LoginForm };
