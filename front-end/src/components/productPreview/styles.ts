import styled from "styled-components"
export const Container = styled.article`
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  padding: 5%;
`
export const ImageContainer = styled.div`
  height: 15rem;
`
export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 500ms;
`
export const Name = styled.h4`
  margin-top: 0.5rem;
`

export const Price = styled.p`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  font-weight: bold;
`
