import React from 'react';
import logo from '../logo.jpg';
import '../styles/style.css';

class Footer extends React.Component{
  render(){
    return (
      <footer class="text-center">
      <div class="container">
                       <div class="social-icons">
      <ul class="menu-simple">
        <li><a href="https://github.com/millz917"><i class="fa fa-github" aria-hidden="true"/></a></li>
        <li><a href="https://www.behance.net/emilyn1"><i class="fa fa-behance" aria-hidden="true"/></a></li>
        <li><a href="https://www.linkedin.com/in/emily-nguyen-5b3290181/"><i class="fa fa-linkedin" aria-hidden="true"/></a></li>
        <li><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"/></a></li>
      </ul>
    </div>&copy; 2020 by Emily Nguyen. All rights reserved.</div>
      </footer>
      
  );
}
}

export default Footer;
