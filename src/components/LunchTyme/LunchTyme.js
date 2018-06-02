import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import './LunchTyme.css';
import {Loader, Container} from 'semantic-ui-react';
import {Details, AppBar} from '../../components';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

const createFeed = (feed) => {
  let arr = [];
  const restaurants = feed.restaurants.map(restaurant => {
      let formattedName = restaurant.name.replace(/ +/g, '-');
      arr.push(restaurant);
      return (
        <Link
          to={`/restaurant/${arr.length - 1}/${formattedName}`}
          className="Restaurant"
          id={formattedName}
          key={arr.length - 1}>
          <h2>{restaurant.name}</h2>
          <img
            className="FeedImage"
            src={restaurant.backgroundImageURL}
            alt={`Link to details for ${restaurant.name}`}/>
        </Link>
      );
    });
  return [restaurants, arr]
};

export default class LunchTyme extends Component {
  state = {
    feed_data: {},
    feed_comps: [],
    loading: true,
    tabOpen: false
  };
  toggleTabOpen = () => {
    this.setState({tabOpen: !this.state.tabOpen})
  };
  feedUpdated(restaurants, dataArr) {
    this.setState({feed_comps: restaurants, feed_data: dataArr, loading: false})
  };
  async componentDidMount() {
    const response = await fetch(dataUrl)
    const json = await response.json()
    const stateData = await createFeed(json)
    await this.feedUpdated(stateData[0], stateData[1])
  };

  render() {
    const {feed_comps, feed_data, tabOpen, loading} = this.state;
    return (
      <React.Fragment>
        <AppBar backButton={tabOpen} />
        <div className='RestaurantFeed'>
          {loading
            ? <Loader active/>
            : feed_comps
          }
        </div>
        <div className='DetailsWrapper'>
          {tabOpen && 
            <Route
              path={'/restaurant/:id/:restaurantName'}
              render={({match}) => (
                <React.Fragment>
                  <Details
                   data={feed_data[match.params.id]} 
                   closeTab={this.toggleTabOpen}
                   className='Details'
                  />
                </React.Fragment>
              )}
            />
          }
        </div>
      </React.Fragment>
    )
  }
}