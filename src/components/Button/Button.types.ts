export interface IButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  name: string;
}
