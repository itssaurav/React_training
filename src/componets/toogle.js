import React, { Component } from 'react';

import App from './App';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    const saurav='saurav';
    this.state = {date:{saurav}};

  }




  tick() {
    this.setState({
      date: this.props.date
    });
  }

  render() {
    const name ='Saurav';
    return (
      <div>
        <h1>Hello, world!</h1>
        <input value={name}/>
        <button onClick={this.tick}>Change</button>
        <p>{this.state.date}</p>
      </div>
    );
  }
}


export default Toggle;
