import React from "react"
import Dogs from "../../assets/dogs.svg?react"
import "./Footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper container">
      <Dogs />
      <p>Dogs. Alguns direitos reserrvados.</p>
    </div>
  </footer>
)

export default Footer
