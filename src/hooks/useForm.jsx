import { useState } from "react"

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Informe um email válido",
  },
}

const useForm = (type) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  // eslint-disable-next-line no-shadow
  const validate = (value) => {
    if (type === false) return true

    if (value.length === 0) {
      setError("Preencha um valor.")
      return false
    }
    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    }
    setError(null)
    return true
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
