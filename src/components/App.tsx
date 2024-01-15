import { Button } from './Button/Button';
import { Statistic } from './Statistic/Statistic';

import css from './App.module.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Notifications } from './Notification/Notifications';

interface IProps {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends Component<{}, IProps> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    this.setState(
      prevState =>
        ({
          ...prevState,
          [name]: prevState[name as keyof IProps] + 1,
        } as IProps)
    );
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
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave your feedback">
          <div className={css.buttons_wrapper}>
            {options.map(el => (
              <Button key={el} name={el} handleClick={this.handleButton}>
                {el}
              </Button>
            ))}
          </div>
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percantage={Math.round(percantage)}
            />
          </Section>
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </div>
    );
  }
}
