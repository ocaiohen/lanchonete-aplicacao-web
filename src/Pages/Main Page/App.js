import { useNavigate } from "react-router-dom";
import React, {useRef} from "react"
import {v4 as uuidv4} from "uuid"
import axios from "axios"
import 
{
  MainContainer,
  MainContent,
  H1,
  OrderInput,
  InputLabel,
  OrderButton,
  GoToOrdersButton
} 
from "./Styles.js";
import logo from "../../Assets/logo-logotipo-lanche-hamburguer-buguer-pronta-entrega-comida-de-rua.webp"
import ArrowImage from "../../Assets/Arrow 1.png"
function App() {
  let orderInput = useRef()
  let nameInput = useRef()
  const navigate = useNavigate()
  
  const goToOrders = () =>{
    navigate("/pedidos")
  }
  const addNewOrder = async () =>{
    if(orderInput.current.value && nameInput.current.value){
      const id = uuidv4()
      const order = orderInput.current.value
      const name = nameInput.current.value

      await axios.post("http://localhost:3001/documents", {
        id : id,
        order : order,
        name : name
      })
      goToOrders()
    }
  }
  return (
    <MainContainer>
      <img height = "200px" src = {logo}></img>
      <H1>Faça seu pedido!</H1>
      <MainContent>
      
        <InputLabel htmlFor = "order-input">Pedido</InputLabel>
        <OrderInput ref = {orderInput} placeholder = "Batatas Fritas M, Cheeseburger s/ salada" id = "order-input"></OrderInput>
        <InputLabel htmlFor="client-input">Nome do Cliente</InputLabel>
        <OrderInput ref = {nameInput} placeholder = "Fulano de Tal" id = "client-input"></OrderInput>

        <OrderButton onClick={addNewOrder}>Novo Pedido</OrderButton>

        <GoToOrdersButton onClick={goToOrders}>Ir para pedidos<img alt = "seta" src={ArrowImage}></img></GoToOrdersButton>
      </MainContent>
    </MainContainer>
    
  );
}

export default App;
