import React from 'react';
import '../styles/button.css';

const Button: React.FC = () => {
  return (
    <button
      className="blueberry M"
      onClick={onClickButton}
    >
      React学習用
    </button>
  );
};
export default Button;

const onClickButton = (): void => {
  alert('React学習中');
};