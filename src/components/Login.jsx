import { useLoaderData, useLocation } from "react-router-dom";
import { useState } from "react";
import { requireAuth } from "../utils";
// import { useSearchParams } from "react-router-dom";

// NOTE: alternative solution, use search params to get query to display message pass from requiredAuth

//native wev
export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  // const [status, setStatus] = useState("idle");
  const location = useLocation();
  const message = location.state?.message;
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get("message"))

  const messageUsingLoader = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    // setStatus("submitting");
    console.log(loginFormData);
   requireAuth(true)
  
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Description</h2>
      <p>
        we display a message when displaying login page and we got two solutions
        see Login.jsx
      </p>
      <hr />
      <div>
        Login: <p style={{ color: "red" }}>{message} </p>
        <p className="note">
          {" "}
          we use useLocation and State to display this warning see
          AuthRequired.jsx :
        </p>
      </div>
      <div>
        Login: <p style={{ color: "red" }}>{messageUsingLoader} </p>
        <p className="note">
          we use loader and request and included search param see util.js
        </p>
      </div>

      <div className="login-container">
        <h1>Sign in to your account</h1>
        {/* Warning goes here. Give it a classname="red" */}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
          />
          <button disabled={status === "submitting"}>
            {" "}
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
