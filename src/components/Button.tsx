import React from 'react';
import '../styles/button.css';

interface Props {
  color: string;
  size: string;
  isHollow: boolean;
  onClickButton: () => void;
  children: string;
}

const Button: React.FC<Props> = (props) => {
  let className = "";
  className += props.color;
  className += props.isHollow ? 'Hollow' : '';
  className += ' ';
  className += props.size;

  return (
    <button
      className={className}
      onClick={props.onClickButton}
    >
      {props.children}
    </button>
  );
};

export default Button;