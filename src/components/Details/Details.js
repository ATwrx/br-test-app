import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Details.css';

export default class Details extends Component {
  render() {
    const {data} = this.props;
    return (data === undefined || data === null
      ? (<Redirect to="/"/>)
      : (
        <div className="Details">
          <div className="DetailsMap">Map goes here</div>
          <div className="DetailsHeaders">
            <h4>
              {data.name}
              <span className="DetailsSubheader">
              {data.category}
              </span>
            </h4>
          </div>
          <div className="DetailsInfo">
            <ul>
              <li>
                {`
                ${data.location.address} \n
                ${data.location.city}, ${data.location.state}
                ${data.location.postalCode} 
              `}
              </li>
              {data.contact !== null && <React.Fragment>
                <li>
                  <a href={`tel:${data.contact.phone}`}>
                    {data.contact.formattedPhone}
                  </a>
                </li>
                <li>
                  <a href={`https://twitter.com/${data.contact.twitter}`}>
                    @{data.contact.twitter}
                  </a>
                </li>
              </React.Fragment>}
            </ul>
          </div>
        </div>
      ))
  }
}