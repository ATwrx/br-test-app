import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';
import './AppBar.css';

import {icon_back, icon_map} from '../../assets';

export default class AppBar extends Component {
  renderBackButton(bool) {
    return (
      bool
      ? <Link to="/" className='BackButton'>
          <img src={icon_back} alt='Go back on mobile. Close tab on Desktop' />
        </Link> 
      : <div className="BackButton"/>
    )
  }

  render() {
    const {backButton} = this.props;
    return (
      <div className="AppBar">
        {this.renderBackButton(backButton)}
        <Header variant="h2" inverted>
          Lunch Tyme
        </Header>
        <img src={icon_map} alt="Map icon."/>
      </div>
    );
  }
}
