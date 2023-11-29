// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import BackLinkSample from './Pages/Host/BackLinkSample';
import Back from './Pages/Host/Back';


function App() {
 
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="vans" element={<Vans />} />
         <Route path="vans/:id" element={<VanDetail />} />

         <Route path="host" element={<HostLayout />}>
           <Route index element={<Dashboard />} />
           <Route path="income" element={<Income />} />
           <Route path="reviews" element={<Reviews />} />
           {/* <Route path="backlinksample" element={<BackLinkSample />} /> */}
           <Route path="backlinksample" element={<BackLinkSample />}>
             <Route path="back" element={<Back />} />
           </Route>
         </Route>
       </Route>
     </Routes>
   </BrowserRouter>
 );
}

export default App
