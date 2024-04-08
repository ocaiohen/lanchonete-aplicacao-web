import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react"
import axios from "axios"
import 
{
    MainContainer,
    MainContent,
    H1,
    GoBackButton,
    ListOfOrders,
    OrderCard,
    OrderTextContainer,
    DeleteButton,
    OrderText,
    NameText
} 
from "./Styles.js";
import orderImage from "../../Assets/orderImage.png"
function App() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getAndSetOrders = async () => {
          const {data: newOrders} = await axios.get("http://localhost:3001/documents")
          setOrders(newOrders)
        }
        getAndSetOrders()
    },[])

    const deleteUser = async (id) =>{
        axios.delete(`http://localhost:3001/documents/${id}`)
        const {data: newOrders} = await axios.get("http://localhost:3001/documents")
        setOrders(newOrders)
    }

    const goBack = () =>{
        navigate("/")
    }
    return (
        <MainContainer>
            <img height = "200px" alt = "imagem-pedidos" src = {orderImage}></img>
            <MainContent>
                <H1>Pedidos</H1>
                <ListOfOrders>
                    {
                        orders.map((order) => (
                            <OrderCard key = {order.id}>
                                <OrderTextContainer>
                                    <OrderText>{order.order}</OrderText>
                                    <NameText>{order.name}</NameText>
                                </OrderTextContainer>
                                
                                <DeleteButton onClick={() => deleteUser(order.id)}></DeleteButton>
                            </OrderCard>
                        ))
                    }
                </ListOfOrders>
                <GoBackButton onClick = {goBack}>Voltar</GoBackButton>
            </MainContent>
        </MainContainer>
    );
  }
  
  export default App;
  