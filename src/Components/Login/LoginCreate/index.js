import React from "react"
import Button from "../../Forms/Button"
import Input from "../../Forms/Input"

const LoginCreate = () => {
  const handleSubmit = () => {}

  return (
    <section className="login animeLeft">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Cadastrar</h1>
        <Input label="Usuário" type="text" name="username" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate
