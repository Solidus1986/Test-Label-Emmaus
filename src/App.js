import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './form/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Test Label Emmaüs
        </h4>  
      </header>
      <Form />
    </div>
  );
}

export default App;
