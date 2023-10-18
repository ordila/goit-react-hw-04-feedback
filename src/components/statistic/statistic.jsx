import React, { Component } from 'react';

export default class Statistic extends Component {
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
