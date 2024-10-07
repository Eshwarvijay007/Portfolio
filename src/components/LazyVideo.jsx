import React from 'react';

const LazyVideo = ({ src }) => {
    return (
        <video 
            className="w-full rounded-t-lg h-auto object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
            loading="lazy"
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default LazyVideo;
