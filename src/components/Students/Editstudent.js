import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const Editstudent = () => {
  const [student, setstudent] = useState({
    name: "",
    age: "",
    gender: "",
  });
  let navigate = useNavigate();
  const { id } = useParams();
  const { name, age, gender } = student;
  const onchangeHandler = (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadstudent();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/students/${id}`, student);
    navigate("/");
  };
  const loadstudent = async () => {
    const result = await axios.get(`http://localhost:3001/students/${id}`);
    setstudent(result.data);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
          type="text"
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
      <button className="btn btn-primary btn-block">Update Student</button>
    </form>
  );
};

export default Editstudent;
