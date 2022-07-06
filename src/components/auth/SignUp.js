import React, { useState } from "react";

const SignUp = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    fName: "",
    lName: "",
  });
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="fName">First Name</label>
          <input type="text" id="fName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lName">Last Name</label>
          <input type="text" id="lName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
