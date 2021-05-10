import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  const publishDate = video.snippet.publishedAt.split("T")[0];
  const views = Number(video.statistics.viewCount);

  const separate = (num) => {
    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
       <div style={{display: 'flex', flexDirection: ''}}>
          <p>{separate(views)} views  • </p>
          <p>&nbsp; {publishDate} </p>
       </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
