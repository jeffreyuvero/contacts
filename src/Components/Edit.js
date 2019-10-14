import React, { Component } from "react";
import { connect } from "react-redux";

import { update_contact, get_contact } from "../actions/getAction";

class Edit extends Component {
  state = {
    id: "",
    name: "",
    contactNumber: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    const selectedId = this.props.match.params.id;
    this.props.get_contact(selectedId);
    this.setState({
      id: this.props.contact[selectedId - 1].id,
      name: this.props.contact[selectedId - 1].name,
      contactNumber: this.props.contact[selectedId - 1].contactNumber
    });
    console.log("test");
    console.log(this.props);
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
    this.props.update_contact(newState);
    history.push("/");
  };
  render() {
    const { name, contactNumber } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Edit Contact! </h1>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <br />
          Contact number:
          <input
            type="text"
            name="contactNumber"
            value={contactNumber}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" value="Edit Contact" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contacts.contacts
  };
};

export default connect(
  mapStateToProps,
  { update_contact, get_contact }
)(Edit);
