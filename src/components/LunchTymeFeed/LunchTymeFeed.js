import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'; 

export default class LunchTymeFeed extends Component {
  state = {
    "restaurants": []
  };

  componentDidMount() {
    fetch(dataUrl).then(results => {
      return results.json();
    }).then(data => {
      let restaurants = data.restaurants.map((restaurant) => {
          return (
            <Link to={`/lunchtyme/${restaurant.name}`} className='Feed-Restaurant' key={restaurant.name}>
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
      {this.state.restaurants}
      </div>
    )
  }
}