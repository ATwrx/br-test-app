import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import './LunchTyme.css';
import {Loader} from 'semantic-ui-react';
import {Details, AppBar} from '../../components';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'; 

const createFeed = (feed) => {
  let arr = [];
  const restaurants = feed.restaurants.map(restaurant => {
      const {name, backgroundImageURL, category} = restaurant;
      const style = {
        background: `url(${backgroundImageURL})` 
      };
      let formattedName = restaurant.name.replace(/ +/g, '-');

      // arr is where the data is stored,
      //   and then matched with the 
      //   corresponding feed item.
      arr.push(restaurant);

      // this returns back an array of
      //   componenants that are rendered
      //   from a map of the data.
      return (
        <Link
          to={`/restaurant/${arr.length - 1}/${formattedName}`}
          className="Restaurant"
          key={arr.length - 1}
          style={style} 
          alt={`Link to details for ${name}`}
          >
          <h2 className='RestaurantName'>{name}
            <span className='RestaurantCategory' >{category}</span>
          </h2>
        </Link>
      );
    });
  // restaurants = feed_comps
  // arr = feed_data
  return [restaurants, arr]
};

export default class LunchTyme extends Component {
  state = {
    feed_data: {},
    feed_comps: [],
    loading: true,
    tabOpen: false
  };

  // Off/On Switch to show whether 
  //  the Details view is open
  toggleTabOpen = () => {
    this.setState({
      tabOpen: !this.state.tabOpen
    })
  };

  // This updates the state after
  //   when the async fetch completes.
  feedUpdater(restaurants, dataArr) {
    this.setState({
      feed_comps: restaurants,
      feed_data: dataArr,
      // Setting 'loading' to false renders the feed list.
      loading: false
    });
  };

  async componentDidMount() {
    // response + json fetch and parse the data
    const response = await fetch(dataUrl);
    const json = await response.json();
    // stateData calls for the creation of the feed_comps
    const stateData = await createFeed(json);
    // update the state w/ the arr returned from stateData promise
    await this.feedUpdater(stateData[0], stateData[1]);
  };

  render() {
    const {feed_comps, feed_data, tabOpen, loading} = this.state;
    return (
      <React.Fragment>
        <AppBar backButton={tabOpen} toggle={this.toggleTabOpen}/>
        <div className='RestaurantFeed'>
          {loading
            ? <Loader content='Finding tasty lunches...' active/>
            : feed_comps}
        </div>
        <div className='DetailsWrapper'>
          <Route
            path={'/restaurant/:id/:rest?'}
            render={({match}) => (
            <React.Fragment>
              <Details
                data={feed_data[match.params.id]}
                closeTab={this.toggleTabOpen}
                className='Details'/>
            </React.Fragment>
          )}/>
        </div>
      </React.Fragment>
    )
  }
}