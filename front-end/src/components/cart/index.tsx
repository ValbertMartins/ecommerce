import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCart from "../itemCart"
import { Button, Container, ContainerContent } from "./styles"

const Cart = () => {
  const { setOpenCart, openCart, itensCart } = useContext(CartContext)

  function handleOpenModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.currentTarget == event.target) {
      setOpenCart(false)
    }
  }

  if (!openCart) return null
  return (
    <Container onClick={handleOpenModal}>
      <ContainerContent>
        {itensCart.map(item => {
          return (
            <ItemCart
              item={item}
              key={item.id}
            />
          )
        })}
        <Button>Purchase</Button>
      </ContainerContent>
    </Container>
  )
}

export default Cart
