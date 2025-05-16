import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";




function SignUp(){

    return(
        <SignUpStyle>
           <h1>MyWallet</h1>
           <FormStyle>
                <InputStyle type="text" placeholder="Nome"/>
                <InputStyle type="email" placeholder="e-mail"/>
                <InputStyle type="password" placeholder="senha"/>
                <InputStyle type="password" placeholder="Confirme a senha"/>
                <SubmitStyle type="submit"> <p>Cadastrar</p> </SubmitStyle>
           </FormStyle>
           <p>Já tem uma conta? Faça login!</p>


        </SignUpStyle>
    )

}

export default SignUp;

const SignUpStyle = styled.div`
    width:100vw;
    height:100vh;
    background-color: #8C11BE;
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    position:fixed;
    top:0;
    left:0; 
    align-items:center;
    
    h1{
        margin-top:100px;
        font-size:32;
        color:#FFFFFF;
        font-family: "Saira Stencil One";
        font-weight:400;        
    } 
    p{
        font-family: "Raleway";
        font-weight:700;
        font-size:15px;
        color:#FFFFFF;
    } 
`

const FormStyle = styled.form`
    height:60%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    justify-content:center;    
`

const InputStyle = styled.input`
    width: 326px;
    height: 58px;
    border-radius:5px;
    border:1px solid #FFFFFF;
    margin-top:13px;
    text-indent:10px;
    &::placeholder{
        font-family: "Raleway";
        font-weight:400;
        font-size:20px;
        color:#000000;
    }
    &[type = "text"]{
        font-family: "Raleway";
        font-weight:400;
        font-size:20px;
        color:#000000;
    }
`
const SubmitStyle = styled.button`
    width:326px;
    height:46px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:13px;
    margin-bottom:13px;
    background-color:#A328D6;
    border:1px solid #A328D6;
    border-radius:5px;
    p{
        color:#FFFFFF;
        font-family:"Raleway";
        font-size:20px;
        font-weight:700;
    }
    
`