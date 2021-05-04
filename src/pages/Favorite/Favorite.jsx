import React, { useState } from 'react';

import './Favorite.css';
import CardVideo from '../../components/CardVideo/CardVideo';
import { useEffect } from 'react';

const Favorite = ({ theme }) => {
  const [items, setItems] = useState(null);
  
  useEffect(() => { 
    const items = JSON.parse(localStorage.getItem("videos"));
    if(items == null) {
      return;
    }
    const parseVideos = [];
    for(const item of items) {
      parseVideos.push(JSON.parse(item));
    }

    setItems(parseVideos);
  }, []);

  return (
    <div className="cards">
        {items != null ? items.map((item, index) => (
          <CardVideo key={index}
            id={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.medium.url}
            videoLink={item.snippet.thumbnails.medium.url}
            theme={theme == 'light' ? "card-item" : "card-item-dark"}
            to="favorites"
            />
        )) : <div>Not favorites</div>}
        </div>
  );
}

export default Favorite;