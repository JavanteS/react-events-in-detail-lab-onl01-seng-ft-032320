// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component{

   mouseEvents = (event) =>{
       event.persist()
       
       
       setTimeout(()=>{
        this.props.onDelayedClick(event)
       }, this.props.delay)
       
   }

    render (){
        
        return(
            <button onClick={this.mouseEvents}>delay</button>
        )
    }
}

export default DelayedButton