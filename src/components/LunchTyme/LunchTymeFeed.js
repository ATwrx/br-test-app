import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.js' +
    'on';

export default class LunchTymeFeed extends Component {
  state = {
    "viewingFeed": true,
    "restaurants": []
  };

  componentDidMount() {
    fetch(dataUrl).then(results => {
      this.setState({preJSON: results})
      return results.json();
    }).then(data => {
      let restaurants = data
        .restaurants
        .map((restaurant) => {
          let test = restaurant;
          let formattedName = restaurant
            .name
            .replace(/ +/g, '');
          return (
            <Link
              to={{
              pathname: `/lunchtyme/${formattedName}`
            }}
              className='Feed-Restaurant'
              key={formattedName}>
              <h2>{restaurant.name}</h2>
              <img className='Feed-Image' src={restaurant.backgroundImageURL}/>
            </Link>
          )
        })
      this.setState({restaurants: restaurants})
      console.log('State:', this.state.restaurants)
    })
  }

  render() {
    return (
      <div className='Feed'>
      {
        this.state.viewingFeed === true
        ? this.state.restaurants
        : <p>Details</p>
      }
      </div>
    )
  }
}