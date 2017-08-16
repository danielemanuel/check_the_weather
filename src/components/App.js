import React from 'react';
import { connect } from 'react-redux';

import Weather from './Weather';
import LocationForm from './LocationForm';
import { fetchWeather } from '../actions/weatherActions';

@connect((store) => {
	return {
		weather: store.weather.weather
	};
})

export default class App extends React.Component{

	componentWillMount(){
		this.props.dispatch(fetchWeather({city: 'Boston', state: 'MA'}));
	}

	render(){

		const { weather } = this.props;

		return(
			<div>
				<h1>WeatherCheck:</h1>
				<Weather weather = { weather }/>
				<LocationForm onLocationChange= { this.onLocationChange.bind(this) } />
			</div>
		)
	}

	onLocationChange(location){
		this.props.dispatch(fetchWeather({city: location.city , state: location.state }));
	}
}