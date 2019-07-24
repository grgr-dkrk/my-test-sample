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
      style={{
        border: '1px solid #000',
        display: 'block',
        marginTop: 10,
        padding: '10px 0',
        width: 280,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
