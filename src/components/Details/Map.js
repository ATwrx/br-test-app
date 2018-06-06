import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

const Pointer = ({lat, lon}) =>(
  <div style={{ background: '#FFF' }}>{lat}</div> 
);

export default class Map extends Component {
  static defaultProps = {
    zoom: 11 
  };

  render() {
    const { lat, lon } = this.props;
    return(
         <GoogleMap
           defaultCenter={this.props.center}
           defaultZoom={this.props.zoom}
          >
            <Pointer lat={lat} lon={lon} />
         </GoogleMap>
    );
  };
};
