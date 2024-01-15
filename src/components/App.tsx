import { Button } from './Button/Button';
import { Statistic } from './Statistic/Statistic';
import React, { FC, useState } from 'react';
import css from './App.module.css';
import { Section } from './Section/Section';
import { Notifications } from './Notification/Notifications';

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

export const App: FC = () => {
  const [statistic, setStatistic] = useState<IState>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = statistic;

  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    setStatistic(prevState => ({
      ...prevState,
      [name]: prevState[name as keyof IState] + 1,
    }));
  };

  const getStatistics = () => {
    const total = good + neutral + bad;
    const percantage = total > 0 ? (good / total) * 100 : 0;
    return {
      good,
      neutral,
      bad,
      total,
      percantage: Math.round(percantage),
    };
  };
  const statistics = getStatistics();

  const options = Object.keys(statistic);

  return (
    <div className={css.container}>
      <Section title="Please leave your feedback">
        <div className={css.buttons_wrapper}>
          {options.map(el => (
            <Button key={el} name={el} handleClick={handleButton}>
              {el}
            </Button>
          ))}
        </div>
      </Section>
      {statistics.total > 0 ? (
        <Section title="Statistics">
          <Statistic {...statistics} />
        </Section>
      ) : (
        <Notifications message="There is no feedback" />
      )}
    </div>
  );
};
