import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Editor />

        <Preview />
      </div>
    );
  }
}

export default App;
