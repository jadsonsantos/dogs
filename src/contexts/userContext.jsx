import { createContext, useMemo, useState } from "react"
import { TOKEN_POST, USER_GET } from "../api"

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = response.json()
    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password })
    const response = await fetch(url, options)
    const { token } = await response.json()

    window.localStorage.setItem("token", token)
    getUser(token)
  }

  const value = useMemo(() => ({
    data,
    setData,
    login,
    setLogin,
    loading,
    setLoading,
    error,
    setError,
    userLogin,
  }))

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
