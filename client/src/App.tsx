import React from 'react';
import './App.css';
import SaveBlog from './Components/SaveBlog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './Screens/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/admin' element={<SaveBlog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;