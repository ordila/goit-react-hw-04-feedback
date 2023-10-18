import React, { useState } from 'react';
import Buttons from './buttons/buttons';
import Statistic from './statistic/statistic';
import Section from './section/section';
import Notification from './notification/notification';
import css from './App.module.css';

export const App = () => {
  const [bad, setOnBad] = useState(0);
  const [good, setOnGood] = useState(0);
  const [neutral, setOnNeutral] = useState(0);
  const handleGoodButton = event => {
    setOnGood(good + 1);
  };
  const handleNeutralButton = event => {
    setOnNeutral(neutral + 1);
  };

  const handleBadButton = event => {
    setOnBad(bad + 1);
  };
  const total = good + bad + neutral;
  const percantage = (good / total) * 100;
  return (
    <div className={css.container}>
      <Section title="Please leave your feedback">
        <Buttons
          handleGoodButton={handleGoodButton}
          handleNeutralButton={handleNeutralButton}
          handleBadButton={handleBadButton}
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
};
