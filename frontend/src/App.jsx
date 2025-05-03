
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogInUser } from './componentes/loginUser'
import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./componentes/Layout"
import Crud from "./componentes/Crud"
import Buscar from './componentes/./Buscar'
import Modifica from './componentes/Modifica';
import Crear from './componentes/Crear';


function App() {

  const [user, setUser]= useState(false)
  return (
  <div>

    <div>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <nav className="navbar navbar-expand navbar-dark bg-dark"></nav>
          <Routes>
              <Route path="loginUser" element={<LogInUser />} />
              <Route path="*" element={<Layout />} />
              <Route path="crud" element={<Crud />} />
              <Route path="buscar" element={<Buscar/>} />
              <Route path="modificar" element={<Modifica/>} />
              <Route path="crear" element={<Crear/>} />
          </Routes>
      </BrowserRouter>
      </div>

  </div>
  )
}



export default App
