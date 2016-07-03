import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import KanbanBoard from './KanbanBoard'
import 'whatwg-fetch';
import 'babel-polyfill'
import update from 'react-addons-update'

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
    let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
    let newTask = { 
      id: Date.now(),
      name: taskName,
      done: false
    }

    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$push: [newTask]}
      }
    })

    this.setState({cards: nextState})

    fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask)
    })
    .then((reponse) => response.json())
    .then((responseData) => {
      newTask.id = responseData.id
      this.setState({cards: nextState})
    })
  }

  deleteTask(cardId, taskId, taskIndex) {
    console.log("deleteTask", taskId)
    let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$splice: [[taskIndex, 1]]}
      }
    })

    this.setState({cards: nextState})

    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS
    });

  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log("toggleTask", taskId)

    let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
    let newDoneValue;
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: { 
              $apply: (done) => {
                newDoneValue = !done
                return newDoneValue;
              }
            }
          }
        }
      }
    })
    this.setState({cards: nextState})

    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done:newDoneValue})
    });

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
