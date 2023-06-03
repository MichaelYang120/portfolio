import React from 'react';
import './App.css';
import SaveBlog from './Components/SaveBlog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './Screens/Users';
import Blog from './Components/Blog';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/adminblog' element={<SaveBlog/>} />
          <Route path='/previewblog' element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;