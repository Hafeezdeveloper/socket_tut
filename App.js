import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTabs from "./Pages/Project";
import CustomProgressBar from "./Pages/Project";
import { getApi } from "./Api/BaseMethod";
import InfiniteScroll from "react-infinite-scroller";
import { Box, Typography } from "@mui/material";
import Socket from "./ChatApp/Socket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./ChatApp/Chat";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ApiProtect from "./Api/ApiProtect";


  


function App() {

 

  return (  
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/user" element={<ApiProtect  Component={Socket}/>} />
      <Route  path="/socket/:id" element={<ApiProtect   Component={Chat}/>} />
      <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );    
}

export default App;
