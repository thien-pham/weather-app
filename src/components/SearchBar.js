import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index';


class Searchbar extends Component {
	constructor(props){
		super(props);
		this.state = {
      term: 'Chicago, IL',
      isValid: false,
      isLoading: false,
      data: null,
      errorMessage: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
	}

  componentWillMount() {
    this.props.fetchWeather(this.state.term).then(forecast => {
      this.setState({
        isLoading: false,
        data: forecast.list
      });
    }, e => {
        this.setState({
        isLoading: false,
        errorMessage: e.message
      });
  });
  this.setState({term: ''})
};


	onInputChange(e){
		this.setState({ term: e.target.value });
	}

  validate(term) {
    const pattern = '[A-Za-z \t-]+,[ \t]?[A-Za-z]{2}$';
    if(term.match(pattern)) {
      this.setState({ isValid: true })
    } else {
      alert('Enter valid city, state please');
    }
  }

	onFormSubmit(e){
		e.preventDefault();
    this.validate(this.refs.searchBox.value);
		this.props.fetchWeather(this.refs.searchBox.value);
		this.setState({term: ''});
	}

	render() {
    if(this.state.errorMessage) {
      alert('Something went wrong');
    }

		return (
			<div className="weather-box1">
				<form onSubmit={this.onFormSubmit} className="weather-form">
          <h3>Get Weather</h3>
          <label htmlFor="form-control">Enter City, 2-Letter State</label>
					<input
            id='autocomplete'
						className="form-control"
						placeholder="e.g. Arlington, VA"
            ref='searchBox'
						value={this.state.term}
						onChange={this.onInputChange} />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Search</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(Searchbar);
