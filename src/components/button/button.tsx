import { ReactNode } from 'react';
import './button.css';

type ButtonProps = {
  children: ReactNode;
  theme?: 'green' | 'red' | 'blue';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  type = 'button',
  theme = 'green',
  disabled = false,
  children,
  onClick
}: ButtonProps) => {
  const buttonClass = `button button--theme--${theme}`;

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >{children}</button>
  );
};

export default Button;
