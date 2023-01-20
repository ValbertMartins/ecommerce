import { request } from "../api"

export type OrderDetailsType = {
  customer_details: {
    address: {
      city: string
      country: string
      line1: string
      line2: string
      postal_code: string
      state: string
    }
    email: string
    name: string
  }
  status: string
  amount_total: number
  line_items: {
    data: {
      id: string
      description: string
    }[]
  }
}

export async function handleOrderPayment(session_id: string) {
  const [orderDetails, error] = await request<OrderDetailsType>(
    `/api/order/?session_id=${session_id}`
  )
  console.log(orderDetails)
  return orderDetails
}
