import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Students from "./components/students/Student";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";
import Navbar from "./components/layouts/Navbar";
import About from "./components/layouts/About";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/about" component={About} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/edit/:id" component={EditStudent} />
          </Switch>
        </div>
        <NavLink
          to="/students/add"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons"> </i>
        </NavLink>
      </Fragment>
    </Router>
  );
};

export default App;
