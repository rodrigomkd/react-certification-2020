import axios from "axios";
import {
    YOUTUBE_BASE_URL
  } from "../utils/constants";

export const fetchVideosList = (items) => {
    return {
        type: "FETCH_VIDEOS",
        payload: items
    }
}

const fetchVideos = (search) => {
  console.log("enva: " + process.env.REACT_APP_YOUTUBE_KEY);
    return (dispatch) => {
        axios.get(
            `${YOUTUBE_BASE_URL}/search`, {
                params: {
                    part: "snippet",
                    maxResults: 24,
                    key: process.env.REACT_APP_YOUTUBE_KEY,
                    q: search
                }
            }
          ).then(response => {
            dispatch(fetchVideosList(response.data.items.filter(item => (item.id.kind == 'youtube#video'))));
          }           
        ).catch(error => {
          console.error(error);
          dispatch(fetchVideosList([]));
        });
    }
  }

  export default fetchVideos;