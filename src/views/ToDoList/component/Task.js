function Task(props) {
  return (
    <li className="d-flex list-group-item justify-content-between">
    <span>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={`taskElement-${props.index}`}
      />
      <label className="form-check-label" htmlFor={`taskElement-${props.index}`}>
        {props.task}
      </label>
    </span>
      <button type="button" class="btn btn-danger">Delete</button>
    </li>
  );
}

export default Task;
