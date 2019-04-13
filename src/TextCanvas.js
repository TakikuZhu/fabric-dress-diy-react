import React, { Component } from 'react';
import common from './resources/js/common.js'
import './resources/css/common.css'

class TextCanvas extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount(){   
    this.props.onRef(this)

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

  editSwitch = (isEditing) =>{
    let {fabricText}=this.state;
    
    if(isEditing){      
      fabricText.enterEditing()
    }else{
      fabricText.exitEditing()
    }
  }

  alignmentChange = (value) =>{
    let {fabricCanvas,fabricText}=this.state;
  
    fabricText.setTextAlign(value)
    fabricText.center()
    fabricCanvas.renderAll();
  }

  fontSizeChange = (value) =>{
    let {fabricCanvas,fabricText}=this.state;
    
    fabricText.setFontSize(value)
    fabricText.center()
    fabricCanvas.renderAll();
  }

  colorChange = (value) =>{
    let {fabricCanvas,fabricText}=this.state;
    
    fabricText.setColor(value)
    fabricCanvas.renderAll();
  }

  render() {
    return (
      <div className={"canvas-"+this.props.viewType} id="cvsContainer">
        <canvas id="cvs"></canvas>
      </div>     
    )
  }
}

export default TextCanvas;
