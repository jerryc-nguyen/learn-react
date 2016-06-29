import React, { Component } from 'react'
import CheckList from './CheckList'
import marked from 'marked';

class Card extends Component {

  constructor() {
    super()
    this.state = {
      showDetails: true
    }
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span dangerouslySetInnerHTML={{ __html: marked(this.props.description) }} />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      )
    }

    let cardClassName = this.state.showDetails ? "card__title card_title--is-open" : "card__title"

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor}/>
        <div className={cardClassName} onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    )
  }
}

export default Card;
