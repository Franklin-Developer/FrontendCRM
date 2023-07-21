import {useEffect} from 'react'
import { useState } from 'react'
import clienteAxios from '../../config/axios';


function Clientes () {

    const [Identificacion,setIdentificacion] = useState("");
    const [Nombres,setNombre] = useState("");
    const [Apellidos,setApellidos] = useState("");
    const [Correo,setCorreo] = useState("");
    const [Telefono,setTelefono] = useState("");

    
    const consultarApi = async () => {


        const crearclientes = await clienteAxios.post('/clientes',{

            Identificacion:Identificacion,
            Nombres:Nombres,
            Apellidos:Apellidos,
            Correo:Correo,
            Telefono:Telefono,

        });

        console.log(crearclientes);
    }

    useEffect(() => {

        consultarApi();

    });
    

    return (


        

        <div className='container'>
             <h2>Clientes</h2>

             <div className='row'>

                <div className='col-md-12'>

                    <label>Identificacion <input
                    
                    onChange={(event) => {

                        setIdentificacion(event.target.value);
                    }}
                    
                    
                    type="text" /></label><br></br>
                    <label>Nombres <input 
                    
                    onChange={(event) => {

                        setNombre(event.target.value);
                    }}
                    
                    type="text" /></label><br></br>
                    <label>Apellidos <input 
                    
                    onChange={(event) => {

                        setApellidos(event.target.value);
                    }}
                    
                    type="text" /></label><br></br>
                    <label>Correo <input 
                    
                    onChange={(event) => {

                        setCorreo(event.target.value);
                    }}
                    
                    type="email" /></label><br></br>
                    <label>Teléfono <input 
                    
                    onChange={(event) => {

                        setTelefono(event.target.value);
                    }}
                    
                    type="text" /></label><br></br>
                    <button >Registrar Cliente</button>
                    

                    
                </div>
             </div>

        </div>

       

       
    )
}

export default Clientes;