import axios from 'axios';

export function fetchWeather(location){
	return function(dispatch){
		axios.get('http://api.wunderground.com/api/98ecac85ff50cabb/conditions/q/' + location.state+ '/' + location.city + '.json')
		.then((response) => {
			dispatch({ type: "FETCH_WEATHER_FULFILLED", payload: response.data })
		})
		.catch((error) => {
			dispatch({ type: "FETCH_WEATHER_REJECTED", payload: error })
		})
	}
}