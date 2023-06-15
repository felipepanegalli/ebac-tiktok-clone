import React from 'react';
import video from './video.css'

function Video() {
    return (
        <div className="video">
            Eu sou um video
            <video className="video__player"></video>
        </div>
    );
}

export default Video;