export type ProductInfoType = {
  id: number
  attributes: {
    name: string
    price: number
    description: string
  }
}

export type PictureType = {
  id: number
  name: string
  url: string
}

export type ProductType = {
  id: number
  attributes: {
    name: string
    price: number
    description: string
  }
  picture: PictureType
}