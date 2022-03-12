import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addstudent = () => {
  const [student, setstudent] = useState({
    name: "",
    age: "",
    gender: "",
  });
  let navigate = useNavigate();
  const { name, age, gender } = student;
  const onchangeHandler = (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/students", student);
    navigate("/");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="container">
      <div className="form-group mt-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(event) => onchangeHandler(event)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control form-control-lg"
          placeholder="Enter Your age"
          name="age"
          value={age}
          onChange={(event) => onchangeHandler(event)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your gender"
          name="gender"
          value={gender}
          onChange={(event) => onchangeHandler(event)}
        />
      </div>
      <button className="btn btn-primary btn-block">Add Student</button>
    </form>
  );
};

export default Addstudent;
