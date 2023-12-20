import { redirect} from "react-router-dom";

// make async to await in loader
export async function requireAuth() {


  const isLoggedIn = false;

  console.log("isLoggedIn", isLoggedIn);
 
  if (!isLoggedIn) {
    //include a search param
    throw redirect(
      "/loginWithAction?message=You must log in first, include search param see util.js"
    );
  }
  return null;
   
}


export async function loginUser(user) {
  const credentials = {
    email: "tommy@gmail.com",
    password: "123",
  };

  // Check if both email and password match
  if (
    credentials.email === user.email &&
    credentials.password === user.password
  ) {
    console.log("Access granted");
    return true
  } else {
    console.log("Access denied");
    return false
  }
}