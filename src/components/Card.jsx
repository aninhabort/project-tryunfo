import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardImage,
      cardTrunfo, cardAttr1,
      cardAttr2, cardAttr3,
      cardDescription, cardRare } = this.props;
    return (
      <div className="pre-visualizacao">
        <h2>Pré-visualização</h2>
        <div className="card-background-branco">
          <div className="card-background-verde">
            <p className="card-title" data-testid="name-card">{ cardName }</p>
            <div className="card-image">
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            </div>
            <p
              className="card-description"
              data-testid="description-card"
            >
              { cardDescription }

            </p>
            <p className="card-attr" data-testid="attr1-card">{ cardAttr1 }</p>
            <p className="card-attr" data-testid="attr2-card">{ cardAttr2 }</p>
            <p className="card-attr" data-testid="attr3-card">{ cardAttr3 }</p>
            <p className="card-attr" data-testid="rare-card">{ cardRare }</p>
            <div className="card-super-trunfo">
              { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
