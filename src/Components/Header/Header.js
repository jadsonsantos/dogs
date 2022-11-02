import React from "react"
// import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => (
  <header className="header">
    <nav className="menu container">
      {/* <Link to="/">Home</Link> */}
      <a href="/">Home</a>
      <a href="/login">Login / Criar</a>
    </nav>
  </header>
)

export default Header
