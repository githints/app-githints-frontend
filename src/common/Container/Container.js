import React from 'react';
import './Container.css';

export const Container = ({children, className = ''}) =>
  <div className={'Container ' + className}>{children}</div>;