// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="useSearchParams" element={<UseSearchParams/>} />
          <Route path="vans/:id" element={<VanDetail />} />

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
