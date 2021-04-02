import axios from "axios";
import {
    YOUTUBE_API_KEY,
    YOUTUBE_BASE_URL
  } from "../constants/api";

export const fetchVideosList = (items) => {
    return {
        type: "FETCH_VIDEOS",
        payload: items
    }
}

const fetchVideos = (search) => {
    return (dispatch) => {
        axios.get(
            `${YOUTUBE_BASE_URL}/search`, {
                params: {
                    part: "snippet",
                    maxResults: 24,
                    key: YOUTUBE_API_KEY,
                    q: search
                }
            }
          ).then(response => {
            dispatch(fetchVideosList(response.data.items.filter(item => (item.id.kind == 'youtube#video'))));
          }           
        );
    }
  }

  export default fetchVideos;