import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const Editteacher = () => {
  const [teacher, setteacher] = useState({
    name: "",
    age: "",
    gender: "",
  });
  let navigate = useNavigate();
  const { id } = useParams();
  const { name, age, gender } = teacher;
  const onchangeHandler = (e) => {
    setteacher({ ...teacher, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadteacher();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/teachers/${id}`, teacher);
    navigate("/");
  };
  const loadteacher = async () => {
    const result = await axios.get(`http://localhost:3001/teachers/${id}`);
    setteacher(result.data);
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
      <button className="btn btn-primary btn-block">Update Teacher</button>
    </form>
  );
};

export default Editteacher;
