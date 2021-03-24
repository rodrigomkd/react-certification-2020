import React from 'react';

import './CardVideo.styles.css';

function CardVideo({ title, description, videoLink }) {
  return (
    <div className="card-item">
      
      <img
        src={videoLink}
        alt={title}
        tag={title}
        title={title}
      />
      <h1>{title}</h1>
      <label className="description">{description}</label>
    </div>
  );
}

export default CardVideo;
