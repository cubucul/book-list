import { ReactNode } from 'react';
import './button.css';

type ButtonProps = {
  children: ReactNode;
  theme?: 'green' | 'red' | 'blue';
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const Button = ({
  type = 'button',
  theme = 'green',
  children,
  onClick
}: ButtonProps) => {
  const buttonClass = `button button--theme--${theme}`;

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;
