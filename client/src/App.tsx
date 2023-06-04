import React from 'react';
import './App.css';
import SaveBlog from './Components/SaveBlog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './Screens/Users';
import Blog from './Components/Blog';
import Admin from './Screens/Admin';
import EditBlog from './Components/EditBlog';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/admin-blog' element={<SaveBlog/>}/>
          <Route path='/previewblog' element={<Blog/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/editblog' element={<EditBlog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;