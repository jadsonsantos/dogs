import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import { UserStorage } from "./contexts/userContext"
import "./styles/App.scss"

const App = () => (
  <div className="app">
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
)

export default App
