import * as React from 'react';

type InputProps = {
  inputId: string;
  label: string;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = props => {
  return (
    <>
      <div>
        <label htmlFor={props.inputId}>{props.label}</label>
        <input type={props.type || 'text'} onChange={props.handleChange} />
      </div>
    </>
  );
};

export default Input;
