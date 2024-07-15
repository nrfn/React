import React from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

const App : React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={style}
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
  fontWeight: string;
  textDecoration: string;
  textShadow: string;
}

const style: Style = {
  color: "#61dafb",
  fontSize: "30px",
  fontWeight: "900",
  textDecoration: "unset",
  textShadow: "1px 1px 2px"
};