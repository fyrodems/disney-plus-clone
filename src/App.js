import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/homePage';
import Detail from './components/detailPage';
import Login from './components/loginPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/detail" element={<Detail/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;
