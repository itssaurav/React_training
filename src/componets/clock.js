import React, { Component } from 'react';
import {ExampleDynamicpara} from './dynamicpara.js'
export class ExampleClock extends Component
{
  constructor(props)
  {
    super(props);
    this.state={ date : new Date()};
    this.dynamicTime=this.dynamicTime.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.dynamicTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  dynamicTime()
  {
    this.setState({
      date : new Date()
    });
  }


  render()
  {
    return(
      <div>

      <h1>The time is {this.state.date.toLocaleTimeString()}</h1>
        <ExampleDynamicpara/>
      </div>
    )
  }
}
