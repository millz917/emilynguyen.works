import React from 'react';

class Header extends React.Component{
  render(){
    return (
      <header class="head">
            <nav class="float-right navbar" role="navigation" aria-label="main navigation">
          
              <div class="navbar-menu">
                <a class="navbar-item" href="#Intro"> Home</a>
            <a class="navbar-item" href="#About">About</a>
            <a class="navbar-item" href="#Projects">Projects</a>
            <a class="navbar-item" href="#Contact">Contact</a>
            </div>
                </nav>
                
              <h2><img id="logo" src="../images/logo.jpg" alt="logo" /><span id="logo-text">  Emily Nguyen</span></h2>
        </header>
      
  );
}
}

export default Header;
