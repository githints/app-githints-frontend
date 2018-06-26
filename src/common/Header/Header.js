import React, {Component} from 'react';
import {Wrapper, Container} from '../index';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Wrapper>
          <Container className="Header__content">
            <h1>GitHints</h1>
          </Container>
        </Wrapper>
      </header>
    );
  }
}