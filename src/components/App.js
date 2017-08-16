import React from 'react';

import Weather from './Weather';
import LocationForm from './LocationForm';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<h1>WeatherCheck:</h1>
				<Weather />
				<LocationForm />
			</div>
		)
	}
}