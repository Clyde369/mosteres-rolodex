import React from 'react'
import { Component } from 'react';


class DS extends Component {

state = {
   count: 0  
}

increment = () => {
   this.setState({
      count: this.state.count + 1
   })
}

decrement = () => {
   this.setState({
      count: this.state.count - 1
   })
}

   render(){
      return (
         <div>
            <h1>Look at this number {this.state.count}, it changes</h1>
           <button class='bg-violet-200 rounded-2xl p-2 hover:text-blue shadow-xl hover:scale-110 ease-in-out transition-transform duration-300 m-2' onClick={this.increment} type='button'>Change number up</button>
           <button class='bg-violet-200 rounded-2xl p-2 hover:text-blue shadow-xl hover:scale-110 ease-in-out transition-transform duration-300 m-2' onClick={this.decrement} type='button'>Change number down</button>
         </div>
       )
     }
   }


export default DS