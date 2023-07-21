import {Link} from 'react-router-dom'

const Navegacion = () => {

    return(

        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">

                <Link to={'/clientes'} className='clientes'>Clientes</Link>

                <Link to={'/productos'} className='productos'>Productos</Link>

                <Link to={'/usuarios'} className='usuarios'>Usuarios</Link>

                <Link to={'/cotizaciones'} className='cotizaciones'>Cotizaciones</Link>
                
            </nav>
        </aside>

    );
}

export default Navegacion;