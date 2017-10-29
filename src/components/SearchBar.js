import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { getWeather } from '../actions'

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
    const location = this.locationInput.value;
    this.form.reset();
    return this.props.dispatch(getWeather(location));
  }

  render() {
    return (
      <div>
        <h1>Get Weather</h1>
        <form onSubmit={e => this.onSearch(e)}>
          <FormGroup controlId="location">
            <ControlLabel>City/State</ControlLabel>
            <FormControl
              type="text"
              placeholder="New York, NY"
              // value={this.props.inputValue}
              ref={input => this.locationInput = input} />
            </FormGroup>
            <Button bsStyle="primary" className="submit_sms" type="submit">Enter</Button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({

 })

export default connect(mapStateToProps)(SearchBar);
