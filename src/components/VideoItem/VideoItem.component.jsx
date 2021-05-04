import React, { useState, useEffect } from 'react';
import './VideoItem.styles.css';

const VideoItem = ({ id, title, description, videoSrc, image }) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    isFavorite();
  }, [id]);

  const addFavorite = () => {
    let items = JSON.parse(localStorage.getItem("videos"));
    if(items == null) {
      items = [];
    }
    const video = {"snippet" : {
      "thumbnails" : {
        "medium" : {}
      }
    }, "id" : {}};
    video.snippet.title = title;
    video.snippet.description = description;
    video.snippet.thumbnails.medium.url = image;
    video.id.videoId = id;

    items.push(JSON.stringify(video));
    localStorage.setItem("videos", JSON.stringify(items));

    isFavorite();
  };

  const removeFavorite = () => {
    let items = JSON.parse(localStorage.getItem("videos"));
    if(items == null) {
      items = [];
    }

    const videos = [];
    for(const item of items) {
      if(JSON.stringify(item).id.videoId == id) {
        continue;
      }

      videos.push(JSON.stringify(item));
    }

    localStorage.setItem("videos", JSON.stringify(videos));

    isFavorite();
  };

  const isFavorite = () => {
    let items = JSON.parse(localStorage.getItem("videos"));

    if(items == null) {
      setFavorite(false);
      return;
    }

    for(const item of items) {
      const itemJson = JSON.parse(item);
      if(itemJson.id.videoId == id) {
        setFavorite(true);
        return;
      }
    }

    setFavorite(false);
  }

  return (
      <div className="container-video">
          <iframe className="frame" src={videoSrc} title={title} />
          <div className="row">
            <div className="double-column">
              <h2>{title}</h2>
            </div>
          
            <div className="column">
              {!favorite ? <button className="favorite-button" onClick={addFavorite}>Add to favorites</button> : 
                <button className="favorite-button" onClick={removeFavorite}>Remove Favorites</button>
              }
              
              </div>
          </div>         
          <div className="description-video">{description}</div>
      </div>
  );
};

export default VideoItem;