import React, { Component } from 'react';
import common from './resources/js/common.js'
import './resources/css/common.css'

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount(){    
    let cvs=window.document.getElementById('cvs')
    let cvsContainer=window.document.getElementById('cvsContainer')
    cvs.width=cvsContainer.clientWidth
    cvs.height=cvsContainer.clientHeight
    let fabricCanvas=new window.fabric.Canvas('cvs')
    let fabricText=common.initText("",fabricCanvas,"center")
    this.setState({fabricCanvas:fabricCanvas,
      fabricText:fabricText})
  }

  componentDidUpdate(){
    let {fabricCanvas,fabricText}=this.state;
    let cvsContainer=window.document.getElementById('cvsContainer')
    fabricCanvas.setWidth(cvsContainer.clientWidth)
    fabricCanvas.setHeight(cvsContainer.clientHeight)
    fabricText.center();
  }
  render() {
    return (
      <div className={"canvas-"+this.props.viewType} id="cvsContainer">
        <canvas id="cvs"></canvas>
      </div>     
    )
  }
}

export default Canvas;
