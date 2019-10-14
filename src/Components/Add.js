import React , {Component} from 'react'
import { connect } from "react-redux";

import { add_contact, getContacts } from "../actions/getAction";


class Add extends Component{
	state = {
		name: "", 
		contactNumber: "" 
	}

	onSubmit = e => {
		e.preventDefault();
		const { history, contacts } = this.props;

		    // get new id
	    var val = contacts[contacts.length - 1];
	    const id = val.id + 1;

	    const newState = {
	      ...this.state,
	      id
	    };

	    console.log('newState')
	    console.log(newState)
	    this.props.add_contact(newState);
	    history.push("/");

	}
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	

	render(){
		console.log(this.state)
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<input type = "text" placeholder = "Input Name" name = "name" onChange = {this.onChange} /> <br />
					<input type = "text" placeholder = "Input Number"  name = "contactNumber" onChange = {this.onChange}/> <br />
					<input type = "submit" value = "Submit"  />
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    // contact: state.contacts
  };
};

export default connect(
  mapStateToProps,
  { add_contact, getContacts }
)(Add);
