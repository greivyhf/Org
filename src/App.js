
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header"
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import {v4 as uuid} from 'uuid'


function App() {
 

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/genesysaluralatam.png",
      nombre:"Genesys Rondon",
      puesto:"Desarrolladora de software e instructora",
    },
    {
      id: uuid(),
      equipo:"UX y Diseño",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora en Alura Latam",
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/christianpva.png",
      nombre:"Christian Velasco",
      puesto:"Head de Alura e Instructor",
    },
    {
      id: uuid(),
      equipo:"Innovación y Gestión",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Gonzalez",
      puesto:"Dev Fullstack",
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
     titulo:"Programación",
     colorPrimario:"#57C278",
     colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
     },
     {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
     },
     {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
     },
     {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
     },
     {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
     },
     {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
     } 
  ])


  const eliminarColaborador =(id)=>{
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  const actualizarColor =(color, id)=>{
    const equipoActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    }) 
    actualizarEquipos(equipoActualizados)
  }
  //ternario --> condicion ? SiEsTrue : SiEsFalse
  //Condicion && Muestra
 const cambiarEstado =()=>{
  actualizarMostrar(!mostrarFormulario)
 }

const registrarColaborador= (colaborador)=>{
 
 //Spread operator, estamos copiando algo, traemos colaborador y se lo copiamos a colaboradores
 actualizarColaboradores([...colaboradores, colaborador])
}
// Crear equipo
const crearEquipo =(nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario=== true? <Formulario/>: <div></div>} */}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
       }

      <MiOrg cambiarEstado={cambiarEstado} />
      {
        equipos.map((equipo) =>
          <Equipo datos={equipo} 
            key={equipo.id}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
          />
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
