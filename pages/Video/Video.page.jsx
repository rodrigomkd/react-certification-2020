import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Video.styles.css';
import { useParams } from "react-router";
import VideoList from '../../components/VideoList';
import VideoItem from '../../components/VideoItem';
import { 
  YOUTUBE_EMBEDD_URL, 
  YOUTUBE_BASE_URL,
  YOUTUBE_API_KEY
} from '../../constants/api';

function VideoPage() {
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [sourceUrl, setSourceUrl] = useState(null);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = () => {
    axios.get(
      `${YOUTUBE_BASE_URL}/search`, {
          params: {
              part: "snippet",
              maxResults: 1,
              key: YOUTUBE_API_KEY,
              q: `youtu.be/${id}`
          }
      }
    ).then(response => {
        setTitle(response.data.items[0].snippet.title);
        setDescription(response.data.items[0].snippet.description);
        setSourceUrl(`${YOUTUBE_EMBEDD_URL}/${id}`);
      }           
    );
  };

  return (
    <div >   
        <div className='row'>
          <div className='double-column'>
            <VideoItem title={title} description={description} videoSrc={sourceUrl} />
          </div>

          <div className='column'>
            <VideoList />
          </div>
        </div>
      </div>
  );
}

export default VideoPage;
