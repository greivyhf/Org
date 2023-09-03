import Colaborador from '../Colaborador'
import './Equipo.css'

const Equipo =(props)=>{
    //Destructuracion
    const{colorPrimario, colorSecundario,titulo} = props.datos
    const {colaboradores, eliminarColaborador} = props
    console.log(colaboradores.length)
    const estiloTitulo = {borderColor:colorPrimario }
    const estiloFondo = {backgroundColor:colorSecundario}

    return <> 
        {
            colaboradores.length > 0 &&
            <section className='equipo' style={estiloFondo} >
                <h3 style={estiloTitulo} >{titulo} </h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index)=> <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}eliminarColaborador={eliminarColaborador}  />
                    )
                    }
            
                </div>
            </section>
        }
    </>
}

export default Equipo