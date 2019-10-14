
import {GET_CONTACTS, ADD_CONTACT} from '../actions/type'

const initialState = {
	contacts: [
		{
			"id" : 1, 
			"name" : "Adah",
			"contactNumber": "123-123-1234"
		},
		{
			"id" : 2, 
			"name" : "Addie",
			"contactNumber": "123-123-1234"
		}, 
		{
			"id" : 3, 
			"name" : "Addisyn",
			"contactNumber": "123-123-1234"
		},  
		{
			"id" : 4, 
			"name" : "Lester",
			"contactNumber": "69-69-6969"
		}, 
	]
}

export default function (state = initialState, action){
	switch(action.type){
		case GET_CONTACTS: 
			return {
				...state,
				contacts:action.payload
			}
		 case ADD_CONTACT:
	      return {
	        ...state,
	        contacts: [...state.contacts, action.payload]
	      };
		default: 
			return state; 
	}
}