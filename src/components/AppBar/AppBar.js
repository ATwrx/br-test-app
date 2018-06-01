import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

import './AppBar.css';
import {icon_back, icon_map} from '../../assets/images';

export default class AppBar extends Component {
  render(props) {
    return (
      <div className='AppBar'>
      <Link to='/lunchtyme' onClick={this.props.goingToFeed} >
        <img src={icon_back} alt='Link to go back to the restaurant list'/>
      </Link>
      <Header variant='h2' inverted >Lunch Tyme</Header>
      <img src={icon_map} alt='Map icon.'/>
    </div>
    )
  }
}


