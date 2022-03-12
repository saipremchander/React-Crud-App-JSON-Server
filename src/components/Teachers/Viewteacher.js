import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Teacherview = () => {
  const [teacher, setteacher] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadteacher();
  }, []);
  const loadteacher = async () => {
    const res = await axios.get(`http://localhost:3001/teachers/${id}`);
    setteacher(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/teachers">
        back to Home
      </Link>
      <h1 className="display-4">Teacher Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {teacher.name}</li>
        <li className="list-group-item">age: {teacher.age}</li>
        <li className="list-group-item">Gender: {teacher.gender}</li>
      </ul>
    </div>
  );
};

export default Teacherview;
