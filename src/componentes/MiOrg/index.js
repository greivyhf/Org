import './MiOrg.css'
// import { useState } from 'react'
const MiOrg = (props)=> {
        //estado - hook
        //useState
        // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [mostrar, actualizarNombre] = useState(true)
    // const manejarClick =() =>{
    //     actualizarNombre(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/btn-add.png" alt="Boton agregar" onClick={props.cambiarEstado} />
    </section>
}
export default MiOrg