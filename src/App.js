import React from 'react';
import logo from './logo.jpg';
import Header from './components/header'
import Footer from './components/footer'
import Card from "./components/card"
import Body from "./pages/Home"

class App extends React.Component{
  render(){
    return (
      <body>
      <Header />
      <div id="main-body">
     <Body />
          </div>
<Footer />
</body>
  );
}
}

export default App;
