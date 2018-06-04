import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import Drawer from 'react-motion-drawer';
import './Details.css';

// NOTES: Some of the details are conditionally  rendered to prevent data
// inconsistency crashes. Twitter conditional is nested in a conditional.
// Auto-redirects to the homepage if no data is avaliable. TIP: More rules can
// be added using the same pattern.

export default class Details extends Component {
  componentDidMount() { this.props.open() };
  componentWillUnmount() { this.props.close() }

  componentWillUpdate(nextProps) {
    this.props.data !== nextProps.data
     && this.props.open()
  };

  render() {
    const {data, isOpen, open, close} = this.props;
    return (data === null || data === undefined
      ? (<Redirect to={{
          pathname: '/',
          state: {
            drawerOpen: false
          }}
        }/>)
      : (
        <Drawer
          open={isOpen}
          drawerStyle={{background: '#FFF'}}
          overlayColor={'rgb(0,0,0,0)'}
          onChange={(val) => {
          val
            ? open()
            : close()
        }}>

          <div className="FakeBar">
            <a onClick={close} className='BackButton'>
              <Icon name='chevron left' size='large'/>
            </a>
          </div>
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
        </Drawer>
      ))
  }
}