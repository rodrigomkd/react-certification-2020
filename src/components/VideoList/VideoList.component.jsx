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
