import {useEffect} from 'react'
import clienteAxios from '../../config/axios';


function Usuarios () {


    const consultarApi = async () => {


        const UsuariosConsulta = await clienteAxios.get('/usuarios');

        console.log(UsuariosConsulta);
    }

    useEffect(() => {

        consultarApi();

    });
    

    return (

        <h2>Usuarios</h2>
    )
}

export default Usuarios;