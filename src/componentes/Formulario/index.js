import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario =()=>{
   return <section className='formulario'>
    <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo ="Nombre" placeholder="Ingresar el nombre"/>
        <CampoTexto titulo ="Puesto" placeholder="Ingresar el puesto" />
        <CampoTexto titulo ="Foto" placeholder="Ingresar enlace de foto" />
    </form>
   </section>
}

export default Formulario