import React from 'react';
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

class Home extends React.Component{
 render(){ return(
        <main>
            <section id="Intro" className="full-width hero-holder">
                <div className="text-center vertical-center">
                    <h1 >Hello there :)</h1>
                    <p>My name is Emily and I am a product designer and developer </p>
                </div>
            </section >
         <About />
        <Project />
        <Contact />
     </main>
  );
 }
}

export default Home;
