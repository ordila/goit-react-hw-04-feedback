import { FC } from 'react';
import { ISectionProps } from './Section.types';

export const Section: FC<ISectionProps> = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};
