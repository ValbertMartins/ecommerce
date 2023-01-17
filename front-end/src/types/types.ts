import { Dispatch, SetStateAction } from "react"

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

export type AuthUserInfoProps = {
  username: string
  email: string
}

export type AuthUserProps = {
  jwt: string
  user: AuthUserInfoProps
}
