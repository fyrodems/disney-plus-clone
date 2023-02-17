import React from "react";
import Header from "./components/header";
import Home from "./components/homePage";
import Detail from "./components/detailPage";
import Login from "./components/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route export path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
