import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header, Button, Icon} from 'semantic-ui-react';
import './AppBar.css';

import {icon_map} from '../../assets';

function conditionalBackBtn(bool) {
  return (bool
    ? <Link to="/" className='BackButton'>
        <Icon name='chevron left' size='large' />
      </Link>
    : <div className="BackButton"/>)
};

export default class AppBar extends Component {
  render() {
    const {backButton} = this.props;
    return (
      <div className="AppBar">
        {conditionalBackBtn(backButton)}
        <h1 className='AppBarHeader' content='Lunch Tyme' inverted>
          Lunch Tyme
        </h1>
        <a onClick=''>
          <img src={icon_map} alt="Map icon."/>
        </a>
      </div>
    );
  }
}
