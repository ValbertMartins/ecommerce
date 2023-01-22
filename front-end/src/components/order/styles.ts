import styled from "styled-components"

export const Container = styled.section`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 1rem 0;
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`
export const ContainerOrderDetails = styled.article`
  max-width: 300px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  @media (max-width: 300px) {
    font-size: 0.8rem;
    padding: 2rem;
  }
`

export const Address = styled.div`
  margin: 1rem 0;
  word-wrap: break-word;
`
export const Contact = styled.div`
  word-wrap: break-word;
  margin: 1rem 0;
`

export const Button = styled.button`
  background-color: #413e3e;
  outline: none;
  border: none;
  color: white;
  width: 300px;
  height: 2rem;
  margin-top: 2rem;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 300px) {
    width: 150px;
  }
`
export const ConfirmedImg = styled.img`
  max-width: 100px;
`
