import { Component } from 'react';
import Buttons from './buttons/buttons';
import Statistic from './statistic/statistic';
import Section from './section/section';
import Notification from './notification/notification';
import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodButton = event => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralButton = event => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadButton = event => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? (good / total) * 100 : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percantage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title="Please leave your feedback">
          <Buttons
            handleGoodButton={this.handleGoodButton}
            handleNeutralButton={this.handleNeutralButton}
            handleBadButton={this.handleBadButton}
          ></Buttons>
        </Section>
        {total > 0 ? (
          <Section className={css.statistics_section} title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percantage={percantage.toFixed()}
            ></Statistic>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
