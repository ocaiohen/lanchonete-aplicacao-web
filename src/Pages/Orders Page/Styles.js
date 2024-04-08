import styled from "styled-components"
import DeleteImage from "../../Assets/trash can icon.png"

export const MainContainer = styled.main`
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
`
export const MainContent = styled.div`
    width: 400px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H1 = styled.h1`
    font-size: 28px;
`
export const GoBackButton = styled.button`
    width: 100%;
    padding: 19px;
    margin-top: 30px;
    background-color: rgba(255,255,255, 0.15);
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 16px;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
`
export const ListOfOrders = styled.ul`
    width: 100%;
    height: fit-content;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const OrderCard = styled.div`
    width: 100%;
    height: 80px;
    padding: 30px;
    background-color: rgba(255,255,255, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`
export const OrderTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const OrderText = styled.p`
    font-size: 18px;
    font-weight: 300;
`
export const NameText = styled.p`
    font-size: 18px;
    font-weight: 700;
`
export const DeleteButton = styled.button`
    height: 32px;
    width: 32px;
    background-image: url("${DeleteImage}");
    background-size: cover;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
`