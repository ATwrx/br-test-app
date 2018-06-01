import React, {Component} from 'react';

export default class Details extends Component {
  render(){
    const {data} = this.props;
    return(
      <div className='Details'>
        <div className='MapFill' />
        <h1>{data.name}</h1> 
      </div>
    )
  }
}
