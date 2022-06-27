import React, { Component } from 'react'
import { dynamicHandler } from '../../Util'

export default class Todo extends Component {
    state={
        name:""
    }
  render() {
    const {name}=this.state;
    console.log(name);
    return (
      <div className='Todo-container'>
        <input value={name} name="name" type="text" onChange={(event)=>dynamicHandler(event,this)}/>
      </div>
    )
  }
}
