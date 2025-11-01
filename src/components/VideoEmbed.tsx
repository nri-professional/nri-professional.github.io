// React
import React from "react";

// Styles
import '../assets/styles/Project.scss';

// Types
interface VideoEmbedProps {
  url: string; // YouTube embed URL
  title: string;
}

/**
 * VideoEmbed Component
 * 
 * Handles embedding of YouTube videos.
 * Provides responsive video containers with proper 16:9 aspect ratio.
 */
function VideoEmbed({ url, title }: VideoEmbedProps) {
  return (
    <div className="video-container">
      <iframe
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video-embed"
        loading="lazy"
      />
    </div>
  );
}

export default VideoEmbed;

