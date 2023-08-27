
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header"
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';


function App() {
  const equipos =[
    {
     titulo:"Programación",
     colorPrimario:"#57C278",
     colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
     },
     {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
     },
     {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
     },
     {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
     },
     {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
     },
     {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
     } 
  ];

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
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
      <MiOrg cambiarEstado={cambiarEstado} />
      {
        equipos.map((equipo) =>{
          return <Equipo datos={equipo} key={equipo.titulo} />
        })
      }
    </div>
  );
}

export default App;
