import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Details.css';
import {Button} from 'semantic-ui-react';

const DetailsBar = () => (
  <Button>this</Button>
);
export default class Details extends Component {
  render() {
    const {data} = this.props;
    return data === undefined
      ? (<Redirect to="/"/>)
      : (
        <div className="Details">
        <DetailsBar />
          <div className="DetailsMap">Map goes here</div>
          <div className="DetailsHeaders">
            <h4>
              {data.name}
              <span className="DetailsSubheader">{data.category}</span>
            </h4>
          </div>
        </div>
      );
  }
}