// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component{

    mouEvents = (event) =>{

        let array =[]
        array.push(event.clientX,event.clientY)
       
        return(
            this.props.onReceiveCoordinates(array)
        )
    }

    render (){
        
        return(
            <button onClick={this.mouEvents} >cord</button>
        )

    }
}

export default CoordinatesButton