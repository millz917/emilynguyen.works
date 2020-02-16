import React, {Component} from 'react';
import Logo from "../logo.jpg"

function RenderMenu(){
    let MenuName = ["Home", "About","Projects","Contact"];
    const Menu = MenuName.map(item => <NavItem name={item} />);
    return (
       <div className="navbar-menu">
         {Menu}
      </div>
    );
    }
  

class NavItem extends React.Component{
  render(){
     return (
      <a className="navbar-item" href={"#"+this.props.name}> {this.props.name}</a>
      );
    }
}

class Header extends React.Component{
  render(){
    return (
      <header className="head">
            <nav className="float-right navbar" role="navigation" aria-label="main navigation">
          
 <RenderMenu />
                </nav>
                
              <h2><img id="logo" src={Logo} alt="logo" /><span id="logo-text">  Emily Nguyen</span></h2>
        </header>
      
  );
}
}

export default Header;
