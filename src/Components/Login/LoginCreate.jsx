/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Button from "components/Forms/Button"
import Input from "components/Forms/Input"
import useForm from "hooks/useForm"

const LoginCreate = () => {
  const username = useForm
  const email = useForm("email")
  const password = useForm("password")

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="login animeLeft">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Cadastrar</h1>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="text" name="password" {...password} />

        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate
