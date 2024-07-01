import React from 'react';
import './BackgroundVideo.css';
import videoSrc from '../../assets/video/gfp-astro-timelapse.mp4';

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="bg-video">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
