import React, {Component} from 'react';
import './AppBar.css';
import {icon_map, icon_back, icon_forward} from '../../assets';

export default class AppBar extends Component {
  static defaultProps = {
    drawerHasOpened: false,
    drawerIsOpen: false
  }
  render() {
    const { drawerHasOpened, drawerIsOpen, close, open } = this.props;
    return (
        <div className="AppBar">
          {// === NOTE ===
           // Double ternary check for back button. 
           // Just a filler div if !drawerHasOpened.
          !drawerHasOpened 
            ? <a className="DrawerButton">
              <img style={{visibility: 'hidden'}} alt="Open drawer" />
              </a>
            : drawerIsOpen 
              ? <a className="DrawerButton" onClick={close}>
                  <img src={icon_back} alt="Close drawer" />
                </a>
              : <a className="DrawerButton" onClick={open}>
                <img src={icon_forward} alt="Open drawer" />     
                </a>
          }
          <h1> Lunch Tyme </h1>
          <a className="MapButton" onClick={() => { console.log('Hey guy, how \'bout we add a nice little map somewhere') }}>
            <img src={icon_map} alt="Allow app to see your location."/>
          </a>
        </div>
    );
  };
};
