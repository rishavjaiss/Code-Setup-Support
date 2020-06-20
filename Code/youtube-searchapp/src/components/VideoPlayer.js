import React from 'react';

function VideoPlayer(props) {
    const selectedVideo = props.selectedVideo;
    const selectedVideoUrl = "https://www.youtube.com/embed/"+selectedVideo;

    return(
        <div className = "video-player col-md-7">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe src =  {selectedVideoUrl} title = {selectedVideo}/>
            </div>
        </div>
    );
}

export default VideoPlayer;