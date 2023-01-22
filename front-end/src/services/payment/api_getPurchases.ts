import { PurchaseType } from "../../components/profile"
import { request } from "../api"

type PurchaseDataType = {
  ordersByUser: PurchaseType[]
}
export async function getPurchases(jwt: string) {
  const [data] = await request<PurchaseDataType>(`/api/purchases`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  if (!data) return null
  console.log(data)
  return data.ordersByUser
}
