import React from 'react';
import './Wrapper.css';

export const Wrapper = ({children, className = ''}) =>
  <div className={'Wrapper ' + className}>{children}</div>;