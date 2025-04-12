
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogInUser } from './componentes/loginUser'
import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./componentes/Layout"
import Crud from "./componentes/Crud"
import Buscar from './componentes/buscar'


function App() {

  const [user, setUser]= useState(false)
  return (
  <div>

    <div>
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark"></nav>
          <Routes>
              <Route path="loginUser" element={<LogInUser />} />
              <Route path="*" element={<Layout />} />
              <Route path="crud" element={<Crud />} />
              <Route path="buscar" element={<Buscar/>} />
          </Routes>
      </BrowserRouter>
      </div>

  </div>
  )
}

export default App
