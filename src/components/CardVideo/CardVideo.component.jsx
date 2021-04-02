import React from 'react';

import './CardVideo.styles.css';
import { useHistory } from 'react-router-dom';


const CardVideo = ({ id, title, description, videoLink }) => {
  const history = useHistory();
  const routeChange = () => {
    const path = `/${id}`;
    
    history.push(path);
  }
  
  return (
    <div className="card-item" onClick={routeChange}>     
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
