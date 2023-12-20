import { useLoaderData, useLocation,  Form } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

// NOTE: alternative solution, use search params to get query to display message pass from requiredAuth

//native wev
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}


export async function action({request}) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    // process this info however I wanted
    // pass the email and password to the loginUser function
    console.log(email, password);
  return null;
}

function Login() {
  // const [status, setStatus] = useState("idle");
  const location = useLocation();
  const message = location.state?.message;
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get("message"))

  const messageUsingLoader = useLoaderData();


  return (
    <div>
      <h1>Login using Form and 
        action
      </h1>
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
        {/*mothod post need to be fake */}
        <Form method='POST' className="login-form">
          <input
            name="email"
            
            type="email"
            placeholder="Email address"
           
          />
          <input
            name="password"
         
            type="password"
            placeholder="Password"
  
          />
          <button disabled={status === "submitting"}>
            {" "}
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
