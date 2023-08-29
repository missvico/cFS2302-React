//import './style.css'

function AddTask(props) {
  return (
    <form onSubmit={props.handleClick}>
          <div class="mb-3">
            <input
                onChange={props.handleChange}
                type="text"
                class="form-control"
                placeholder="Ingresa una nueva tarea"
                value={props.inputTask}
            />
          </div>
          <div class="mb-3">
            <button className="btn btn-primary">Agregar</button>
          </div>
    </form>
  );
}

export default AddTask;
