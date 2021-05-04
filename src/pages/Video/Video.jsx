import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Video.css';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import VideoColumn from '../../components/VideoColumn/VideoColumn';
import VideoItem from '../../components/VideoItem/VideoItem';
import { useHistory } from 'react-router-dom';
import { 
  YOUTUBE_EMBEDD_URL, 
  YOUTUBE_BASE_URL
} from '../../utils/constants';

function Video() {
  const reducer = useSelector((state) => state.reducer);
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [image, setImage] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchVideo();
  }, [id]);

  const fetchVideo = () => {
    axios.get(
      `${YOUTUBE_BASE_URL}/search`, {
          params: {
              part: "snippet",
              maxResults: 1,
              key: process.env.REACT_APP_YOUTUBE_KEY,
              q: `youtu.be/${id}`
          }
      }
    ).then(response => {
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSourceUrl(`${YOUTUBE_EMBEDD_URL}/${id}`);
        setImage(response.data.items[0].snippet.thumbnails.medium.url);
      }           
    );
  };

  const refresh = (itemid) => {
    let path = `/${itemid}`;

    history.push(path);
  }

  return (
    <div>   
        <div className='row'>
          <div className='double-column'>
            <VideoItem id={id} title={title} description={description} videoSrc={sourceUrl} image={image} />
          </div>

          <div className='column'>
            <VideoColumn items={reducer.items} refresh={refresh} />
          </div>
        </div>
    </div>
  );
}

export default Video;