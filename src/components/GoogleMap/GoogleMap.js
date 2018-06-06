import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import './GoogleMap.css';

const Pointer = ({ center }) =>( <React.Fragment>
  <div className="Pointer" >
    {center} 
   </div> 
</React.Fragment>);

export default class Map extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
  };
  static defaultProps = {
    zoom: 8,
    center: {
      lat: 32,
      lon: -97
    }
  };

  render() {
    const { center, zoom } = this.props;
    return(
         <GoogleMap
           bootstrapURLKeys={{key: "AIzaSyAP07RpvWhxJcSQYyBUWG4bnfeBMUnfgp8"}}  
           defaultCenter={center}
           defaultZoom={zoom}
           center={center}
          >
            <Pointer center={center} lat={center.lat} lng={center.lng} />
         </GoogleMap>
    );
  };
};
