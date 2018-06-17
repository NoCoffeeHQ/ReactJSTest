import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div className="App h-100">
        <Header />

        <div className="app-main">
          <div className="row no-gutters h-100">
            <div className="col app-editor-wrapper">
              <Editor />
            </div>
            <div className="col app-preview-wrapper h-100">
              <Preview {...this.props.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
