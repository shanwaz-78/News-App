import "./App.css";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import AppRoutes from "./Routes/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
