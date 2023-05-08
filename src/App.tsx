import React from 'react';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {ParallaxScroll} from './Components/ParallaxScroll';
import ParallaxContent from './Components/ParallaxContent';
import ProgressBar from './Components/ProgressBar';

// images
import techimage from "./Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"
import codescreen from "./Assets/goran-ivos-iacpoKgpBAM-unsplash.jpg"
import laptop from "./Assets/kevin-bhagat-zNRITe8NPqY-unsplash.jpg"

const titletext = "Come with me and explore my developer journey"
const headingtext = "about me"
const headingtext2 = "My projects"

function App() {
  return (
    <>
      <ProgressBar />
      {ParallaxScroll(techimage, titletext)}
      {Main(headingtext)}
      <ParallaxContent />
      {ParallaxScroll(codescreen, "")}
      {Main(headingtext2, laptop)}
      <Footer/>
    </>
  );
}

export default App;