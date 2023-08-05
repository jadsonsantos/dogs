import "./Input.scss"

const Input = ({ label, type, name, value, onChange, onBlur, error }) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>
      {label}
    </label>
    <input
      className="input__field"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <p className="input__error">{error}</p>}
  </div>
)

export default Input
