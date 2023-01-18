import { AuthUserInfoProps, AuthUserProps } from "../types/types"
import { ErrorRequestType, request } from "./api"
import { loginRequestOptions, registerRequestOptions } from "./api_request_options"

export async function registerUser(
  email: string,
  password: string,
  username: string
): Promise<[AuthUserProps | null, ErrorRequestType | null]> {
  const [userData, error] = await request<AuthUserProps>(
    `/api/auth/local/register`,
    registerRequestOptions(email, password, username)
  )
  return [userData, error]
}

export async function loginUser(
  email: string,
  password: string
): Promise<[AuthUserProps | null, ErrorRequestType | null]> {
  const [userData, error] = await request<AuthUserProps>(
    `/api/auth/local`,
    loginRequestOptions(email, password)
  )
  return [userData, error]
}

export async function getUserAuthInfo(jwt: string): Promise<AuthUserProps | null> {
  const [userData] = await request<AuthUserInfoProps>(`/api/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  })
  if (!userData) return null
  console.log(userData)
  return {
    jwt: jwt,
    user: {
      ...userData,
    },
  }
}
