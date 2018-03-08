import React from 'react';
import VideoThumb from './videoThumb';

const VideoList = (props) => {
    
    const videosList = props.videos.map( video => {
        return <VideoThumb 
            onVideoSelect={props.onVideoSelect} 
            key={video.etag} 
            video={video}/>
    } );
    
    return <ul className='col-md-5'>
        {videosList}
    </ul>;
}

export default VideoList;