import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const Button = ({
  type = 'button',
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;
