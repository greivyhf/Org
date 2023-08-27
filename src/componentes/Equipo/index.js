import Colaborador from '../Colaborador'
import './Equipo.css'

const Equipo =(props)=>{
    //Destructuracion
    const{colorPrimario, colorSecundario,titulo} = props.datos
    const {colaboradores} = props

    const estiloTitulo = {borderColor:colorPrimario }
    const estiloFondo = {backgroundColor:colorSecundario}

    return <section className='equipo' style={estiloFondo} >
        <h3 style={estiloTitulo} >{titulo} </h3>
        <div className='colaboradores'>
            {
                colaboradores.map((colaborador, index)=> <Colaborador datos={colaborador} key={index} />
)
            }
       
        </div>
    </section>
}

export default Equipo