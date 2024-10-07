import React from 'react';

const LazyImage = ({ src, alt }) => {
    return (
        <img 
            className="w-full rounded-t-lg h-auto object-cover" 
            src={src} 
            alt={alt} 
            loading="lazy"
        />
    );
};

export default LazyImage;
