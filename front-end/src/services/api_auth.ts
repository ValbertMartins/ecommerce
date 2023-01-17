import { AuthUserProps } from "../types/types"
import { ErrorRequestType, request } from "./api"

// {
//   "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjczODE2NDA3LCJleHAiOjE2NzY0MDg0MDd9.zT0dQfn1EjSDEIgjU38LADutZWG2Ik0xPHdbbDbyoo8",
//   "user": {
//     "id": 3,
//     "username": "ca1t",
//     "email": "teste22@gmail.com",
//     "provider": "local",
//     "confirmed": true,
//     "blocked": false,
//     "createdAt": "2023-01-15T21:00:07.275Z",
//     "updatedAt": "2023-01-15T21:00:07.275Z"
//   }
// }

export async function registerUser(
  email: string,
  password: string,
  username: string
): Promise<[AuthUserProps | undefined, ErrorRequestType | undefined]> {
  const [userData, error] = await request<AuthUserProps>(`/api/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      username,
    }),
  })
  return [userData, error]
}

export async function loginUser(email: string, password: string) {
  const [userData, error] = await request<AuthUserProps>(`/api/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  })
  console.log(userData, error)
}
