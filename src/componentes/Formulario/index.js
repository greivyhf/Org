import './Formulario.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
import { useState } from 'react';

const Formulario =(props)=>{
    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault()
    
        const datosAEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        // console.log(datosAEnviar)
        registrarColaborador(datosAEnviar)
    }
    const manejarNuevoEquipo =(x)=>{
        x.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }
   

   return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo 
            titulo ="Nombre"
            placeholder="Ingresar el nombre" 
            required 
            valor={nombre} 
            actualizarValor={setNombre}
        />
        <Campo
            titulo ="Puesto" 
            placeholder="Ingresar el puesto" 
            required
            valor={puesto} 
            actualizarValor={setPuesto}
        />
        <Campo
            titulo ="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={setFoto}
        />
        <ListaOpciones
            valor={equipo} 
            actualizarValor={setEquipo}
            required
            listaEquipos={props.equipos}
        />
        <Boton texto="Crear"/>
    </form>
    <form  onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
            titulo ="Titulo"
            placeholder="Ingresar el Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
        />
        <Campo
            titulo ="Color" 
            placeholder="Ingresar el color en hex" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
        /> 
        <Boton texto="Registrar equipo"/>
        </form>
   </section>
}

export default Formulario