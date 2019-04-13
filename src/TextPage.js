import React, { Component } from 'react';
import  TextCanvas from './TextCanvas';
import './resources/css/common.css'
let PageStateEnum = {
  FULL_VIEW:'full-view',//全视图
  EDITING_VIEW:'editing-view',//编辑视图
  CANVAS_VIEW: 'canvas-view',//画板视图
};

class TextPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType:PageStateEnum.FULL_VIEW
    }
  }
  
  componentDidMount(){
    let that=this;
    setTimeout(function(){
      that.setState({
        viewType:PageStateEnum.EDITING_VIEW,
      });
    },1000)
    
  }

  componentDidUpdate(){

  }

  onRef = (ref) => {
    this.textCanvas = ref
  }

  editSwitch = () =>{
    
    const {viewType} = this.state;
    if(viewType===PageStateEnum.FULL_VIEW){
      this.setState({viewType:PageStateEnum.EDITING_VIEW})
      this.textCanvas.editSwitch(true)
    }else{
      this.setState({viewType:PageStateEnum.FULL_VIEW})
      this.textCanvas.editSwitch(false)
    }
   
  }

  render() {
    const {viewType} = this.state;

    if(viewType===PageStateEnum.FULL_VIEW){
      return (
        <div className="app" id="textPage">
          <div className="app-header">
            <div className="header-left">
              <button className="app-btn app-header-back"></button>
              <button className="app-btn app-header-redo"></button>
            </div>                   
            <div className="header-right">                   
              <button className="app-btn app-header-item"></button>
              <button className="app-btn app-header-next"></button> 
              <button className="app-btn app-header-keyboard" onClick={this.editSwitch}></button>
            </div>            
          </div>
          <TextCanvas viewType={viewType} onRef={this.onRef}/> 
          <div className="app-footer">
            <button className="app-btn app-footer-zoom-plus align-right"></button>              
          </div>
        </div>
      );
    }else if(viewType===PageStateEnum.EDITING_VIEW){
      return (
        <div className="app zoom" id="textPage">
          <div className="app-header">
            <div className="header-left">
              <button className="app-btn app-header-back"></button>
              <button className="app-btn app-header-redo"></button>
            </div>
            <div className="header-right">                   
              <button className="app-btn app-header-item"></button>
              <button className="app-btn app-header-keyboard" onClick={this.editSwitch}></button>   
            </div>
          </div>
          <TextCanvas viewType={viewType} onRef={this.onRef}/> 
          <div className="app-footer">
            <button className="app-btn app-footer-font align-left"></button>
            <button className="app-btn app-footer-alignment align-center"></button>
            <button className="app-btn app-footer-color align-right"></button>          
          </div>
          
        </div>
      );
    }else if(viewType===PageStateEnum.CANVAS_VIEW){
      return (
        <div className="app" id="textPage">
         <div className="app-header">
            <button className="app-btn app-header-back align-left"></button>
            <button className="app-btn app-header-next align-right"></button>
          </div>
          <TextCanvas viewType={viewType} onRef={this.onRef}/>
          <div className="app-footer">
            <button className="app-btn app-footer-font align-left"></button>
            <button className="app-btn app-footer-alignment align-center"></button>
            <button className="app-btn app-footer-color align-right"></button>          
          </div>
        </div>
      );
    }
    
  }
}

export default TextPage;
