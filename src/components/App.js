import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Youtube as videoIcon } from '@styled-icons/boxicons-logos/Youtube';
import styled from 'styled-components';
import useVideos from '../hooks/useVideos';

const VideoCtn = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  h2{
    margin-top: 0;
  }
`

const VideoIcon = styled(videoIcon)`
   color:#cc1100;
   width:40px;
   margin-right:10px;
`;

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Otani Shohei')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  const onVideoSelect = ( video ) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <VideoCtn  >
        <VideoIcon/>
        <h2>
        Search Your Favorite Video!!
        </h2>
      </VideoCtn >
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row stackable">
         <div className="eleven wide column"> 
         　　<VideoDetail 
             video={selectedVideo}
             />
         </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

