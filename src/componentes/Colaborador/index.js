import './Colaborador.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Colaborador =(props)=>{
    const {foto, nombre, puesto, equipo} = props.datos
    
    const {colorPrimario, eliminarColaborador} = props
    console.log("colorPrimario ",colorPrimario)
    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar'  onClick={eliminarColaborador}/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/> 
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}
export default Colaborador