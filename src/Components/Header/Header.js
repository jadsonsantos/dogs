import React from 'react';
import "./index.scss"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login / Criar</a>
      </nav>
    </header>
  )
};

export default Header
