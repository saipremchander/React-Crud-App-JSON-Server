import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Teachers = () => {
  const [teachers, setteacher] = useState([]);

  useEffect(() => {
    loadteachers();
  }, []);

  const loadteachers = async () => {
    const result = await axios.get("http://localhost:3001/teachers");
    setteacher(result.data.reverse());
  };

  const deleteteacher = async (id) => {
    await axios.delete(`http://localhost:3001/teachers/${id}`);
    loadteachers();
  };
  return (
    <div className="container mt-4">
      <h1>Teacher Details</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>age</th>
              <th>gender</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{teacher.name}</td>
                <td>{teacher.age}</td>
                <td>{teacher.gender}</td>
                <td>
                  <NavLink
                    to={`/teachers/${teacher.id}`}
                    className="btn btn-primary ml-1"
                  >
                    View
                  </NavLink>
                  <NavLink
                    to={`/teachers/edit/${teacher.id}`}
                    className="btn btn-outline-primary ml-1"
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    to=""
                    className="btn btn-danger ml-1"
                    onClick={() => deleteteacher(teacher.id)}
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;
