import React, {Component} from 'react';
import './AppBar.css';
import {icon_map} from '../../assets';

export default class AppBar extends Component {
  render() {
    return (
      <div className="AppBar">
        <h1>
          Lunch Tyme
        </h1>
        <a onClick={() => {console.log('Hey guy, how \'bout we add a nice little map somewhere')}} >
          <img src={icon_map} alt="Map icon."/>
        </a>
      </div>
    );
  }
}
