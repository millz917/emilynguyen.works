import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Body from "./pages/Home"
import listReactFiles from 'list-react-files'
function Read(){
  listReactFiles(__dirname).then(files => console.log(files));
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
