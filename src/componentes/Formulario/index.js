import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario =()=>{
   return <section className='formulario'>
    <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto/>
    </form>
   </section>
}

export default Formulario