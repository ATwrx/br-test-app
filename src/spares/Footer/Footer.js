import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';
import {icon_internet, icon_lunch} from '../../assets/images'

export default class Footer extends Component {
  render() {
    const notifyTopBar = this.props.goingToFeed;
    return (
      <div className="Footer">
        <NavLink className="Footer-Link" onClick={notifyTopBar} to="/internets">
          <img className="Footer-Img" src={icon_internet} alt="Link to internet tab." />
          <p>Internets</p>
        </NavLink>
        <NavLink className="Footer-Link" to="/lunchtyme" onClick={notifyTopBar} >
        <img className="Footer-Img" src={icon_lunch} alt="Link to lunch time tab." />
          <p>LunchTyme</p>
        </NavLink>
      </div>
    )
  }
};