import React from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: '10px',
        }}
      >
        <button type="button" onClick={this.props.countGood}>
          Good
        </button>
        <button type="button" onClick={this.props.countNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.props.countBad}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  countGood: PropTypes.func.isRequired,
  countNeutral: PropTypes.func.isRequired,
  countBad: PropTypes.func.isRequired,
};
