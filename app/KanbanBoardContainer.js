import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import KanbanBoard from './KanbanBoard'
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'any-string-you-like'// The Authorization is not needed for local server };
}

class KanbanBoardContainer extends Component {
  
  constructor() {
    super()

    this.state = {
      cards: []
    }
  }

  addTask(cardId, taskName) {
    console.log("addTask", taskName)
  }

  deleteTask(cardId, taskId, taskIndex) {
    console.log("deleteTask", taskId)
  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log("toggleTask", taskId)
  }

  componentDidMount() {
    fetch(API_URL+'/cards', {headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({cards: responseData});
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return <KanbanBoard cards={this.state.cards} taskCallbacks={{
      toggle: this.toggleTask.bind(this),
      add: this.addTask.bind(this),
      delete: this.deleteTask.bind(this) }} />
  }

}

export default KanbanBoardContainer;
