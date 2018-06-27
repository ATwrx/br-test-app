import React from 'react';
import {Link} from 'react-router-dom';

// Inline styles required for dynamic background
const feedStyles = {
  color: '#FFFFFF',
  backgroundSize: '100% auto',
  width: '100%',
  minHeight: '180px',
  maxHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'flex-end'
};

// Background is made from feedGradiant + api-data 
const Feed = ({feed_data}) => {
  let feedItems = feed_data.map(( restaurant, i) => {
    const { name, backgroundImageURL, category } = restaurant
    const gradient = 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) '
    // Used to add dynamic information to the url
    const formatName = name.replace(/ +/g, '-')
    
    return (
      <div className="gradient FeedItem"  key={i}>
        <Link
          to={`/${i}/${formatName}`}
          style={{
            background: `${gradient}, url(${backgroundImageURL}) no-repeat center`,
            ...feedStyles
        }}>
          <h2 className="FeedItemHeader">{name}</h2>
          <h3 className="FeedItemSubheader">{category}</h3>
        </Link>
      </div>
    )
  })
  return feedItems
}

export default Feed