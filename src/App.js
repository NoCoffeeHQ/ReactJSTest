import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    const { title, subTitle, backgroundColor } = this.props.content;
    this.setState({
      data: {
        title,
        subTitle,
        backgroundColor
      }
    })
  }

  // static getDerivedStateFromProps = nextProps => {
  //   return { data: nextProps.content }
  // }

  // Get data from child via callback
  getData = data => {
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div className="App h-100">
        <Header />

        <div className="app-main">
          <div className="row no-gutters h-100">
            <div className="col app-editor-wrapper">
              <Editor
                definitions= {this.props.definitions}
                callback={this.getData}
                content={this.state.data}
              />
            </div>
            <div className="col app-preview-wrapper h-100">
              <Preview content={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
