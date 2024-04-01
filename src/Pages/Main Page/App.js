// import { useNavigate } from "react-router-dom";
// import axios from "axios"
import 
{
  MainContainer,
  MainContent,
  H1,
  OrderInput,
  InputLabel,
  OrderButton,
} 
from "./Styles.js";
import logo from "../../Assets/logo-logotipo-lanche-hamburguer-buguer-pronta-entrega-comida-de-rua.webp"
function App() {
  return (
    <MainContainer>
      <img height = "300px" src = {logo}></img>
      <H1>Faça seu pedido!</H1>
      <MainContent>
      
        <InputLabel htmlFor = "order-input">Pedido</InputLabel>
        <OrderInput placeholder = "Batatas Fritas M, Cheeseburger s/ salada" id = "order-input"></OrderInput>
        <InputLabel htmlFor="client-input">Nome do Cliente</InputLabel>
        <OrderInput placeholder = "Fulano de Tal" id = "client-input"></OrderInput>

        <OrderButton>Novo Pedido</OrderButton>
      </MainContent>
    </MainContainer>
    
  );
}

export default App;
