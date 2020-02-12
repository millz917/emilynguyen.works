import React from 'react';

const ImageList = [
    { id: 1, src: './background.jpeg', title: 'moneybusterthumbnail', description: 'moneybuster thumbnail' },
    { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
  ];
class ImageMoneyBuster extends React.Component{
  render(){
    return  <img id={ImageList[0].id} src={ImageList[0].src} alt={ImageList[0].description} />
  }
}

  export default ImageMoneyBuster;