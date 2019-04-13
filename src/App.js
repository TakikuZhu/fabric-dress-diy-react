import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './resources/css/common.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <h1>UTme!基于react+fabricjs重构的页面目录</h1>
        <ul>
          <ol><Link to="/text-page">文本页</Link></ol>
          <ol><Link to="/text-page">文本页</Link></ol>
        </ul>
      </div>
    )
  }
}

export default App;
