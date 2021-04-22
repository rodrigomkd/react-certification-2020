import React from 'react';

import './VideoColumn.styles.css';

const VideoColumn = ({ items, refresh }) => {

  return (
    <div>
      {items.map((item, index) => (
        <div className="video-column" onClick={ () => refresh(item.id.videoId)}>
        <div className="row" id={index}>
          <div className="column">
          <img
          
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.thumbnails.medium.url}
          tag={item.snippet.thumbnails.medium.url}
          title={item.snippet.thumbnails.medium.url}
          />
          </div>

          <div className="double-column">
            <div>{item.snippet.title}</div>
          </div>       
      </div>
      </div>
      ))}
    </div>
  );
}

export default VideoColumn;