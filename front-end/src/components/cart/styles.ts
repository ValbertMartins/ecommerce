import styled, { keyframes } from "styled-components"

export const AnimationEnterCart = keyframes`
  to {
    width: 30vw;
    padding: 3% 5%;
  }
  
`

export const Container = styled.section`
  z-index: 10;
  height: 100%;
  position: fixed;
  width: 100vw;
  right: 0;
  top: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row-reverse;
`
export const ContainerContent = styled.article`
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 20vw;
  background-color: #f1f1f1;
  animation: ${AnimationEnterCart} 0.3s ease forwards;
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 50vw;
    animation: none;
    padding: 3% 2%;
  }
`
export const Button = styled.button`
  background-color: #413e3e;
  outline: none;
  border: none;
  color: white;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
  border-radius: 3px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: red;
`
