import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';
import './App.css';
import {AppBar, Details} from '../../components';

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

// NOTE: inline-styles needed for dynamic background img,  so this is an effort
// to keep the styles located in  the same file.
const drawerStyles = {
  backgroundSize: '100% auto',
  width: '100%',
  minHeight: '150px',
  maxHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'flex-end',
  color: '#FFF'
};

const createFeed = (feed) => {
  const arr = [];
  const feedItems = feed
    .restaurants
    .map(feedItem => {
      const {name, backgroundImageURL, category} = feedItem;
      const feedGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)) '
      // Used to add dynamic information to the url
      let formatName = name.replace(/ +/g, '-');
      // Push data to arr before creating feedItem
      arr.push(feedItem);
      // Template for feed_comps
      return (
        <div className='gradient'>
          <Link
            to={`/${arr.length - 1}/${formatName}`}
            key={arr.length - 1}
            style={{
            background: `${feedGradient}, url(${backgroundImageURL}) no-repeat center`,
            ...drawerStyles
          }}>
            <h2>{name}</h2>
            <h3>{category}</h3>
          </Link>
        </div>
      );
    });
  // feedItems = feed_comps || feedData[0] arr = feed_data || feedData[1]
  return [feedItems, arr]
};

export default class App extends Component {
  state = {
    feed_data: {},
    feed_comps: [],
    loading: true,
    drawerOpen: false
  };

  async componentDidMount() {
    // fetch and parse the data
    const response = await fetch(dataUrl);
    const json = await response.json();
    // stateData calls for the creation of the feed_comps
    const feedData = await createFeed(json);
    // update the state w/ the arr returned from stateData promise
    await this.afterFeedLoad(feedData[0], feedData[1]);
  };

  handleOpenDrawer = () => {
    this.setState({drawerOpen: true});
  };

  handleCloseDrawer = () => {
    this.setState({drawerOpen: false})
  }

  afterFeedLoad = (restaurants, dataArr) => {
    this.setState({feed_comps: restaurants, feed_data: dataArr, loading: false});
  };

  render() {
    const {drawerOpen, feed_data, feed_comps, loading} = this.state;
    return (
      <Router>
        <div className="App">
          <AppBar/>

          <Route
            path="/"
            render={({match}) => (
            <div className='RestaurantFeed'>
              {loading
                ? <Loader content='Finding tasty lunches...' active/>
                : feed_comps}
            </div>)}
          />

          <Route
            path="/:id/:rest"
            render={({match}) => (<Details
            className='Details'
            data={feed_data[match.params.id]}
            open={this.handleOpenDrawer}
            close={this.handleCloseDrawer}
            isOpen={drawerOpen}/>)}
          />

        </div>
      </Router>
    )
  }
}
