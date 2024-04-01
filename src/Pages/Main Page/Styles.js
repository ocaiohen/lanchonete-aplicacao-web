import styled from "styled-components"

export const MainContainer = styled.main`
    min-height: 100vh;
    width: 100vw;
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
export const OrderInput = styled.input`
    width: 100%;
    padding: 19px;
    margin-bottom: 20px;
    border-radius: 14px;
    height: 55px;
    font-size: 18px;
    background-color: rgba(255,255,255,0.3);
    color: white;
    border: none;
`
export const InputLabel = styled.label`
    width: 100%;
    margin-left: 40px;
    font-size: 18px;
    font-weight: 600;
`
export const OrderButton = styled.button`
    width: 100%;
    padding: 19px;
    margin-top: 30px;
    background-color: #D93856;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
`