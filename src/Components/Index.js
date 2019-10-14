import React , {Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { getContacts } from "../actions/getAction";

class Index extends Component{
	render(){
		const {contacts} = this.props; 
		return(
			<div>
	        	 <h1>Contacts Management</h1> 
	        	 
	        	 	<Link to = {`/add`} > 
	        	 		<button>		ADD Contact  </button>
        	 		</Link>
        	 	
		         <hr />
		         {contacts.map(contact => (
		         	 <p>{contact.name} || {contact.contactNumber}</p>
		         ))}
	     </div>
		)
	}
}



// mapStateToProps : to get data from state to props
const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};



// mapDispatchToProps : to trigger the action 

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => {
      dispatch(getContacts);
    },
    // delete_contact: id => {
    //   dispatch(delete_contact(id));
    // }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Index); 