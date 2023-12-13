import "./Button.scss"

const Button = ({ children, ...props }) => (
  <button {...props} className="button" type="button">
    {children}
  </button>
)

export default Button
