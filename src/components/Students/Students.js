import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Students = () => {
  const [students, setstudent] = useState([]);

  useEffect(() => {
    loadstudents();
  }, []);

  const loadstudents = async () => {
    const result = await axios.get("http://localhost:3001/students");
    setstudent(result.data.reverse());
  };

  const deletestudent = async (id) => {
    await axios.delete(`http://localhost:3001/students/${id}`);
    loadstudents();
  };
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <h1>Student Details</h1>
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
            {students.map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>
                  <NavLink
                    to={`/Students/${student.id}`}
                    className="btn btn-primary ml-1"
                  >
                    View
                  </NavLink>
                  <NavLink
                    to={`/Students/edit/${student.id}`}
                    className="btn btn-outline-primary ml-1"
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    to=""
                    className="btn btn-danger ml-1"
                    onClick={() => deletestudent(student.id)}
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

export default Students;
