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

  componentWillMount() {
    console.log("ContactsApp: componentWillMount")
  }

  componentDidMount() {
    console.log("ContactsApp: componentDidMount")
  }

  componentWillUnmount() {
    console.log("ContactsApp: componentWillUnmount")
  }

  shouldComponentUpdate() {
    console.log("ContactsApp: shouldComponentUpdate")
    return true
  }

  componentWillUpdate() {
    console.log("ContactsApp: componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("ContactsApp: componentDidUpdate")
  }

  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render() {
    console.log("ContactsApp: render")

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText} /> 
      </div>
    )
  }

}

export default ContactsApp;
