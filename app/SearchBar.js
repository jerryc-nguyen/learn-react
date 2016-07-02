import React, { Component } from 'react'
import { render } from 'react-dom'

class SearchBar extends Component {
  handleChangeEvent(event) {
    this.props.onUserInput(event.target.value)
  }

  componentWillMount() {
    console.log("SearchBar: componentWillMount")
  }

  componentDidMount() {
    console.log("SearchBar: componentDidMount")
  }

  componentWillUnmount() {
    console.log("SearchBar: componentWillUnmount")
  }
  
  shouldComponentUpdate() {
    console.log("SearchBar: shouldComponentUpdate")
    return true
  }

  componentWillUpdate() {
    console.log("SearchBar: componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("SearchBar: componentDidUpdate")
  }
  
  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render() {

    console.log("SearchBar: render")

    return (
      <input type="search" placeholder="Search" 
        value={this.props.filterText} onChange={this.handleChangeEvent.bind(this)}/>
    )
  }
}

export default SearchBar
