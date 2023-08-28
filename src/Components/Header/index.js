import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Dogs } from "../../assets/dogs.svg"
import { UserContext } from "../../contexts/userContext"
import "./Header.scss"

const Header = () => {
  const context = React.useContext(UserContext)
  console.log(context)
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" aria-label="Dogs - Home" className="header__logo">
          <Dogs />
        </Link>
        <Link to="/login" className="header__login">
          Login / Criar
        </Link>
      </nav>
    </header>
  )
}

export default Header
