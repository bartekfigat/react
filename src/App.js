import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import BlogPage from "./components/layout/BlogPage";
import TeamPage from "./components/layout/TeamPage";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <BlogPage />
          <Router path="/teamPage" component={TeamPage} exact />
        </div>
      </Router>
    );
  }
}

export default App;
