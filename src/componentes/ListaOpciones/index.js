import './ListaOpciones.css';

const ListaOpciones =(props)=>{
    const equipos =["Programación","Front End", "Data Science","Devops", "UX y Diseño","Móvil", "Innovación y  Gestión"];

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
        
            {equipos.map((equipo, index)=>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}
export default ListaOpciones