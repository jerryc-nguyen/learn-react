import React, { Component } from 'react'
import { render } from 'react-dom'
import ContactItem from './ContactItem'

class ContactList extends Component {
  render() {

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
