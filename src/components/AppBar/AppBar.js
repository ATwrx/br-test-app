import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './AppBar.css';
import {icon_back, icon_forward, icon_refresh, icon_map} from '../../assets/images';

const LunchTymeBar = () => (
  <div>
    <Link to="/internets">
      Internets
    </Link>
    <Link to="/lunchtyme">
      LunchTyme
    </Link>
  </div>
)

const InternetsBar = () => (
  <div>
    <Link to="/internets">
      Internets
    </Link>
    <Link to="/lunchtyme">
      LunchTyme
    </Link>
  </div>
)

const Header = () => (
  <div>
    <Link to="/internets">
      <img className='AppBar-Img' src={icon_back} alt='Back button.'/>
    </Link>
    <Link to="/lunchtyme">
      <img className='AppBar-Img' src={icon_refresh} alt='Refresh button.'/>
    </Link>
    <Link to="/lunchtyme">
      <img className='AppBar-Img' src={icon_forward} alt='Forward button.'/>
    </Link>
  </div>

)

export default class AppBar extends Component {
  render() {
    return (
      <div className="AppBar">
        <Header/>
      </div>
    );
  }
}