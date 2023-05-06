import React from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ParallaxScroll from './Components/ParallaxScroll';
import Title from './Components/Title';

function App() {
  return (
    <>
      <Title/>
      <ParallaxScroll/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
