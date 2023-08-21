import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario =()=>{

    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("Se ha dado click al boton")
    }

   return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo ="Nombre" placeholder="Ingresar el nombre" required/>
        <CampoTexto titulo ="Puesto" placeholder="Ingresar el puesto" required />
        <CampoTexto titulo ="Foto" placeholder="Ingresar enlace de foto" required />
        <ListaOpciones required/>
        <Boton texto="Crear"/>
    </form>
   </section>
}

export default Formulario