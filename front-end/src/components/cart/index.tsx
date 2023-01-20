import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import { ErrorRequestType } from "../../services/api"
import { handlePayment } from "../../services/payment/api_handlePayment"
import { ErrorMessage } from "../auth/loginForm/styles"
import ItemCart from "../itemCart"
import { Button, Container, ContainerContent } from "./styles"

const Cart = () => {
  const { setOpenCart, openCart, itensCart } = useContext(CartContext)
  const { userAuth } = useContext(UserContext)
  const [errorOpenCheckout, setErrorOpenCheckout] = useState<ErrorRequestType | undefined>(
    undefined
  )

  function handleOpenModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.currentTarget == event.target) {
      setOpenCart(false)
    }
  }
  const totalCartPrice = itensCart.reduce((acc, currentValue) => {
    return acc + currentValue.quantity * currentValue.attributes.price
  }, 0)

  async function handleClickPayment() {
    if (userAuth) {
      const error = await handlePayment(itensCart, userAuth.jwt)
      if (error) setErrorOpenCheckout(error)
    }
  }
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

        <b>subtotal R${totalCartPrice}</b>
        {itensCart.length > 0 && <Button onClick={handleClickPayment}>Purchase</Button>}
        <ErrorMessage>{errorOpenCheckout?.message}</ErrorMessage>
      </ContainerContent>
    </Container>
  )
}

export default Cart
