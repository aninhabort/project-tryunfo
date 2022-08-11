import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  verifyInputs = () => {
    const { cardName, cardDescription,
      cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, isSaveButtonDisabled } = this.state;

    const maxNum = 210;
    const min = 0;
    const max = 90;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);

    const sum = attr1 + attr2 + attr3;

    const validTextInputs = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0;

    const validNumberInputs = sum <= maxNum && attr1 >= min && attr1 <= max
      && attr2 >= min && attr2 <= max && attr3 >= min && attr3 <= max;

    const validInputs = validNumberInputs && validTextInputs;

    if (validInputs && isSaveButtonDisabled) {
      this.setState({ isSaveButtonDisabled: false });
    }

    if (!validInputs && !isSaveButtonDisabled) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  handleInputChange = ({ target }) => {
    const { value, name, type, checked } = target;
    const valueName = type === 'checkbox' ? checked : value;

    this.setState({ [name]: valueName });
  }

  handleSaveButton = () => {
    const { cardName, cardDescription,
      cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo, deck } = this.state;

    const cards = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    deck.push(cards);

    this.setState({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  render() {
    this.verifyInputs();
    const { cardName, cardImage,
      cardTrunfo, cardAttr1,
      cardAttr2, cardAttr3,
      cardDescription,
      cardRare, hasTrunfo,
      isSaveButtonDisabled, deck } = this.state;
    return (
      <div className="body">
        <h1 className="titulo">Tryunfo</h1>
        <div className="forms">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleSaveButton }
            onInputChange={ this.handleInputChange }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        {
          deck.map((elem) => (
            <div key={ elem.cardName }>
              <Card
                cardName={ elem.cardName }
                cardDescription={ elem.cardDescription }
                cardAttr1={ elem.cardAttr1 }
                cardAttr2={ elem.cardAttr2 }
                cardAttr3={ elem.cardAttr3 }
                cardImage={ elem.cardImage }
                cardRare={ elem.cardRare }
                cardTrunfo={ elem.cardTrunfo }
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
