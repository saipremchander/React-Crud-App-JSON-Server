import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Studentview = () => {
  const [student, setstudent] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadstudent();
  }, []);
  const loadstudent = async () => {
    const res = await axios.get(`http://localhost:3001/students/${id}`);
    setstudent(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/Students">
        back to Home
      </Link>
      <h1 className="display-4">student Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {student.name}</li>
        <li className="list-group-item">age: {student.age}</li>
        <li className="list-group-item">Gender: {student.gender}</li>
      </ul>
    </div>
  );
};

export default Studentview;
