import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import { UserStorage } from "./contexts/userContext"
import "./App.scss"

const App = () => (
  <div className="app">
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
)

export default App
