import React, { Component } from 'react';
import  Canvas from './Canvas';
import './resources/css/common.css'
let PageStateEnum = {
  INIT:0,//初始状态
  EDITING: 1,//编辑状态
  PREVIEW: 2,//编辑后整体预览状态
};

class TextPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageState:PageStateEnum.INIT
    }
  }
  
  componentDidMount(){
    let that=this;
    // setTimeout(function(){
    //   that.setState({
    //     pageState:PageStateEnum.EDITING,
    //   });
    // },1000)
    
  }

  componentDidUpdate(){

  }

  render() {
    const {pageState} = this.state;
    if(pageState===PageStateEnum.INIT){
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
          <Canvas/> 
          <div className="app-footer">
            <button className="app-btn app-footer-zoom-plus align-right"></button>              
          </div>
        </div>
      );
    }else if(pageState===PageStateEnum.EDITING){
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
          <Canvas/> 
          <div className="app-footer">
            <button className="app-btn app-footer-font align-left"></button>
            <button className="app-btn app-footer-alignment align-center"></button>
            <button className="app-btn app-footer-color align-right"></button>          
          </div>
          
        </div>
      );
    }else if(pageState===PageStateEnum.PREVIEW){
      return (
        <div className="app" id="textPage">
         <div className="app-header">
            <button className="app-btn app-header-back align-left"></button>
            <button className="app-btn app-header-next align-right"></button>
          </div>
          {/* <Canvas/> */}
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
