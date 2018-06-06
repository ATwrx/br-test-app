import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import Map from './Map';
import './Details.css';

//  === NOTES === 
//  === Data consistency ===
//  - Some of the details are conditionally rendered to prevent data
// inconsistency crashes.
//  - Twitter conditional is nested in a conditional.
//  - More rules can be added with the same pattern.
//  === Lifecycle Methods ===
//  - Lifecycle open() & close() and  Drawer.onChange()   do the same thing.
// Meant to be a sanity check for   whether drawer is open or not.
//  === Misc ===
//  - Auto-redirects to '/' if no data is avaliable.
//  - Mainly used for refresh() errors
export default class Details extends Component {
  static defaultProps = { data: null }; 

  componentDidMount() {
    this.props.open()
  };
  componentWillUnmount() {
    this.props.close()
  }
  componentWillUpdate(nextProps) {
    this.props.data !== nextProps.data 
      && this.props.open()
  };

  render() {
    const { data, isOpen, open, close } = this.props;
    return (data === null || data === undefined
      ? <Redirect to='/' push /> 
      : <Drawer
          open={isOpen}
          drawerStyle={{ background: '#FFF', marginTop: '50px' }}
          onChange={ (val) => { val ? open() : close() }}
        >

          <div className="DetailsMap">
            <Map lat={data.location.lat} lon={data.location.lon} name={data.name} />
          </div>

          <div className="DetailsHeaders">
            <h4>
              {data.name}
              <span className="DetailsSubheader">
                {data.category}
              </span>
            </h4>
          </div>

          <ul className="DetailsInfo">
            <li>
              {data.location.formattedAddress.map(
                detail => ( 
                  <div>{detail}</div>
                )
              )}
            </li>

            {data.contact !== null && <React.Fragment>
              <li>
                <a href={`tel:${data.contact.phone}`}>
                  {data.contact.formattedPhone}
                </a>
              </li>

              {data.contact.twitter !== undefined && <li>
                <a href={`https://twitter.com/${data.contact.twitter}`}>
                  @{data.contact.twitter}
                </a>
              </li>}
            </React.Fragment>}
          </ul>
      </Drawer>
    )
  }
}
