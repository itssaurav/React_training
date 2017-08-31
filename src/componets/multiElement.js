import React, { Component } from 'react';
export class Multielement extends Component {
  constructor(props) {
    super(props);

  }
  render()
  {
    const numbers=[1,2,3,4,5,6,7,8,9];
    const listElement = numbers.map((numbers)=><li key={numbers.toString()}>{numbers}</li>);
    return(
      <ul>{listElement}</ul>
    )
  }
}
