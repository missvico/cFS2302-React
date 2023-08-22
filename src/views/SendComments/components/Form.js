function Form({handleChange, handleSubmit, userData}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={userData.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">
          Mobile Phone
        </label>
        <input 
            type="text"
            className="form-control"
            id="mobile"
            onChange={handleChange}
            value={userData.mobile}

             />
      </div>
      <div className="mb-3">
        <label htmlFor="comments">Comments</label>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="comments"
          onChange={handleChange}
          value={userData.comments}
        ></textarea>
      </div>
      <div className="mb-3">
        <select className="form-select" id="occupation" aria-label="Please select occupation" onChange={handleChange} value={userData.occupation}>
          <option value="sofwareDev">Software Developer</option>
          <option value="projectManager">Project Manager</option>
          <option value="designer">UX/UI Designer</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <input checked={userData.updates} type="checkbox" className="form-check-input" id="updates" onChange={handleChange} />
        <label className="form-check-label" htmlFor="updates">
          I wish to receive updates
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>

    
  );
}

export default Form;
