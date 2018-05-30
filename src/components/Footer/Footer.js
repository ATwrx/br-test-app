import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';
import {icon_internet, icon_lunch} from '../../assets/images'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <NavLink className="Footer-Link" to="/internets">
          <img className="Footer-Img" src={icon_internet} alt="Link to internet tab." />
          <p>Internets</p>
        </NavLink>
        <NavLink className="Footer-Link" to="/lunchtyme" >
        <img className="Footer-Img" src={icon_lunch} alt="Link to lunch time tab." />
          <p>LunchTyme</p>
        </NavLink>
      </div>
    )
  }
};