import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import './LunchTyme.css';
import {Loader} from 'semantic-ui-react';
import {Details, AppBar} from '../../components';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'; 

const createFeed = (feed) => {
  const arr = [];
  const feedItems = feed.restaurants.map(feedItem => {
      const {name, backgroundImageURL, category} = feedItem;
      // NOTE: inline-styles needed for dynamic background img
      const style = {
        background: `url(${backgroundImageURL}) no-repeat center` ,
        backgroundSize: '100% auto',
        width: '100%',
        minHeight: '150px',
        maxHeight: '250px',
        display: 'flex',
        alignItems: 'flex-start',
        textAlign: 'left'
      };
      // Used to add dynamic information to the url
      let formatName = name.replace(/ +/g, '-');
      // Push data to arr before creating feedItem
      arr.push(feedItem);
      // Template for feed_comps
      return (
        <Link
          to={`/restaurant/${arr.length - 1}/${formatName}`}
          key={arr.length - 1}
          style={style} 
          replace
          >
          <h2 className='FeedItemTitle' >{name}<span>{category}</span></h2>
        </Link>
      );
    });
  // feedItems = feed_comps || feedData[0]
  // arr = feed_data || feedData[1]
  return [feedItems, arr]
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
  feedUpdater = (restaurants, dataArr) => {
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
    const feedData = await createFeed(json);
    // update the state w/ the arr returned from stateData promise
    await this.feedUpdater(feedData[0], feedData[1]);
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
          <Route
            path={'/restaurant/:id/:rest?'}
            render={({match}) => (
                <Details
                  className='Details'
                  data={feed_data[match.params.id]}
                  isOpen={tabOpen}
                  toggle={this.toggleTabOpen}
                />
            )}/>
      </React.Fragment>
    )
  }
}