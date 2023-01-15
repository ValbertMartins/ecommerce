import styled from "styled-components"

export const DetailsContainer = styled.article`
  display: grid;
  margin: 0 2rem;
  grid-template-areas:
    "name"
    "description"
    "quantity"
    "button";
  @media (max-width: 640px) {
    grid-template-areas:
      "name"
      "quantity"
      "button"
      "description";
  }
`
export const Title = styled.h1`
  font-size: 1.2rem;
  grid-area: name;
`

export const Description = styled.p`
  text-align: justify;
  margin: 2rem 0;
  grid-area: description;
`

export const QuantityContainer = styled.div`
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
    margin: 0rem 0.5rem;
    grid-area: quantity;
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
  grid-area: "button";
`
