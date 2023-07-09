import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//File Imports
import './App.css';
import Home from './components/pages/home/Home';
import CreateTask from './components/pages/create-task/CreateTask';

function App() {

  return (
    <div className='App-body'>
      <div className='nav-bar'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/createtask' element={<CreateTask />} ></Route>

          </Routes>
        </Router>
      </div>

    </div >
  );
}

export default App;
