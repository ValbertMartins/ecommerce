import styled from "styled-components"

export const Container = styled.section`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
  margin: 2rem auto;
  @media (max-width: 648px) {
    max-width: 550px;
  }
`
export const Logo = styled.span`
  margin: 0 1rem;
  font-weight: bold;
`
export const Navbar = styled.nav`
  display: flex;
  a,
  article {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 55px;
    align-items: center;
    margin: 0rem 2rem;
    font-weight: bold;
    position: relative;
    cursor: pointer;
  }
  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    margin: 0 1rem;

    a {
      margin: 0 0.3rem;
      justify-content: space-around;
    }
  }
`

export const CartCounter = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: red;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  transition: 0.3s;
`
export const ProfileIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
