import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react"
import 
{
    MainContainer,
    MainContent,
    H1,
    GoBackButton
} 
from "./Styles.js";
import orderImage from "../../Assets/orderImage.png"
function App() {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate("/")
    }
    return (
        <MainContainer>
            <img height = "300px" src = {orderImage}></img>
            <MainContent>
                <H1>Pedidos</H1>

                <GoBackButton onClick = {goBack}>Voltar</GoBackButton>
            </MainContent>
        </MainContainer>
    );
  }
  
  export default App;
  