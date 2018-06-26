import React, {Component} from 'react';
import {SearchField, SearchSuggestion} from './index';
import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: props.suggestions,
      filteredSuggestions: [],
    }
  }

  _resetValue() {
    this.setState({value: '', filteredSuggestions: []})
  }

  _emitOnChange() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  _emitOnChoose() {
    if (this.props.onChoose) {
      this.props.onChoose(this.state);
    }
  }

  onFocusField = () => {
    this.setState(({suggestions}) => ({
      filteredSuggestions: suggestions,
    }));
  };

  onChangeValue = (e) => {
    const value = e.target.value;
    const filteredSuggestions = this.state.suggestions.filter(i => i.includes(value));
    this.setState({filteredSuggestions, value}, this._emitOnChange);
  };

  onChooseValue = (value) => {
    this.setState({value, filteredSuggestions: []}, this._emitOnChoose);
  };

  onClickOut = () => {
    this._resetValue();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.suggestions !== prevProps.suggestions) {
      this.setState({suggestions: this.props.suggestions});
    }
  }

  hasVisibleSuggestions() {
    return this.state.filteredSuggestions.length > 0;
  }

  render() {
    return (
      <div className={'Search ' + (this.hasVisibleSuggestions() ? 'Search--open' : '')}>
        <div className="Search__container">
          <SearchField
            className="Search__field"
            onFocus={this.onFocusField}
            onChange={this.onChangeValue}
            value={this.state.value}/>
          {
            this.hasVisibleSuggestions() && <SearchSuggestion
              className="Search__suggestions"
              onChoose={this.onChooseValue}
              suggestions={this.state.filteredSuggestions}/>
          }
        </div>
        {this.hasVisibleSuggestions() && <div className="Search__backdrop" onClick={this.onClickOut}/>}
      </div>
    )
  }
}