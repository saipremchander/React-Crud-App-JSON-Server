import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import Navbar from "./components/Layout/navbar";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Display from "./components/Layout/Display";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container w-100">
          <div className="row">
            <div className="col-sm-3">
              <Navbar />
            </div>
            <div className="col-sm-9 box-display mt-4">
              <Display />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
