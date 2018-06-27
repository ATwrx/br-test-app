import React from 'react';
import './AppBar.css';
import { icon_map, icon_back, icon_forward } from '../../assets';

const AppBar = props => {
  const { drawerHasOpened, drawerIsOpen, close, open, getPosition } = props;
  return  <div className="AppBar"> {
    !drawerHasOpened // Primary Drawer Arrow function
    ? <div className="DrawerButton">
      <img style={{visibility: 'hidden'}} alt="Open drawer" />
      </div>

      // Secondary function if drawerHasOpened
    : drawerIsOpen 
      ? <a className="DrawerButton" onClick={close}>
          <img src={icon_back} alt="Close drawer" />
        </a>
      : <a className="DrawerButton" onClick={open}>
        <img src={icon_forward} alt="Open drawer" />     
        </a> }

      <h1> Lunch Tyme </h1>
      <a className="MapButton" onClick={getPosition}>
        <img src={icon_map} alt="Allow app to see your location."/>
      </a>
    </div>
  };

export default AppBar; 