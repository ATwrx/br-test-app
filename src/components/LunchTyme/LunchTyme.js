import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import './LunchTyme.css';
import Details from './Details.js';

const dataUrl =
  'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

export default class LunchTyme extends Component {
    state = {
      restaurantData: {},
      feedComponents: [],
    };

  componentDidMount() {
    fetch(dataUrl)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let dataArr = [];
        let restaurants = data.restaurants.map(restaurant => {
          let formattedName = restaurant.name.replace(/ +/g, '-');
          dataArr.push(restaurant);
          return (
            <Link
              to={ `/lunchtyme/${dataArr.length - 1}`}
              className="Restaurant"
              id={formattedName}
              key={dataArr.length - 1}>
              <h2>{restaurant.name}</h2>
              <img className="FeedImage" src={restaurant.backgroundImageURL} />
            </Link>
          );
        });
        this.setState({
          feedComponents: restaurants,
          restaurantData: dataArr});
      });
  }

  render() {
    const {restaurantData} = this.state;
    return (
      <div>
        {
          this.props.viewingFeed === true 
          ? this.state.feedComponents 
          : <Details data={restaurantData[this.props.dataId]} /> 
        } 
      </div>
    );
  }
}
