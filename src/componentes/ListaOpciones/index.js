import './ListaOpciones.css';

const ListaOpciones =(props)=>{
    const equipos =["Programación","Front End", "Data Science","Devops", "UX y Diseño","Móvil", "Innovación y  Gestión"];

    //metodo map -> arreglo.map((equipo, index)=>{
    // return <option key>equipo<option/>
   // })

    return <div className="campo-select">
        <label>Opciones</label>
        <select required={props.required}>
        {equipos.map((equipo, index)=>{
            return <option key={index}>{equipo}</option>
        })}
        </select>
    </div>
}
export default ListaOpciones