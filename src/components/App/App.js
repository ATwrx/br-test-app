import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {AppBar, Details} from '../../components';
import {Feed} from '../../containers';

// === BUG ===
// - Back button

const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

export default class App extends Component {
  state = {
    feed_data: [],
    loading: true,
    drawerHasOpened: false,
    drawerIsOpen: false,
    userLocation: {}
  }

  _getUserLocation = () => {
    if ("geolocation" in navigator) {
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
  }

  _handleOpenDrawer = () => {
    const open = this.state
    this.setState(
      this.state.drawerHasOpened ?
        { drawerIsOpen: true } : { drawerIsOpen: true, drawerHasOpened: true }
    )
  }

  _handleCloseDrawer = () => { this.setState({drawerIsOpen: false}) }

  _afterFeedLoad =  ( data ) => {
    this.setState({
      feed_data: Array.concat(...data),
      loading: false
    })
  }

  async componentDidMount() {
    // 1. Fetch & Parse JSON data
    const response = await fetch(dataUrl)
    const json = await response.json()
    // 2. add JSON data to this.state.feed
    await this._afterFeedLoad(json.restaurants)
  }

  render() {
    const {drawerIsOpen, drawerHasOpened, feed_data, loading} = this.state
    return (
      <Router>
        <div className="App">

          <AppBar
            drawerIsOpen={drawerIsOpen}
            drawerHasOpened={drawerHasOpened}
            close={this._handleCloseDrawer}
            open={this._handleOpenDrawer}
            getPosition={this._getUserLocation}/>

          <Route
            path="/"
            render={({match}) => (
            <div className='RestaurantFeed'>
              {loading
                ? <h2
                    className="FeedLoading"
                    style={{
                    marginTop: '50px',
                    textAlign: 'center'
                  }}>
                    Loading....</h2>
                : <Feed feed_data={feed_data} />}
            </div>
          )}/>

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
          )}/>

        </div>
      </Router>
    )
  }
}