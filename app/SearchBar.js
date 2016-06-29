import React, { Component } from 'react'
import { render } from 'react-dom'

class SearchBar extends Component {
  handleChangeEvent(event) {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return (
      <input type="search" placeholder="Search" 
        value={this.props.filterText} onChange={this.handleChangeEvent.bind(this)}/>
    )
  }
}

export default SearchBar
