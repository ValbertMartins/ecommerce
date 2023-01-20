import styled, { keyframes } from "styled-components"

export const LoadingAnimation = keyframes`
  from {
    transform: translateX( -400px);
  }
  to {
    transform: translateX( 0px);
  }
`
export const Container = styled.section`
  padding: 0 2%;
  margin: 4rem auto;
  max-width: 1250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 648px) {
    grid-template-columns: 1fr 1fr;
    max-width: 550px;
  }
  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
  animation: ${LoadingAnimation} 0.5s ease forwards;
`
