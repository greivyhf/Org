import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
import { useState } from 'react';

const Formulario =()=>{

    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("Se ha dado click al boton")
    }
    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")

   return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto 
            titulo ="Nombre"
            placeholder="Ingresar el nombre" 
            required 
            valor={nombre} 
            actualizarValor={setNombre}
        />
        <CampoTexto
            titulo ="Puesto" 
            placeholder="Ingresar el puesto" 
            required
            valor={puesto} 
            actualizarValor={setPuesto}
        />
        <CampoTexto
            titulo ="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={setFoto}
        />
        <ListaOpciones required/>
        <Boton texto="Crear"/>
    </form>
   </section>
}

export default Formulario