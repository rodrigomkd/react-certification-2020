import React from 'react';

import './VideoList.styles.css';
import CardVideo from '../../components/CardVideo';
import { useSelector } from 'react-redux';

const VideoList = () => {
  const reducer = useSelector((state) => state.reducer);
  const theme = useSelector((state) => state.themeReducer);
 
  return (
    <div className="cards">
        {reducer.items.map((item, index) => (
          <CardVideo key={index}
            id={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.medium.url}
            videoLink={item.snippet.thumbnails.medium.url}
            theme={theme.mode == 'light' ? "card-item" : "card-item-dark"}
            />
        ))}
        </div>
  );
}

export default VideoList;
/*

import React, { useState } from 'react';

import './VideoList.styles.css';
import CardVideo from '../../components/CardVideo';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const VideoList = ({ items, to, refresh }) => {
  const reducer = useSelector((state) => state.reducer);  
  const theme = useSelector((state) => state.themeReducer);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(reducer.items);
    setVideos(reducer.items);
    /*
    if(items) {
      setVideos(items);
    } else {
      console.log("entra" + reducer.items);
      setVideos(reducer.items);
    }
   
  }, []);

  return (
    <div className="cards">
      {items ? 
      videos.map((item, index) => (
        <CardVideo key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          videoLink={item.image}
          theme={theme.mode == 'light' ? "card-item" : "card-item-dark"}
          to={to}
          refresh={refresh}
          />
      ))
     :

    videos.map((item, index) => (
      <CardVideo key={index}
        id={item.id.videoId}
        title={item.snippet.title}
        description={item.snippet.description}
        image={item.snippet.thumbnails.medium.url}
        videoLink={item.snippet.thumbnails.medium.url}
        theme={theme.mode == 'light' ? "card-item" : "card-item-dark"}
        />
    ))
}
    </div>
   
  );
}

export default VideoList;
*/