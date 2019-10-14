
import {GET_CONTACTS} from '../actions/type'

const initialState = {
	contacts: []
}

export default function (state = initialState, action){
	switch(action.type){
		case GET_CONTACTS: 
			return {
				...state,
				contacts:action.payload
			}
		default: 
			return state; 
	}
}