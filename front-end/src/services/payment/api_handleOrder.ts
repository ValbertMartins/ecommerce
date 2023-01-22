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
  payment_intent: string
}

export async function handleOrderPayment(session_id: string, jwt: string) {
  const [orderDetails] = await request<OrderDetailsType>(
    `/api/order/?session_id=${session_id}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  )
  if (!orderDetails) return null
  storeOrderInDB(orderDetails, jwt)
  console.log(orderDetails)
  return orderDetails
}

async function storeOrderInDB(orderDetails: OrderDetailsType, jwt: string) {
  await request(`/api/purchases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      data: {
        purchase_id: orderDetails.payment_intent,
        total_amount: orderDetails.amount_total,
      },
    }),
  })
}
