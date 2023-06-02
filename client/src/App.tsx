import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './Screens/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/admin' element={<Blog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;