import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "pages/Home/index.jsx"
import Login from "pages/Login/index.jsx"

import Footer from "components/Footer/index.jsx"
import Header from "components/Header/index.jsx"
import NotFound from "components/NotFound/index.jsx"

import { UserStorage } from "contexts/userContext"

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
