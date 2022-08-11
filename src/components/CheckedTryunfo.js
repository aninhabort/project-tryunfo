import React from 'react';
import PropTypes from 'prop-types';

class CheckedTryunfo extends React.Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          value={ cardTrunfo }
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </div>

    );
  }
}

export default CheckedTryunfo;

CheckedTryunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
