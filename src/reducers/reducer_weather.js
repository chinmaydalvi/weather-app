import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {

	switch(action.type){

		case FETCH_WEATHER:
			// dont mutates the current state instead of that create 
			// new state by taking existing state data
			return [action.payload.data, ...state];
	
	}
	return state;
}