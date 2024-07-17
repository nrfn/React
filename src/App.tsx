import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  const buttonFirstText: string = "ボタン１";
  const onClickButtonFirst = (): void => {
    alert(buttonFirstText + 'をクリックしました！');
  };

  return (
    <div className="App">
      <h1>Reactコース</h1>
      <Button
        color="blueberry"
        size="S"
        isHollow={false}
        onClickButton={onClickButtonFirst}
      >
      {buttonFirstText}
      </ Button>
    </div>
  );
};

export default App;