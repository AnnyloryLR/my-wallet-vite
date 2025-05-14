import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import Income from "./pages/Income.jsx";
import Expenses from "./pages/Expenses.jsx";


function App() {
  
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <AppStyle>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/income" element={<Income/>} />
            <Route path="/expenses" element={<Expenses/>}/>
          </Routes>
        </AppStyle>
      </BrowserRouter>
    </UserContext.Provider> 
 
  )
}

export default App;

const AppStyle = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:pink;
`