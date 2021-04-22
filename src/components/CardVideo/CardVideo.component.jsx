import React from 'react';

import './CardVideo.styles.css';
import { useHistory } from 'react-router-dom';

const CardVideo = ({ id, title, description, videoLink, theme, to, refresh }) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/${id}`;
    if(to === 'favorites') {
      path = `/favorites/${id}`;
    }

    history.push(path);
  }
  
  return (
    <div className={theme} onClick={routeChange}>     
      <img
        src={videoLink}
        alt={title}
        tag={title}
        title={title}
      />
      <h1>{title}</h1>
      <div className={theme=='card-item' ? "description" : "description-dark"}>{description}</div>
    </div>
  );
}

export default CardVideo;
