import React, { Component } from 'react';

const Header = ({title}) => (
  <h1>{title}</h1>
);

class App extends Component {
  render() {
    return (
      <Header title={'Welcome to Githints'} />
    );
  }
}

export default App;
