import React from 'react';

class Card extends React.Component{
  render(){
    return (
      <article class="card">
      <a href={this.props.link}>
      <div class="front-card">
      <img class="thumbnail" src={this.img.link}/>
    <h4>{this.props.name}</h4>
      </div>
      <div class="back-card">
      </div>
          </a>
      </article>
      
  );
}
}

export default Card;
