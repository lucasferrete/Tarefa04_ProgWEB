import React from 'react';
import Adicao from './Adicao';

class App extends React.Component {
  render(){
    const x = 7;
    const y = 23;
    return <Adicao x={x} y={y}/>;
  }
}

export default App;