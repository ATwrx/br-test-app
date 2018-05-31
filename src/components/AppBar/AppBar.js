import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import './AppBar.css';
import {
  icon_back,
  icon_forward,
  icon_refresh,
  icon_map,
} from '../../assets/images';

const LunchTymeBar = () => (
  <div>
    <Link to="/internets">Internets</Link>
    <Link to="/lunchtyme">LunchTyme</Link>
  </div>
);

const InternetsAppBar = () => (
  <div className="Internets-AppBar">
    <Link to="/">
      <img className="AppBar-Img" src={icon_back} alt="Back button." />
    </Link>
    <Link to="/lunchtyme">
      <img className="AppBar-Img" src={icon_refresh} alt="Refresh button." />
    </Link>
    <Link to="/">
      <img className="AppBar-Img" src={icon_forward} alt="Forward button." />
    </Link>
  </div>
);

const LunchTymeAppBar =(props) => (
  <div className='AppBar'>
    <h1>Lunch Tyme</h1>
    <Link to={props.match.params}>
      <img src={icon_map} />
    </Link>
  </div>
);

class AppBarUnwrapped extends Component {
  render() {
    const {match} = this.props;
    console.log(match)
    return(
      <LunchTymeAppBar match={match}/>
    )
  }
}

const AppBar = withRouter(AppBarUnwrapped);
export default AppBar;
