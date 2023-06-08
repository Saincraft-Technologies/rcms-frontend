import React from "react";

const VideoList = () => {
  const videoData = [
    {
      id: 1,
      title: "Video Title 1",
      thumbnail: "https://dummyimage.com/320x180/cccccc/ffffff",
      channel: "Channel 1",
      views: "10k",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Video Title 2",
      thumbnail: "https://dummyimage.com/320x180/cccccc/ffffff",
      channel: "Channel 2",
      views: "5k",
      duration: "2:30",
    },
    {
      id: 3,
      title: "Video Title 3",
      thumbnail: "https://dummyimage.com/320x180/cccccc/ffffff",
      channel: "Channel 3",
      views: "2k",
      duration: "4:15",
    },
  ];

  return (
    <div className="container" >

    <div className="video-list">
      {videoData.map((video) => (
         <div className="card mt-4" key={video.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={video.thumbnail} alt={video.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">
                  <span className="channel">Channel: {video.channel}</span>
                  <br />
                  <span className="views">Views: {video.views}</span>
                  <br />
                  <span className="duration">Duration: {video.duration}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoList;
