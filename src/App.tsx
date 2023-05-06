import React from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {ParallaxScroll} from './Components/ParallaxScroll';
import Title from './Components/Title';

import techimage from "./Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"
const titletext = "Come with me and explore my developer journey"

function App() {
  return (
    <>
      {ParallaxScroll(techimage, titletext)}
      <Header/>
      <Main/>
      <Header/>
      {ParallaxScroll(techimage, "")}
      <Main/>
      <Footer/>
    </>
  );
}

export default App;