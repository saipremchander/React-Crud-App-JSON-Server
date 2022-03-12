import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-4">
      <ul className="customnav">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/students/">
            View Students
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/students/addstudent">
            Add Student
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink className="nav-link" to="/teachers/">
            View Teachers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/teachers/addteacher">
            Add Teacher
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
