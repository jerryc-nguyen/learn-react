import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './SearchBar'
import ContactList from './ContactList'

class ContactsApp extends Component {

  constructor() {
    super()

    this.state = {
      filterText: ""
    }
  }

  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText} /> 
      </div>
    )
  }

}

export default ContactsApp
