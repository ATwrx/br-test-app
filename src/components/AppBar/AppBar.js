import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import './AppBar.css';

import {icon_map} from '../../assets';

const conditionalBackBtn = (bool) => {
  return (bool
    ? <Link to="/" className='BackButton'>
        <Icon name='chevron left' size='large' />
      </Link>
    : <div className="BackButton"/>)
};

export default class AppBar extends Component {
  render() {
    const {backButton, toggle} = this.props;
    return (
      <div className="AppBar">
        {conditionalBackBtn(backButton)}
        <h1 className='AppBarHeader' content='Lunch Tyme' inverted>
          Lunch Tyme
        </h1>
        <a onClick={toggle} >
          <img src={icon_map} alt="Map icon."/>
        </a>
      </div>
    );
  }
}
