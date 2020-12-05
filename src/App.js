import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ParagrafComponent from './ParagrafComponent'

import NowyComponentClassowy from './nowyComponentClassowy'

function App() {
  // 
  const arr = ['Jestem z tablicy1', "jestem z tablicy2", "jestm z tablicy3", "jestem z tablicy4"]
  const arr2 = ['kto', "co", 'kiedy']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* 
      <ListChildren napis="Przerwa"></ListChildren>
      <ListChildren napis="Jestem nr. 1 "></ListChildren>
      <ListChildren napis="Jestem nr. 2 "></ListChildren> */}
      {/* <ParagrafComponent text={arr}></ParagrafComponent>
      <ParagrafComponent text={arr2}></ParagrafComponent>
      <a hfer=""></a> */}
      <NowyComponentClassowy tablicaZRodzica={arr} kolejnyProps="jakiś napis" props3="qwerty"></NowyComponentClassowy>
    </div>
  );
}

export default App;
