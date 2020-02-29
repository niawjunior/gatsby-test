import React from 'react'
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      width="100%"
      height="350px"
      src={videoSrcURL}
      title={videoSrcURL}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
