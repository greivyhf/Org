
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header"
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  //ternario --> condicion ? SiEsTrue : SiEsFalse
  //Condicion && Muestra
 const cambiarEstado =()=>{
  actualizarMostrar(!mostrarFormulario)
 }
  return (
    <div>
      <Header/>
      {/* {mostrarFormulario=== true? <Formulario/>: <div></div>} */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarEstado={cambiarEstado} />
    </div>
  );
}

export default App;
