import React, { Component } from 'react';
import {ExampleClock} from './clock.js';
export class Examplefunction extends Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"Example of State", status:true};
    this.handleState = this.handleState.bind(this);
    this.revertState = this.revertState.bind(this);
  }

  handleState()
  {

      this.setState({
      name:"Now it changed as we have used a setState function",status:false
  });

}
revertState()
{
  this.setState({
   name:"Example of State",status:true
  });
}



  render(){
  let togglebutton = "";
  if(this.state.status)
  {
    togglebutton = <button className="btn btn-default" onClick={this.handleState}>ChangeButton</button>;
  }
  else
  {
    togglebutton = <button className="btn btn-default" onClick={this.revertState}>RevertButton</button>;
  }
    return(
      <div>

      <h1>{this.state.name}</h1>
      {togglebutton}
      <ExampleClock/>
      </div>
    )
  }
}
