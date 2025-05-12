import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import styled from "styled-components";


function App() {
  


  return (
    <UserContext.Provider>
      <BrowserRouter>
        <AppStyle>
          <Routes>
            <Route path="/" element={<Login/>}/>
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