import React, { Component } from 'react';
import  Canvas from './Canvas';
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
              <button className="app-btn app-header-keyboard"></button>
            </div>            
          </div>
          <Canvas viewType={viewType}/> 
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
              <button className="app-btn app-header-keyboard"></button>   
            </div>
          </div>
          <Canvas viewType={viewType}/> 
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
          <Canvas viewType={viewType}/>
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
