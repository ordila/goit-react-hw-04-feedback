import React, { Component } from 'react';
import css from './buttons.module.css';
export default class Buttons extends Component {
  render() {
    const { handleGoodButton, handleNeutralButton, handleBadButton } =
      this.props;
    return (
      <div className={css.buttons_wrapper}>
        <button
          className={css.button_item}
          onClick={handleGoodButton}
          type="button"
        >
          Good
        </button>
        <button
          className={css.button_item}
          onClick={handleNeutralButton}
          type="button"
        >
          Neutral
        </button>
        <button
          className={css.button_item}
          onClick={handleBadButton}
          type="button"
        >
          Bad
        </button>
      </div>
    );
  }
}
