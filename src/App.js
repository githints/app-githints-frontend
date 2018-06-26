import React, {Component} from 'react';
import './App.css';
import {Header, Search, Wrapper, Container} from './common';

function logEvent(e) {
  console.log(e);
}

function logSuggestion(e) {
  console.log(e);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {suggestions: ['ciao', 'prova', 'test', 'testooo', 'ciaone', 'pippo']};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Wrapper className="App__hero">
          <Container>
            <h2>My <b>super</b> slogan GitHint</h2>
            <Search onChange={logEvent} onChoose={logSuggestion} suggestions={this.state.suggestions}/>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
