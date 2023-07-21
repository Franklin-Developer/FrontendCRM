import { Fragment } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/layout/Header'
import Navegacion from './components/layout/Navegacion'

import Clientes from './components/clientes/Clientes'
import Cotizaciones from './components/cotizaciones/Cotizaciones'
import Productos from './components/productos/Productos'
import Usuarios from './components/usuarios/Usuarios'


function App() {
  

 
  return (
    <Router>
      <Fragment>
     <Header/>
      <div className="grid contenedor contenido-principal">
          <Navegacion/>
          <main className="caja-contenido col-9">
            <Routes>
              <Route path="/clientes" Component={Clientes}></Route>

              <Route path="/productos" Component={Productos}></Route>

              <Route path="/usuarios" Component={Usuarios}></Route>

              <Route path="/cotizaciones" Component={Cotizaciones}></Route>
            </Routes>
          </main>

      </div>   
    </Fragment>
  </Router>
  )
}

export default App
