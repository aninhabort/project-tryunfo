import React from 'react';
import PropTypes from 'prop-types';
import CheckedTryunfo from './CheckedTryunfo';

import './form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, onInputChange,
      isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="cardDescription"
            rows="4"
            cols="50"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr01">
          Attr01
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr02">
          Attr02
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr03">
          Attr03
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            name="cardImage"
            type="text"
            data-testid="image-inputs"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {!hasTrunfo ? <CheckedTryunfo
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
          hasTrunfo={ hasTrunfo }
        /> : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
