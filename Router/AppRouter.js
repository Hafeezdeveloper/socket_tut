import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MainDashboard from '../DashBoard/MainDashboard';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import { getUserCookire } from '../Api/BaseMethod';

const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route  path='dashboard/*' element={<MainDashboard />} />
        <Route  path='/' element={<Login />} />
        <Route  path='/signUp' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
