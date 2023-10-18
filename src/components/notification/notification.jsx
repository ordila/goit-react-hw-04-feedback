import css from './notification.module.css';

import React from 'react';

const Notification = ({ message }) => {
  return <div className={css.massageAboutNothing}>{message}</div>;
};

export default Notification;
