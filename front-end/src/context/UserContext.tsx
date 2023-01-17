import { createContext, ReactNode, useState } from "react"
import { AuthUserProps } from "../types/types"

type UserContextProps = {
  userAuth: AuthUserProps | null
  setUserAuth: React.Dispatch<React.SetStateAction<AuthUserProps | null>>
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userAuth, setUserAuth] = useState<AuthUserProps | null>(null)
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>{children}</UserContext.Provider>
  )
}
