import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import {ParallaxScroll} from './Components/ParallaxScroll';
import ParallaxContent from './Components/ParallaxContent';
import ProgressBar from './Components/ProgressBar';

// images
import techimage from "./Assets/ramiro-mendes-CjS3QsRuxnE-unsplash.jpg";
import codescreen from "./Assets/kevin-bhagat-zNRITe8NPqY-unsplash.jpg";
// import lights from "./Assets/goran-ivos-iacpoKgpBAM-unsplash.jpg";
import lights from "./Assets/georgie-cobbs-muOHbrFGEQY-unsplash.jpg";
import aboutmeimg from "./Assets/altumcode-FoTs3ntRoIs-unsplash.jpg"
import Blog from './Components/Blog';
// import aboutmeimg from "./Assets/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"

const titletext = "Come with me and explore my developer journey";

const aboutmetext = ["As a self-taught software engineer/developer, I have always been passionate about learning and expanding my knowledge in the field. Since I began my journey as a software engineer, I have relied on my peers and colleagues to help me grow and improve my skills. Their support and guidance have been invaluable in my development as an engineer.",

"One thing I am particularly excited about is learning React on the side. React is an exciting and innovative technology that has taken the software industry by storm. I am eager to master it and add it to my toolbox of skills. By learning React, I hope to gain a deeper understanding of modern web development and build innovative, powerful applications.",

"My passion for programming began when I was studying another field in college. After taking a course in computer programming, I discovered that I was deeply interested in coding and software development. Since then, I have dedicated myself to learning everything I can about software engineering. I believe this self-taught approach has given me a unique perspective that has helped me be successful in this field.",

"Throughout my career, I have worked on a variety of projects, including web applications, mobile applications, and enterprise software systems. I am particularly interested in using emerging technologies to solve complex problems and create new opportunities. I am always eager to take on new challenges and explore new frontiers in the world of software engineering.",

"Ultimately, what motivates me as a software engineer is the opportunity to make a difference. I believe that software has the power to transform lives and change the world, and I am committed to using my skills and knowledge to make a positive impact. Whether it's developing a new application or improving an existing system, I am passionate about creating software that makes a difference in people's lives."]

function App() {
  return (
    <>
      <ProgressBar/>
      {ParallaxScroll(techimage, titletext)} {/* landing page, with text */} 
      {/* parallaxconente is a divided section */}
      {ParallaxContent("about me", aboutmetext, "100vh", aboutmeimg)}
      <div className='projectscontainer'>
      {ParallaxContent("my projects", null, "170vh", lights)}

      </div>
      {/* {ParallaxContent("Test block", null, "100vh", lights)} */}
      {ParallaxScroll(codescreen, "")}
      {/* {Main(headingtext2, laptop)} */}
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;