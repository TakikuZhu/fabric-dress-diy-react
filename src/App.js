import React, { Component } from 'react';
import './App.css';
import './resources/css/common.css'
let PageStateEnum = {
  INIT:0,//初始状态
  EDITING: 1,//编辑状态
  PREVIEW: 2,//编辑后整体预览状态
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageState:PageStateEnum.INIT
    }
  }
  
  componentDidMount(){
    let that=this;
    setTimeout(function(){
      that.setState({pageState:PageStateEnum.EDITING});
    },1000)
    console.info(window.fabric)
    
     //添加canvas
     let cvs=document.createElement("canvas");
     cvs.id="cvs";
     document.body.prepend(cvs);
     //设置canvas全屏
     cvs.width = document.body.clientWidth;
     cvs.height = document.body.clientHeight;
  }

  render() {
    const {pageState} = this.state;
    if(pageState===PageStateEnum.INIT){
      return (
        <div className="app">
          <div className="app-header">
            <button className="app-btn app-header-back align-left"></button>
            <button className="app-btn app-header-next align-right"></button>
          </div>

          <div className="app-footer">         
          </div>
        </div>
      );
    }else if(pageState===PageStateEnum.EDITING){
      return (
        <div className="app zoom">
          <div className="app-header">
            <button className="app-btn app-header-back align-left"></button>
            <button className="app-btn app-header-redo align-left"></button>
            <button className="app-btn app-header-keyboard align-right"></button>          
            <button className="app-btn app-header-item align-right"></button>
          </div>
          <div className="app-footer">
            <button className="app-btn app-footer-font align-left"></button>
            <button className="app-btn app-footer-alignment align-center"></button>
            <button className="app-btn app-footer-color align-right"></button>          
          </div>
          
        </div>
      );
    }else if(pageState===PageStateEnum.PREVIEW){
      return (
        <div className="app">
         <div className="app-header">
            <button className="app-btn app-header-back align-left"></button>
            <button className="app-btn app-header-next align-right"></button>
          </div>
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

export default App;
