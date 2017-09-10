import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // set initial sate
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // all "on" event change come with an event argument
  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // don't submit the form on enter or submit (prevent from post request and refresh)
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecat in the city of your choice"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// mapDispatchToProps always as 2nd argument
export default connect(null, mapDispatchToProps)(SearchBar);
