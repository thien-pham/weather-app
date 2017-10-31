import { FETCH_WEATHER } from '../actions/index';

export default function ( state = {}, action ) {
	switch(action.type) {
		case FETCH_WEATHER:
		  return Object.assign({}, action.payload.data);
    default:
      return state;
    }
}
