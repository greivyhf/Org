// import { useState } from 'react'
import './Campo.css'

const Campo =(props)=>{
  
    const {type = "text"} = props
    console.log(type)
    const placeholderModificado = `${props.placeholder}...`
    const manejarValor=(e)=>{
        props.actualizarValor(e.target.value)
    }
    
    return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarValor} 
                type={type}
            />
    </div>
}

export default Campo