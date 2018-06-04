import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import './Details.css';

// NOTES: Some of the details are conditionally  rendered to prevent data
// inconsistency crashes. Twitter conditional is nested in a conditional.
// Auto-redirects to the homepage if no data is avaliable. TIP: More rules can
// be added using the same pattern.

export default class Details extends Component {
  state = {
    hasOpened: false,
    hasClosed: false,
    currentlyOpen: false
  };

  componentDidMount() {
    this.props.toggle() &&    
    this.setState({hasOpened: true}) 
  };

  componentWillUpdate(nextProps) {
    this.props.data.name !== nextProps.data.name
     && this.state.hasOpened === false 
     && this.props.toggle();
  };

  //NOTE: Drawer's onChange={...} is required.
  // It calls a function everytime 
  render() {
    const {data, isOpen, toggle} = this.props;
    return (data === undefined || data === null
      ? (<Redirect to="/" />) 
      : (<Drawer 
          className="DetailsDrawer"
          overlayClassName="DetailsDrawerOverlay"
          overlayColor={'rgba(0,0,0,0)'}
          zIndex="10"
          open={isOpen} 
          onChange={() => {}} >
          { val => <React.Fragment>
            <div className="DetailsMap">Map goes here</div>
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
                <div>
                  {data.location.address}
                </div>
                <div>
                  {`${data.location.city}, ${data.location.state} ${data.location.postalCode}`}
                </div>
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
         </React.Fragment>}
        </Drawer>
      ))
  }
}