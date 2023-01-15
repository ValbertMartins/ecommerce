import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button, Container, ContainerContent } from "./styles"

const Cart = () => {
  const { setOpenCart, openCart } = useContext(CartContext)

  function handleOpenModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.currentTarget == event.target) {
      setOpenCart(false)
    }
  }

  if (!openCart) return null
  return (
    <Container onClick={handleOpenModal}>
      <ContainerContent>
        <Button>Purchase</Button>
      </ContainerContent>
    </Container>
  )
}

export default Cart
