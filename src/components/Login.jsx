import { useLoaderData, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../utils";
import { useAuth } from "../loggedInContext";
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
  const navigate = useNavigate();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // setStatus("submitting");
    console.log(loginFormData);
    const isUserLoggedIn = await loginUser(loginFormData);
    if (isUserLoggedIn) {
      // Redirect to the desired page after successful login
      console.log("Login successful. Redirecting to /host");
      login();
      navigate("/protected", { replace: true });
    }
  }

  //NOTE: usually you submit post when submit login to API

  // export async function loginUser(creds) {
  //   const res = await fetch("/api/login", {
  //     method: "post",
  //     body: JSON.stringify(creds),
  //   });
  //   const data = await res.json();

  //   if (!res.ok) {
  //     throw {
  //       message: data.message,
  //       statusText: res.statusText,
  //       status: res.status,
  //     };
  //   }

  //   return data;
  // }

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
        see Login.jsx , we also integrated useNavigate hook when submit
      </p>
      <hr />
      <div>
        Login: <p style={{ color: "red" }}>{message} </p>
        <p className="note">
          {" "}
          we use useLocation and State to display this warning see
          AuthRequired.jsx and use Navigate from react-router-dom
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
