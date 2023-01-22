import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  gap: 5rem;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
export const ImageContainer = styled.article`
  height: 35rem;
  background-color: #fff;
  border-radius: 5px;
  @media (max-width: 640px) {
    max-height: 20rem;
    width: 17rem;
    margin: 0 auto;
  }
  @media (max-width: 380px) {
    width: 80%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
    opacity: 0;
    transition: 300ms;
  }
`
