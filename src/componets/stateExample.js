import React, { Component } from 'react';
export class ExampleState extends Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"Example of State"};
  }
  render()
  {
    return(
      <h1>{this.state.name}</h1>
    )
  }
}
