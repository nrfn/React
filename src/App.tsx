import React from 'react';
import logo from './logo.svg';
import './App.css';

const App : React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>React学習用</p>
        <button onClick={clickButton}>クリックイベント</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;

interface Style {
  color: string;
  fontSize: string;
  fontWeight: number;
}

const style: Style = {
  color: "#61dafb",
  fontSize: "30px",
  fontWeight: 900
};

const clickButton = (): void => {
  alert("ボタンが押されました。");
};