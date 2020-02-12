import React from 'react';

const ImageList = [
    { id: 1, src: './MoneyBuster/Feature.gif', title: 'moneybusterthumbnail', description: 'moneybuster thumbnail' },
    { id: 2, src: './images/TPC/Intro.png', title: 'foo', description: 'bar' },
    { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
  ];
const HTMLItems = []

for(const [index, value] of ImageList.entries()){
  HTMLItems.push(<img id={ImageList[{index}].id} src={ImageList[{index}].src} alt={ImageList[{index}].description} />)
}
class ImageMoneyBuster extends React.Component{
  constructor(props){}
  render(){
    return  (
      {HTMLItems}
    )
  }
}

  export default ImageMoneyBuster;