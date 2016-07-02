import React, { PropTypes, Component } from 'react'
import Card from './Card'

class List extends Component {
  render() {
    var cards = this.props.cards.map((card) => (
      <Card key={card.id}
            id={card.id} 
            title={card.title}
            description={card.description}
            color= {card.color}
            tasks={card.tasks}
            taskCallbacks={this.props.taskCallbacks} />
    ));

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    )
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object), 
  taskCallbacks: PropTypes.object,
}

export default List;
