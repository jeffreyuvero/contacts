import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./type";
// import axios from 'axios'


export const getContacts = () => {
	return {
		type : GET_CONTACTS
	}
}

export const add_contact = contacts => dispatch => {
  // return {
  //   type: ADD_CONTACT,
  //   payload: contacts
  // };
  dispatch({
    type: ADD_CONTACT,
    payload: contacts
  });
};

export const get_contact = id => {
  return {
    type: GET_CONTACT,
    payload: id
  };
};

export const update_contact = (id, contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: { id, contact }
  };
};

export const delete_contact = id => dispatch => {
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};