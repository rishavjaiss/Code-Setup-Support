import React from "react";
import "../styles/VideoList.css";

function VideoList(props) {
  const results = props.results;
  const getSelectedVideo = props.getSelectedVideo;

  return (
    <div className="video-list col-md-4">
      {results &&
        results.map((item, index) => (
          <div
            key={item.etag}
            className="video-list-item"
            onClick={() => getSelectedVideo(results[index].id.videoId)}
          >
            <img src={item.snippet.thumbnails.default.url} alt="Preview" />
            <font>{item.snippet.title.toUpperCase()}</font>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
