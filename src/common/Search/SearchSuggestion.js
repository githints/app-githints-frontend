import React from 'react';
import './SearchField.css';

export const SearchSuggestion = ({suggestions = [], onChoose, className}) =>
  <ul className={'SearchSuggestion ' + className}>
    {suggestions.map((s, i) => <li onClick={() => onChoose(s)} key={i}>{s}</li>)}
  </ul>;