import React, { Component } from 'react';
import css from './notification.module.css';
export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return <div className={css.massageAboutNothing}>{message}</div>;
  }
}
