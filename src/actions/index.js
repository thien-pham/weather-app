import axios from 'axios';

const API_KEY = '585e670f55ee9b114fa2f1f2731177d9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?&appid=${API_KEY}&units=imperial&cnt=5`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
