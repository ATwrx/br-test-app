import React, {Component} from 'react';

export default class LunchTymeDetails extends Component {
  constructor(props){
    super();
    this.state = {
      restaurant: {}
    }
  }
  render(){
    return(
      <div className='Details' >
        <h1>{this.props.restaurant}</h1> 
      </div>
    )
  }
}