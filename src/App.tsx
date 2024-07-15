import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  const buttonFirstText: string = "ボタン１"; // 追記

  const onClickButtonFirst = (): void => {
    // alert('ボタン２をクリックしました！'); 削除
    alert(buttonFirstText + 'をクリックしました！'); // 追記
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
      </Button>
    </div>
  );
};

export default App;