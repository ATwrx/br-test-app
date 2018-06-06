import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import {icon_lunch} from '../../assets';
import './GoogleMap.css';

const Pointer = ({restaurant}) => ( 
  <div className="Pointer">
   <img src={icon_lunch} alt="Hotdog Icon" />
  </div>);

export default class Map extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
  };
  static defaultProps = {
    zoom: 8,
    center: [32, -97]
  };

  _roundCoords = (cord) => {
    let tempCord = cord * 100,
      roundedTempCord = Math.floor(tempCord),
      newCord = roundedTempCord / 100;
    return newCord;
  }

  render() {
    const { center, zoom, restaurant } = this.props;
    return(
         <GoogleMap
           bootstrapURLKeys={{key: "AIzaSyAP07RpvWhxJcSQYyBUWG4bnfeBMUnfgp8"}}  
           defaultZoom={zoom}
           center={center}
          >
            <Pointer 
              center={center}
              lat={this._roundCoords(center[0])}
              lng={this._roundCoords(center[1])}
              restaurant={restaurant}
            />
         </GoogleMap>
    );
  };
};
