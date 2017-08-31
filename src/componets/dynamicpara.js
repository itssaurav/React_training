import React, { Component } from 'react';
export class ExampleDynamicpara extends Component
{
   constructor(props)
   {
     super(props);
     this.state={value:"This is text"};
   }
   dynamicpara()
   {
      this.setState(
        {
          value:this.props.value
        }
      )
   }
   render()
   {
     return(
       <div>
       <input value={this.state.value} type="text" onChange="this.dynamicpara()"/>
       <p>{this.state.value}</p>
       </div>
     )
   }
}
