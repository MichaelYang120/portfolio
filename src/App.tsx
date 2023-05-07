import React from 'react';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {ParallaxScroll} from './Components/ParallaxScroll';

import techimage from "./Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg"
import codescreen from "./Assets/goran-ivos-iacpoKgpBAM-unsplash.jpg"
import ProgressBar from './Components/ProgressBar';

const titletext = "Come with me and explore my developer journey"
const headingtext = "about me"
const headingtext2 = "My projects"

function App() {
  return (
    <>
      <ProgressBar />
      {ParallaxScroll(techimage, titletext)}
      {Main(headingtext)}
      {ParallaxScroll(codescreen, "")}
      {Main(headingtext2)}
      <Footer/>
    </>
  );
}

export default App;