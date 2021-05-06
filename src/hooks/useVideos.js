import {useState, useEffect} from 'react';
import { getViewCount, getSearchInfo } from '../apis/youtube';


const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm])

  const getVideoById = (id) => {
    // To refer video view count
    return getViewCount.get(`/videos`, {
      params: {
        // To get default value of videoId from '/search' URL
        id: id
      }
    });
  }

  const search = async (term) => {
    const searchRes = await getSearchInfo.get('/search', {
      params: {
        q: term
      }
    });

    const searchResult = searchRes.data.items
    const videos = await Promise.all(searchResult.map(async (item) => {
      const videoId = item.id.videoId
      const detail = await getVideoById(videoId)
      const statistics = detail.data.items[0].statistics

      return { ...item, statistics }
    }))

    // debugger

    setVideos(videos);
  };
  
  return [videos, search]  
}

export default useVideos
