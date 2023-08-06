/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { TOKEN_POST, USER_GET } from "../../api"
import Button from "../Forms/Button"
import Input from "../Forms/Input"
import Head from "../Head"
import useForm from "../../hooks/useForm"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const isValidData = username.validate() && password.validate()

    if (isValidData) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      })

      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem("token", json.token)
      getUser(json.token)
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) getUser(token)
  }, [])

  return (
    <section>
      <Head title="Login" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
