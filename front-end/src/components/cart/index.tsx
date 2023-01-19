import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import { handlePayment } from "../../services/payment/stripe"
import ItemCart from "../itemCart"
import { Button, Container, ContainerContent } from "./styles"

const Cart = () => {
  const { setOpenCart, openCart, itensCart } = useContext(CartContext)
  const { userAuth } = useContext(UserContext)

  function handleOpenModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.currentTarget == event.target) {
      setOpenCart(false)
    }
  }

  const totalCartPrice = itensCart.reduce((acc, currentValue) => {
    return acc + currentValue.quantity * currentValue.attributes.price
  }, 0)

  if (!openCart) return null
  if (!userAuth) return null
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

        <b>subtotal ${totalCartPrice}</b>
        {itensCart.length > 0 && (
          <Button onClick={() => handlePayment(itensCart, userAuth.jwt)}>Purchase</Button>
        )}
      </ContainerContent>
    </Container>
  )
}

export default Cart
