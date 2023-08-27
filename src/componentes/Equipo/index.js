import './Equipo.css'

const Equipo =(props)=>{
    //Destructuracion
    const{colorPrimario, colorSecundario,titulo} = props.datos

    const estiloTitulo = {borderColor:colorPrimario }
    const estiloFondo = {backgroundColor:colorSecundario}

    return <section className='equipo' style={estiloFondo} >
        <h3 style={estiloTitulo} >{titulo} </h3>
        <div className='colaboradores'>

        </div>
    </section>
}

export default Equipo