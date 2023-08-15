import './style.css'


function AddTask(props){
    return(
        <>
        <input onChange={props.handleChange} type="text" placeholder="Ingresa una nueva tarea" value={props.inputTask}/>
        <button onClick={props.handleClick}>Agregar</button>
        </>
    )
};

export default AddTask