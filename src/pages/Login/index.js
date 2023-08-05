import { Route, Routes } from "react-router-dom"
import LoginForm from "../../components/LoginForm"

const Login = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  </div>
)

export default Login
