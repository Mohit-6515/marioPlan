import React, { useState } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
const CreateProject = (props) => {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fields);
    props.createProject(fields);
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Project Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(null, mapDispatchToProps)(CreateProject);
