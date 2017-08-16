const initialState = {
	weather: {},
	fetching: false,
	fetched: false, 
	error: null
}

export default function reducer(state = initialState, action) {
	switch(action.type){
		case "FETCH_WEATHER": {
			return { ...state, fetching: true }
		}
		case 'FETCH_ERROR_REJECTED': {
			return { ...state, fetching: false, error: action.payload }
		}
		case "FETCH_WEATHER_FULFILLED": {
			return { ...state, teching: false, fetched: true, weather: action.payload }
		}
	}
	return state;
}