import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {AppBar, Details} from '../../components';
import {createFeed} from '../../utils';

// === BUG ===
// - Back button still shows on initial refresh
// disapears with second refresh; most likely 
// due to Redirect component in Details.js
// ===??FIX??=== 
// - setInitialState() 

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

export default class App extends Component {
  state = {
    feed_data: {},
    feed_comps: [],
    loading: true,
    drawerHasOpened: false,
    drawerIsOpen: false,
    userLocation: {}
  };

  _getUserLocation = () => {
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(loc => {
        this.setState({ 
        userLocation: {
          lng: loc.coords.longitude,
          lat: loc.coords.latitude 
          }
        })
      })
    } else {
      console.log('This browser doesn\'t support Geolocation')
    }
  };

  _handleOpenDrawer = () => {
    this.setState(
      this.state.drawerHasOpened 
      ? { drawerIsOpen: true }
      : { drawerIsOpen: true, drawerHasOpened: true }
      );
  };

  _handleCloseDrawer = () => {
    this.setState({drawerIsOpen: false})
  }

  _afterFeedLoad = feedState => {
    this.setState(feedState);
  };
  
  async componentDidMount() {
    const response = await fetch(dataUrl);
    const json = await response.json();
    const feedStateData = await createFeed(json);
    await this._afterFeedLoad(feedStateData);
  };

  render() {
    const { 
      drawerIsOpen,
      drawerHasOpened,
      feed_data,
      feed_comps,
      loading
     } = this.state;
    return (
      <Router>
        <div className="App">
          <AppBar 
            drawerIsOpen={drawerIsOpen}
            drawerHasOpened={drawerHasOpened}
            close={this._handleCloseDrawer}
            open={this._handleOpenDrawer}
            getPosition={this._getUserLocation}
          />
          <Route
            path="/"
            render={({match}) => (
            <div className='RestaurantFeed'>
              {loading
                ? <h2 className="FeedLoading" style={{marginTop: '50px', textAlign: 'center'}}> Loading....</h2>
                : feed_comps}
            </div>)}
          />

          <Route
            path="/:id/:rest"
            render={({match}) => (
              <Details
                className='Details'
                data={feed_data[match.params.id]}
                open={this._handleOpenDrawer}
                close={this._handleCloseDrawer}
                isOpen={drawerIsOpen}
              />
            )}
          />

        </div>
      </Router>
    );
  };
};
