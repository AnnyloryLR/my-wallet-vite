import styled from "styled-components";

function ExpensesUpdate(){
    return (
        <UpdateStyle>
            <Top><h1>Editar saída</h1></Top>
            <FormStyle>
                <InputStyle type="text" placeholder="Valor"/>
                <InputStyle type="text" placeholder="Descrição"/>
                <SubmitStyle type="submit"> <p>Atualizar saída</p> </SubmitStyle>
            </FormStyle>
        </UpdateStyle>
        
    )
}

export default ExpensesUpdate;

const UpdateStyle = styled.div`
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
    justify-content:center;
`
const Top = styled.div`
    height:10%;
    width:90%;
    display: flex;
    justify-content:space-between;
    h1{
            width:70%;
            margin-top:25px;
            margin-left:5px;
            font-size:26px;
            color:#FFFFFF;
            font-family: "Raleway";
            font-weight:700;            
    } 
`
const FormStyle = styled.form`
    height:80%;
    width:90%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
`
const InputStyle = styled.input`
    width: 100%;
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
    width:100%;
    height:46px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:13px;
    margin-bottom:36px;
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