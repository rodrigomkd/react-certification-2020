import React from 'react';
import './VideoItem.styles.css';

const VideoItem = ({ title, description, videoSrc }) => {

  return (
      <div className="container-video">
          <iframe className="frame" src={videoSrc} title={title} />
          <h2>{title}</h2>
          <p>{description}</p>
      </div>
  );
};

export default VideoItem;