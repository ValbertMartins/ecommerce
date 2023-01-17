import { createContext, ReactNode, useEffect, useState } from "react"
import { getUserAuthInfo } from "../services/api_auth"
import { AuthUserProps } from "../types/types"

type UserContextProps = {
  userAuth: AuthUserProps | null
  setUserAuth: React.Dispatch<React.SetStateAction<AuthUserProps | null>>
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userAuth, setUserAuth] = useState<AuthUserProps | null>(null)

  const jwt = localStorage.getItem("jwt")
  useEffect(() => {
    if (jwt) {
      getUserAuthInfo(jwt).then(userData => setUserAuth(userData))
    }
  }, [])
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>{children}</UserContext.Provider>
  )
}
