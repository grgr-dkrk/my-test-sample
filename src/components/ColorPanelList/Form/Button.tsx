import * as React from 'react';

type ButtonProps = {
  handleClick: () => void;
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      type="button"
      aria-label={props.ariaLabel || undefined}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
