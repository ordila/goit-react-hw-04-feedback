import { FC } from 'react';
import css from './Buttons.module.css';
import { IButtonProps } from './Button.types';

export const Button: FC<IButtonProps> = ({ handleClick, children, name }) => {
  return (
    <button
      name={name}
      className={css.button_item}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
};
