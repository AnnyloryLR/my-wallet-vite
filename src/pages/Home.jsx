import styled from "styled-components";




function Home(){


    return(
        <HomeStyle>
            <Top>
                <h1>Olá, Fulano</h1>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.21053 24C0.889475 24 0.581573 23.8736 0.354555 23.6485C0.127537 23.4235 0 23.1183 0 22.8V1.2C0 0.88174 0.127537 0.576515 0.354555 0.351472C0.581573 0.126428 0.889475 0 1.21053 0H18.1579C18.4789 0 18.7868 0.126428 19.0139 0.351472C19.2409 0.576515 19.3684 0.88174 19.3684 1.2V4.8H16.9474V2.4H2.42105V21.6H16.9474V19.2H19.3684V22.8C19.3684 23.1183 19.2409 23.4235 19.0139 23.6485C18.7868 23.8736 18.4789 24 18.1579 24H1.21053ZM16.9474 16.8V13.2H8.47368V10.8H16.9474V7.2L23 12L16.9474 16.8Z" fill="white"/>
                </svg>
            </Top>
            <WhiteBoard>
                <p>Não há registro de entrada ou saída</p>
            </WhiteBoard>
            <ButtonDiv>
                <ButtonLeft>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9922 11.7188H13.2812V8.00781C13.2812 7.90039 13.1934 7.8125 13.0859 7.8125H11.9141C11.8066 7.8125 11.7188 7.90039 11.7188 8.00781V11.7188H8.00781C7.90039 11.7188 7.8125 11.8066 7.8125 11.9141V13.0859C7.8125 13.1934 7.90039 13.2812 8.00781 13.2812H11.7188V16.9922C11.7188 17.0996 11.8066 17.1875 11.9141 17.1875H13.0859C13.1934 17.1875 13.2812 17.0996 13.2812 16.9922V13.2812H16.9922C17.0996 13.2812 17.1875 13.1934 17.1875 13.0859V11.9141C17.1875 11.8066 17.0996 11.7188 16.9922 11.7188Z" fill="white"/>
                    <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM12.5 21.582C7.48535 21.582 3.41797 17.5146 3.41797 12.5C3.41797 7.48535 7.48535 3.41797 12.5 3.41797C17.5146 3.41797 21.582 7.48535 21.582 12.5C21.582 17.5146 17.5146 21.582 12.5 21.582Z" fill="white"/>
                    </svg>
                    <p>Nova entrada</p>
                </ButtonLeft>

                <ButtonRight>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9922 11.7188H8.00781C7.90039 11.7188 7.8125 11.8066 7.8125 11.9141V13.0859C7.8125 13.1934 7.90039 13.2812 8.00781 13.2812H16.9922C17.0996 13.2812 17.1875 13.1934 17.1875 13.0859V11.9141C17.1875 11.8066 17.0996 11.7188 16.9922 11.7188Z" fill="white"/>
                    <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM12.5 21.582C7.48535 21.582 3.41797 17.5146 3.41797 12.5C3.41797 7.48535 7.48535 3.41797 12.5 3.41797C17.5146 3.41797 21.582 7.48535 21.582 12.5C21.582 17.5146 17.5146 21.582 12.5 21.582Z" fill="white"/>
                    </svg>
                    <p>Nova saída</p>
                </ButtonRight>
            </ButtonDiv>
           
        </HomeStyle>
    )

}

export default Home;

const HomeStyle = styled.div`
    width:100vw;
    height:100vh;
    background-color: #8C11BE;
    display:flex;
    flex-direction: column;
    align-items:center;
    position:fixed;
    top:0;
    left:0; 
    
`
const Top = styled.div`
    height:20%;
    width:90%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    h1{
            width:70%;
            margin-top:25px;
            margin-left:5px;
            font-size:26px;
            color:#FFFFFF;
            font-family: "Raleway";
            font-weight:700;            
    } 
    svg{
        margin-right:3px;
       
    }
`
const WhiteBoard = styled.div`
    background-color:#FFFFFF;
    height:80%;
    width:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    p{
        height:46;
        width:180px;
        font-family:"Raleway";
        font-size:20px;
        font-weight:400;
        color:#868686;
        text-align:center;
    }
`
const ButtonDiv = styled.div`
    height:30%;
    width:90%;
    display:flex;
    align-items:center;
`
const ButtonLeft = styled.button`
    width:45%;
    height:114px;
    display:flex;
    flex-direction:column;
    align-items:left;
    background-color:#A328D6;
    border:1px solid #A328D6;
    border-radius:5px;
    margin-right:10%;
    margin-top:10px;
    padding-bottom:0%;
    p{
        width:50%;
        color:#FFFFFF;
        font-family:"Raleway";
        font-size:17px;
        font-weight:700; 
        text-align:left; 
    }   
    svg{
      margin:5px;
    } 
`
const ButtonRight = styled.button`
    width:45%;
    height:114px;
    display:flex;
    flex-direction:column;
    align-content:right;
    background-color:#A328D6;
    border:1px solid #A328D6;
    border-radius:5px;
    margin-top:10px;
    p{
        width:50%;
        color:#FFFFFF;
        font-family:"Raleway";
        font-size:17px;
        font-weight:700; 
        text-align:right; 
        margin-left:50%;
    }
    svg{
      margin:5px;
      margin-left:80%;
    }     
`