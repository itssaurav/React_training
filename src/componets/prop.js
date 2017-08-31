import React, { Component } from 'react';

export class ExampleProp extends Component {
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <h1>{this.props.name}</h1>
    );
  }
}
