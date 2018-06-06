import React from 'react';
import {Link} from 'react-router-dom';

// Inline styles required for dynamic background
const feedStyles = {
    backgroundSize: '100% auto',
    width: '100%',
    minHeight: '150px',
    maxHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-end',
    color: '#FFFFFF',
};

// Background is made from feedGradiant + api-data 
const createFeed = (feed) => {
  const arr = [],
  feedItems = feed.restaurants.map(feedItem => {
      const {name, backgroundImageURL, category} = feedItem;
      const feedGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) '
      // Used to add dynamic information to the url
      let formatName = name.replace(/ +/g, '-');
      // Push data to arr before creating feedItem
      arr.push(feedItem);
      // Template for feed_comps
      return (
        <div className="gradient FeedItem"  key={arr.length - 1}>
          <Link
            to={`/${arr.length - 1}/${formatName}`}
            style={{
            background: `${feedGradient}, url(${backgroundImageURL}) no-repeat center`,
            ...feedStyles
          }}>
            <h2 className="FeedItemHeader">{name}</h2>
            <h3 className="FeedItemSubheader">{category}</h3>
          </Link>
        </div>
      );
    });
  const newState = {feed_comps: feedItems, feed_data: arr, loading: false}
  return  newState;
};

export default createFeed;