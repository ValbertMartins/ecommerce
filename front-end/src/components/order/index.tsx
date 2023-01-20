import React, { useContext, useEffect, useState } from "react"
import {
  Address,
  Button,
  ConfirmedImg,
  Contact,
  Container,
  ContainerOrderDetails,
  Title,
} from "./styles"
import { useSearchParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { handleOrderPayment, OrderDetailsType } from "../../services/payment/api_handleOrder"
import ConfirmedIcon from "../../assets/svg/verified.svg"
const Order = () => {
  const [params] = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<OrderDetailsType | null>(null)
  const sessionId = params.get("session_id")

  const { userAuth } = useContext(UserContext)

  useEffect(() => {
    if (userAuth && sessionId) {
      handleOrderPayment(sessionId).then(data => setOrderDetails(data))
    }
  }, [userAuth])

  if (!orderDetails) return null
  return (
    <Container>
      <Title>Thanks for the purchase!</Title>

      <b>{orderDetails.customer_details.email}</b>

      <ContainerOrderDetails>
        <Address>
          <h4>Address</h4>
          <div>Country: {orderDetails.customer_details.address.country}</div>
          <div>State: {orderDetails.customer_details.address.state}</div>
          <div>City: {orderDetails.customer_details.address.city}</div>
          <div>Postal Code: {orderDetails.customer_details.address.postal_code}</div>
          <div>Address: {orderDetails.customer_details.address.line1}</div>
        </Address>
        <Contact>
          <h4>Products</h4>
          {orderDetails.line_items.data.map(item => {
            return <p key={item.id}>{item.description}</p>
          })}
        </Contact>
      </ContainerOrderDetails>
      <ConfirmedImg src={ConfirmedIcon} />
      <Button>Go to home</Button>
    </Container>
  )
}

export default Order
