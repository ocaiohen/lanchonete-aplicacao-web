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