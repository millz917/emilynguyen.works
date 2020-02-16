import React from 'react';
import Card from './card'

class Gallery extends React.Component{
  render(){
    return (
      <Card src ="./images/TPC/screen.png" name="MoneyBuster" link="./MoneyBuster"/>
    );
  }
}

class Project extends React.Component{
  render(){
    return (
       <section id="Projects" class="container">
      <h2>Projects</h2>
      <p>This is some of my favorite projects.</p>
      <div class="grid">
      <article id="project1" class="card">
      <a href="./pages/MoneyBuster.html">
      <div class="front-card">
      <img class="thumbnail" src="./images/MoneyBuster/screen.png"/>
      </div>
      <div class="back-card">
      </div>
          </a>
      </article>
      <article id="project2" class="card">
      <a href="./pages/TPC.html">
      <div class="front-card full-size">
      <img class="thumbnail" src="./images/TPC/Intro.png"/>
      </div>
      <div class="back-card">
      </div>
          </a>
      </article>
      </div>

  </section>
  );
}
}

export default Project;
