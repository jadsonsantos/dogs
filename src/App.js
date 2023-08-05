import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import "./App.scss"

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
)

export default App
