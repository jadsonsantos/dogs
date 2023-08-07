import { Route, Routes } from "react-router-dom"
import LoginForm from "../../components/LoginForm"
import "./Login.scss"

const Login = () => (
  <div className="login">
    <div className="login__forms container">
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  </div>
)

export default Login
