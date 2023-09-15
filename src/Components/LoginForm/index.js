/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../Forms/Button"
import Input from "../Forms/Input"
import Head from "../Head"
import useForm from "../../hooks/useForm"
import { UserContext } from "contexts/userContext"

const LoginForm = () => {
  const { userLogin } = useContext(UserContext)
  const username = useForm()
  const password = useForm()

  async function handleSubmit(event) {
    event.preventDefault()

    const isValidData = username.validate() && password.validate()

    if (isValidData) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
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
