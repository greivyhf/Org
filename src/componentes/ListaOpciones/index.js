import './ListaOpciones.css';

const ListaOpciones =(props)=>{

    //metodo map -> arreglo.map((equipo, index)=>{
    // return <option key>equipo<option/>
   // })
   const manejarCambio=(e)=>{
    console.log("Cambio", e.target.value)
    props.actualizarValor(e.target.value)
   }

    return <div className="campo-select">
        <label>Opciones</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden > Seleccionar el equipo </option>
            required={props.required}
        
            {props.listaEquipos.map((equipo, index)=>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}
export default ListaOpciones