import React, { Component } from "react";
import "./panels.css"

class PanelPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      vis1: true,
      vis2: false,
      vis3: false
    }
    this.next = this.next.bind(this);
    this.last = this.last.bind(this);
  }

  next(){
    if (this.state.vis1){
      this.setState({
        vis1: false,
        vis2: true
      })
    }
    if (this.state.vis2){
      this.setState({
        vis2:false,
        vis3:true
      })
    }
    if (this.state.vis3){
      this.setState({
        vis3:false,
        vis1:true
      })
    }
  }

  last(){
    if (this.state.vis1){
      this.setState({
        vis1: false,
        vis3: true
      })
    }
    if (this.state.vis2){
      this.setState({
        vis2:false,
        vis1:true
      })
    }
    if (this.state.vis3){
      this.setState({
        vis3:false,
        vis2:true
      })
    }
  }

  render() {
    if (this.state.vis1){
      var s1 = {display: 'block'}
      var s2 = {display: 'none'}
      var s3 = {display: 'none'}
    }
    if (this.state.vis2){
      var s2 = {display: 'block'}
      var s1 = {display: 'none'}
      var s3 = {display: 'none'}
    }
    if (this.state.vis3){
      var s3 = {display: 'block'}
      var s2 = {display: 'none'}
      var s1 = {display: 'none'}
    }
  return (
  <div className="Panels">
    <button className="prev" onClick={this.last}>prev</button>
    <div className="panel1" style={s1}><img src="static/frontend/img/1.png" ></img></div>
    <div className="panel2" style={s2}><img src="static/frontend/img/2.png" ></img></div>
    <div className="panel3" style={s3}><img src="static/frontend/img/3.png" ></img></div>
    <button className="next" onClick={this.next}>next</button>
  </div>
);
  }

}

export default PanelPage;