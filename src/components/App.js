import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Youtube as videoIcon } from '@styled-icons/boxicons-logos/Youtube';
import styled from 'styled-components';
import useVideos from '../hooks/useVideos';


const VideoIcon = styled(videoIcon)`
   color:#00c4cc;
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
      <div style={{display: 'flex', alignItems:'center',  padding:'10px'}} >
        <VideoIcon/>
        <h2 style={{marginTop: '0',}}>
        Search Your Favorite Video!!
        </h2>
      </div >
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

