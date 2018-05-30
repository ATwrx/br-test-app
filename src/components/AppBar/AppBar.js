import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './AppBar.css';

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
      Internets
    </Link>
    <Link to="/lunchtyme">
      LunchTyme
    </Link>
  </div>
)

export default class AppBar extends Component {
  render() {
    return (
     <div className="AppBar" >
      <Header/> 
     </div> 
    );
  }
};