export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST'
export const getWeatherRequest = () => ({type: GET_WEATHER_REQUEST})
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const getWeatherSuccess = (restaurants) => ({type: GET_WEATHER_SUCCESS, restaurants})
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE'
export const getWeatherFailure = () => ({type: GET_WEATHER_FAILURE})

export const getWeather = location => dispatch => {
  dispatch(getWeatherRequest())
  fetch(`/api.openweathermap.org/data/2.5/forecast?q=${location}`).then(data => {
    if (!data.ok) {
      return dispatch(getWeatherFailure())
    }
    return data.json()
  }).then(data => {
    return dispatch(getWeatherSuccess(data))
  })
}

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
