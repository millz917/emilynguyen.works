import React from 'react';
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

class Home extends React.Component{
 render(){ return(
    <body>
        <main>
            <section id="Intro" class="full-width hero-holder">
                <div class="text-center vertical-center">
                    <h1 >Hello there :)</h1>
                    <p>My name is Emily and I am a product designer and developer </p>
                </div>
            </section >
         <About />
        <Project />
        <Contact />
     </main>
 </body>
  );
 }
}

export default Home;
