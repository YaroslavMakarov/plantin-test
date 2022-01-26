import axios from 'axios';

type Response = {
	data: {
		main: {
			temp: number,
		},
	},
}

export const fetchTemperatureByLocation = (id: number, appid: string) => 
	axios.get<any, Response>('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			id,
			appid,
		}
	});