import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  data: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
