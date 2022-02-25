import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomeComponents/home';
import HackAUBG from './components/HomeComponents/hackaubg_landing/hackaubg';
import MarketingTeam from './components/HomeComponents/meetTheTeam/marketingTeam';
import PRTeam from './components/HomeComponents/meetTheTeam/prTeam';
import DevelopmentTeam from './components/HomeComponents/meetTheTeam/developmentTeam';
import LogisticsTeam from './components/HomeComponents/meetTheTeam/logisticsTeam';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/HomeComponents/registerForm/registrationForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="hackaubg" element={<HackAUBG></HackAUBG>}></Route>
        <Route path="publicrelationsdepartment" element={<PRTeam></PRTeam>}></Route>
        <Route path="marketingdepartment" element={<MarketingTeam></MarketingTeam>}></Route>
        <Route path="developmentdepartment" element={<DevelopmentTeam></DevelopmentTeam>}></Route>
        <Route path="logisticsdepartment" element={<LogisticsTeam></LogisticsTeam>}></Route>
        <Route path="register" element={<RegistrationForm></RegistrationForm>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
