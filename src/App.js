import React from 'react';
import logo from './logo.jpg';
import Header from './components/header'
import Footer from './components/footer'
import './styles/style.css';

class Body extends React.Component{
 render(){ return(
    <body>
    <main>
         <section id="Intro" class="full-width hero-holder">
             <div class="text-center vertical-center">
                 <h1 >Hello there :)</h1>
                 <p>My name is Emily and I am a product designer and developer </p>
             </div>
         </section >
         <section id="About" class="container">
             <h2>About</h2>
             <p>A passionate creator who hopes to utilize her skills in design and coding to make a difference for others.</p>
             <h4 class="bubble">Why did I chose this career?</h4>
             <p class="answer"> I simply like seeing my idea comes to life and create a positive impact in my own community and everyday lives.</p>
             <h4 class="bubble">What am I learning or practising at the moment? </h4>
             <p class="answer">Besides from studying at university and working, I love learning new things and experimenting with new technology to find a more efficient way to create. </p>
             <h4 class="bubble">What makes you different from others? </h4>
             <p class="answer">I believe it is my ability to find learning fun. I love taking opportunities to try new things and I like finding better ways to do things after every failures. </p>
             <p>I think my passion to continuously get better and stay passion about what I do is what separates me from the rest. </p>
             <h4>Other unrelated facts</h4>
             <p>Well besides from studying and working, I love organising events and doing volunteering. I just find it so fun to meet new people and have good conversations. I feel like I learned so much from those small interactions.</p>
         </section>
         <section id="Projects" class="container">
             <h2>Projects</h2>
             <p>This is some of my favorite projects.</p>
             <div class="grid">
             <article id="project1" class="card">
             <a href="./pages/MoneyBuster.html">
             <div class="front-card">
             <img class="thumbnail" src="./images/portfolio-work/MoneyBuster/screen.png"/>
             </div>
             <div class="back-card">
             </div>
                 </a>
             </article>
             <article id="project2" class="card">
             <a href="./pages/TPC.html">
             <div class="front-card full-size">
             <img class="thumbnail" src="./images/portfolio-work/TPC/Intro.png"/>
             </div>
             <div class="back-card">
             </div>
                 </a>
             </article>
             </div>
     
         </section>
         <section id="Contact"  class="container">
             <h2>Contact</h2>
             <br/>
             <p> Emily Nguyen </p>
             <p> Emilynx917@gmail.com </p>
         </section>
     </main>
 </body>
  );
 }
}

class App extends React.Component{
  render(){
    return (
      <body>
      <Header />
     <Body />
<Footer />
</body>
  );
}
}

export default App;
