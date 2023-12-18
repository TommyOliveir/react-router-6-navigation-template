import { redirect } from "react-router-dom";

// make async to await in loader
export async function requireAuth(fakelogin) {


  const isLoggedIn = fakelogin;

  console.log("isLoggedIn", isLoggedIn);
 
  if (!isLoggedIn) {
    //include a search param
    throw redirect(
      "/login?message=You must log in first, include search param see util.js"
    );
  }
  return null;
   
}
