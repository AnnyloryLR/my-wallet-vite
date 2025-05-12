import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";


function App() {
  


  return (
    <UserContext.Provider>
      <BrowserRouter>
        <AppStyle>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
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