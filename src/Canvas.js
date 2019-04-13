import React, { Component } from 'react';
import './resources/css/common.css'

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount(){
    this.setState({canvas:new window.fabric.Canvas('cvs')})
  }

  render() {
    return (
      <div>
        <canvas id="cvs" width="200rem" height="200rem"></canvas>
      </div>     
    )
  }
}

export default Canvas;
