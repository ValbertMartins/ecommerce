import { PictureType, ProductInfoType, ProductType } from "../types/products"

export const BASE_URL: string = "http://localhost:1337"

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

async function requestPictureProducts() {
  const response = await fetch(`${BASE_URL}/api/upload/files`)
  if (!response.ok) throw new Error()
  const pictureList = await response.json()
  return pictureList
}
//parei aqui
export async function requestProducts(): Promise<ProductType[] | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/products`)
    if (!response.ok) throw new Error()
    const pictureList = await requestPictureProducts()
    const { data: products } = await response.json()
    return mergePictureAndProducts(products, pictureList)
  } catch (error) {
    console.log(error)
    return null
  }
}
