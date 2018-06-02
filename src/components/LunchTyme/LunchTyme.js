import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';

import './LunchTyme.css';
import { Details } from '../../components';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

export default class LunchTyme extends Component {
  state = {
    restaurantData: {},
    feedComponents: []
  };

  componentDidMount() {
    fetch(dataUrl).then(results => {
      return results.json();
    }).then(data => {
      let dataArr = [];
      let restaurants = data
        .restaurants
        .map(restaurant => {
          let formattedName = restaurant
            .name
            .replace(/ +/g, '-');
          dataArr.push(restaurant);
          return (
            <Link
              to={`/${dataArr.length - 1}`}
              className="Restaurant"
              state={ this.state.restaurantData }
              id={formattedName}
              key={dataArr.length - 1}
            >
              <h2>{restaurant.name}</h2>
              <img
                className="FeedImage"
                src={restaurant.backgroundImageURL}
                alt={`Link to details for ${restaurant.name}`}/>
            </Link>
          );
        });
      this.setState({feedComponents: restaurants, restaurantData: dataArr});
    });
  }

  render() {
    const {restaurantData, feedComponents} = this.state;
    const {dataId, toggleOnFeed} = this.props;
    return (
      <div className='RestaurantFeed'>
        { dataId 
            ? <Details data={restaurantData[dataId]} toggleOnFeed={toggleOnFeed} /> 
            :  (restaurantData.length === 0 ? <Loader active /> : feedComponents )}
            
      </div>
    );
  }
}
