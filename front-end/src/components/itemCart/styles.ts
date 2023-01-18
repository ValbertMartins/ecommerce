import styled, { keyframes } from "styled-components"

const AnimationEntering = keyframes`
  50% { 
     transform: scaleX(1.1);
     
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
export const ItemContainer = styled.div`
  background-color: #fff;
  height: 10rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width:  336px;
  height: 160px; */
  padding: 5%;
  margin: 1rem auto;
  transform: scale(1);
  opacity: 1;
  /* animation: ${AnimationEntering} 0.5s ease forwards; */
  @media (max-width: 1300px) {
    justify-content: space-around;
    padding: 0;
  }
  @media (max-width: 1140px) {
    flex-direction: column;
    height: 15rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    * {
      font-size: 62%;
    }
  }
`
export const ImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 1140px) {
    width: 100%;
    height: 12rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Name = styled.h4`
  font-size: 1rem;
  @media (max-width: 1140px) {
    display: none;
  }
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  @media (max-width: 1140px) {
    margin-top: 1rem;
    font-size: 1rem;
  }
`

export const QuantityContainer = styled.div`
  font-size: 0.8rem;
  button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #413e3e;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 0.4rem;
  }
  ::before {
    content: "Quantity";
  }
  @media (max-width: 1140px) {
    margin: 1rem;
    ::before {
      content: "";
    }
  }
`
