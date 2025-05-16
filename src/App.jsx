import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import Incomes from "./pages/Incomes.jsx";
import Expenses from "./pages/Expenses.jsx";
import IncomesUpdate from "./pages/IncomesUpdate.jsx";
import ExpensesUpdate from "./pages/ExpensesUpdate.jsx";


function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const [user, setUser] = useState("");
  
  return (
    <UserContext.Provider value={{token, setToken, user, setUser}}>
      <BrowserRouter>
        <AppStyle>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/incomes" element={<Incomes/>} />
            <Route path="/expenses" element={<Expenses/>}/>
            <Route path="/incomes-update" element={<IncomesUpdate/>}/>
            <Route path="/expenses-update" element={<ExpensesUpdate/>} />
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