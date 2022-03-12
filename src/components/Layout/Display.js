import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";

import Notfound from "../404";
import Addstudent from "../Students/Addstudent";
import Editstudent from "../Students/Editstudent";
import Studentview from "../Students/Viewstudent";
import Viewstudent from "../Students/Students";

import Viewteacher from "../Teachers/Teachers";
import Addteacher from "../Teachers/AddTeacher";
import Editteacher from "../Teachers/EditTeacher";
import Teacherview from "../Teachers/Viewteacher";

const Display = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="*" element={<Notfound />}></Route>
        <Route
          exact
          path="/students/addstudent"
          element={<Addstudent />}
        ></Route>
        <Route exact path="/students/" element={<Viewstudent />}></Route>
        <Route
          exact
          path="/students/edit/:id"
          element={<Editstudent />}
        ></Route>
        <Route exact path="/students/:id" element={<Studentview />}></Route>
        <Route exact path="/teachers/" element={<Viewteacher />}></Route>
        <Route
          exact
          path="/teachers/addteacher"
          element={<Addteacher />}
        ></Route>
        <Route
          exact
          path="/teachers/edit/:id"
          element={<Editteacher />}
        ></Route>
        <Route exact path="/teachers/:id" element={<Teacherview />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
