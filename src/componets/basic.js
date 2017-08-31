import React, { Component } from 'react';
import {Kishore,Demo,number} from './kishore.js';
import {ExampleProp} from './prop.js'
import {ExampleState} from './stateExample.js';
import {Examplefunction} from './functionReact.js';
import {Multielement} from './multiElement.js';
export const data = [1,2,3,4,5,6,7,8,9];
export class Basic extends Component
{

  render(){
    return(
      <div>
      <ExampleState/>
          <Kishore/>
          <ExampleProp name="Example of Props"/>
          <Demo/>
          <h1>saurav</h1>
          <Examplefunction/>
      </div>
    )

  };
}
export class Controller extends Component
{
  render(){
    return(
      <h1>Controller</h1>
    )

  };
}
