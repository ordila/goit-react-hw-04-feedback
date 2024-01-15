import { FC } from 'react';
import css from './Notifications.module.css';
import { INotificationProps } from './Notifications.types';

export const Notifications: FC<INotificationProps> = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};
