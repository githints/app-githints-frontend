import React from 'react';
import './SearchField.css';

export const SearchField = ({placeholder, className, ...props}) =>
  <label className={'SearchField ' + className}>
    <input type="text" placeholder={placeholder || 'Search...'} {...props}/>
  </label>;