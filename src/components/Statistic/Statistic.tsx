import { FC } from 'react';
import { IStatisticProps } from './Statistic.types';

export const Statistic: FC<IStatisticProps> = ({
  good,
  neutral,
  bad,
  total,
  percantage,
}) => {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Percantage: {percantage}%</p>
    </div>
  );
};
