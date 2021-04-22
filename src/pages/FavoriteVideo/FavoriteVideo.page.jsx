import React, { useState, useEffect } from 'react';
import './FavoriteVideo.styles.css';
import { useParams } from "react-router";
import VideoColumn from '../../components/VideoColumn';
import VideoItem from '../../components/VideoItem';
import { useHistory } from 'react-router-dom';
import { 
  YOUTUBE_EMBEDD_URL
} from '../../constants/api';

function FavoriteVideoPage() {
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [videos, setVideos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchVideo();
    fetchFavorites();
  }, [id]);

  const fetchVideo = () => {
    const items = JSON.parse(localStorage.getItem("videos"));
    for(const item of items) {
      const video = JSON.parse(item);
      if(video.id.videoId == id) {
        setTitle(video.snippet.title);
        setDescription(video.snippet.description);
        setSourceUrl(`${YOUTUBE_EMBEDD_URL}/${id}`);
        setImage(video.snippet.thumbnails.medium.url);
        break;
      }
    }
  };

  const fetchFavorites = () => {
    const items = JSON.parse(localStorage.getItem("videos"));
    const parseVideos = [];
    for(const item of items) {
      parseVideos.push(JSON.parse(item));
    }

    console.log("videos: " + parseVideos);
    setVideos(parseVideos);
  }

  const refresh = (itemid) => {
    let path = `/favorites/${itemid}`;

    history.push(path);
  }

  return (
    <div>   
        <div className='row'>
          <div className='double-column'>
            <VideoItem id={id} title={title} description={description} videoSrc={sourceUrl} image={image} />
          </div>

          <div className='column'>
            <VideoColumn items={videos} refresh={refresh} />
          </div>
        </div>
    </div>
  );
}

export default FavoriteVideoPage;
