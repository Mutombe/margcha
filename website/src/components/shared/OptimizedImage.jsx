import { useState } from 'react';

const OptimizedImage = ({ src, alt, className = '', wrapperClassName = '', aspectRatio }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gray-100 dark:bg-gray-900 ${wrapperClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  );
};

export default OptimizedImage;
