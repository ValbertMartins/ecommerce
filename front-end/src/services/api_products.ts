import { PictureType, ProductInfoType, ProductType } from "../types/types"
import { request } from "./api"

function mergePictureAndProducts(
  products: ProductInfoType[] | undefined,
  pictureList: PictureType[] | undefined
): ProductType[] | null {
  if (!products || !pictureList) {
    return null
  }

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

export async function requestProduct(id: string | undefined): Promise<ProductType | null> {
  if (!id) return null
  const [product, error] = await request<ProductInfoType>(`/api/products/${id}`)
  const [picture] = await request<PictureType>(`/api/upload/files/${product?.id}`)
  if (error) return null
  if (!picture || !product) return null

  return {
    picture: picture,
    ...product,
  }
}
