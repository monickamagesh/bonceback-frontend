import React from 'react';
import '../../../pages/patient/nav-items/reslibrary.css';

const ResLib = ({ videos }) => {
    return (
      <div className="reslib-parent-card">
        <div className="reslib-header">
          <h2 className="reslib-title">Video Guides</h2>
          <input
            type="text"
            className="reslib-search"
            placeholder="Search 'Push ups'"
          />
        </div>
        <div className="reslib-main-card">
          {videos.map((video, index) => (
            <div key={index} className="reslib-child-card">
              <img
                src={video.image}
                alt={video.title}
                className="reslib-image"
              />
              <h3 className="reslib-video-title">{video.title}</h3>
              <div className="reslib-info">
                <span className="reslib-duration">{video.duration}</span>
                <span className="reslib-time">{video.timeAgo}</span>
              </div>
              <button className="reslib-play-btn">Play</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ResLib;