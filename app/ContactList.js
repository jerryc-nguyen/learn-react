import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import ContactItem from './ContactItem'

class ContactList extends Component {

  componentWillMount() {
    console.log("ContactList: componentWillMount")
  }

  componentDidMount() {
    console.log("ContactList: componentDidMount")
  }

  componentWillUnmount() {
    console.log("ContactList: componentWillUnmount")
  }
  
  shouldComponentUpdate() {
    console.log("ContactList: shouldComponentUpdate")
    return true
  }

  componentWillUpdate() {
    console.log("ContactList: componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("ContactList: componentDidUpdate")
  }

  render() {

    console.log("ContactList: render")
    
    let filteredContacts = this.props.contacts.filter((contact) => (
      contact.name.indexOf(this.props.filterText) != -1
    ))

    let listContact = filteredContacts.map((contact) => (
      <ContactItem  key={contact.email}
                    name={contact.name}
                    email={contact.email} />
    ))

    return (
      <ul>{listContact}</ul>
    )

  }
}

export default ContactList
