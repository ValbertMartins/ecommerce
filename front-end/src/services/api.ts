import { PictureType, ProductInfoType, ProductType } from "../types/products"

export const BASE_URL: string = "http://localhost:1337"

async function request<T>(endpoint: string): Promise<[T, unknown]> {
  let data!: T
  let error
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    if (!response.ok) throw new Error()
    const json = await response.json()
    json.data ? (data = json.data) : (data = json)
  } catch (err) {
    error = err
  } finally {
    return [data, error]
  }
}

function mergePictureAndProducts(
  products: ProductInfoType[],
  pictureList: PictureType[]
): ProductType[] {
  return products.map(product => {
    return {
      picture: pictureList.filter(picture => picture.id === product.id)[0],
      ...product,
    }
  })
}

export async function requestProducts(): Promise<ProductType[] | null> {
  const [products, error] = await request<ProductInfoType[]>(`/api/products`)
  const [pictureList] = await request<PictureType[]>(`/api/upload/files`)
  if (error) return null
  return mergePictureAndProducts(products, pictureList)
}

export async function requestProduct(
  id: string | undefined
): Promise<ProductType | null> {
  if (!id) return null
  const [product, error] = await request<ProductInfoType>(`/api/products/${id}`)
  const [picture] = await request<PictureType>(
    `/api/upload/files/${product.id}`
  )
  if (error) return null
  return {
    picture: picture,
    ...product,
  }
}
