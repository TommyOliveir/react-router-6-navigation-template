// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Layout from "./components/Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  // redirect
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans, { loader as VansLoader } from "./Pages/Vans/Vans";
import VanDetail, { loader as VanDetailLoader } from "./Pages/Vans/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import BackLinkSample from "./Pages/Host/BackLinkSample";
import Back from "./Pages/Host/Back";
import SampleList from "./Pages/Host/SampleList";
import SampleListDetail from "./Pages/Host/SampleListDetail";
import Details from "./Pages/Host/Details";
import UseSearchParams from "./Pages/UseSearchParams";
import LinkState from "./Pages/LinkState";
import Error from "./components/Error";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AuthRequired from "./components/AuthRequired";
import Login, { loginLoader } from "./components/Login";
import LoginWithAction, {
  loader as loginWithActionLoader,
  action as loginWithAction,
} from "./components/LoginWithAction";
import ProtectedRouteWithLoaders from "./Pages/ProtectedRouteWithLoaders";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={VansLoader} />
      <Route path="useSearchParams" element={<UseSearchParams />} />
      <Route path="useSearchParams/linkState" element={<LinkState />} />
      <Route path="vans/:id" element={<VanDetail />} loader={VanDetailLoader} />
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route
        path="loginWithAction"
        loader={loginWithActionLoader}
        action={loginWithAction}
        element={<LoginWithAction />}
      />
      {/* AuthRequired is like a layout with outlet inside/ nested route */}
      <Route element={<AuthRequired />}>
        <Route path="protected" element={<ProtectedRoute />} />
      </Route>

      <Route
        path="protectedWithLoaders"
        element={<ProtectedRouteWithLoaders />}
        // loader={async () => {
        //   const isLoggedIn = false
        //   if (!isLoggedIn) {
        //     throw redirect("/login");
        //   }
        //   return null;
        // }}
        loader={async () => {
          await requireAuth();
          return null;
        }}
      >
        <Route
          path="nestedProtectedWithLoaders"
          element={<h1>Nested protectedRoute with loaders</h1>}
        />
      </Route>

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        {/* <Route path="backlinksample" element={<BackLinkSample />} /> */}
        <Route path="backlinksample" element={<BackLinkSample />}>
          <Route path="back" element={<Back />} />
        </Route>

        <Route path="list" element={<SampleList />} />
        <Route path="list/:id" element={<SampleListDetail />}>
          <Route index element={<Details />} />
          <Route index path="pricing" element={<h1>pricing</h1>} />
          <Route index path="photos" element={<h1>no photos</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page not found 404!</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
