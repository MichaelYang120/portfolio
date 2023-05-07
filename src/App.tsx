import React from 'react';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {ParallaxScroll} from './Components/ParallaxScroll';
import Title from './Components/Title';

import techimage from "./Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"
import codescreen from "./Assets/goran-ivos-iacpoKgpBAM-unsplash.jpg"

const titletext = "Come with me and explore my developer journey"
const headingtext = "about me"
const headingtext2 = "My projects"

function App() {
  return (
    <>
      {ParallaxScroll(techimage, titletext)}
      {Main(headingtext)}
      {ParallaxScroll(codescreen, "", "40vh")}
      {Main(headingtext2)}
      <Footer/>
    </>
  );
}

export default App;