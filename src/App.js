import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './Description/Description';
import Criteria from './Criteria/Criteria';
import AddCriteria from './Criteria/AddCriteria';
import Home from './Home/Home';
import Report from './NextPage/Report';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/description" element={<Description/>} />
        <Route path="/criteria" element={<Criteria/>} />
        <Route path="/add-criteria" element={<AddCriteria/>} />
        <Route path="/report" element={<Report/>} />

      </Routes>
    </Router>
  );
};

export default App;
