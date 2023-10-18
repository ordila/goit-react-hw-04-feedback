import css from './buttons.module.css';
import React from 'react';

const Buttons = ({
  handleGoodButton,
  handleNeutralButton,
  handleBadButton,
}) => {
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
};

export default Buttons;
