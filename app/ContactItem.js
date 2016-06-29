import React, { Component } from 'react'
import { render } from 'react-dom'

class ContactItem extends Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.email}</li>
    )
  }
}

export default ContactItem
