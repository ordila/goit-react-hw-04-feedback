import React, { Component } from 'react';
import { IStatisticProps } from './Statistic.types';

export class Statistic extends Component<IStatisticProps> {
  render() {
    const { good, neutral, bad, total, percantage } = this.props;

    return (
      <div>
        <p>Good : {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p>Percantage: {percantage}%</p>
      </div>
    );
  }
}
