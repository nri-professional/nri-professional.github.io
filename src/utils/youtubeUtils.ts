/**
 * YouTube Utility Functions
 * 
 * Helper functions for working with YouTube videos and thumbnails.
 */

/**
 * Extracts the video ID from a YouTube embed URL
 * 
 * Supports formats:
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * 
 * @param url - YouTube URL (embed, short, or watch format)
 * @returns The video ID or null if not found
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  // Match embed URL: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];

  // Match short URL: https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];

  // Match watch URL: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];

  return null;
}

/**
 * Gets the YouTube thumbnail URL for a video ID
 * 
 * @param videoId - YouTube video ID
 * @param quality - Thumbnail quality: 'maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault' | 'default'
 * @returns The thumbnail URL
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault' | 'default' = 'maxresdefault'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Gets the YouTube thumbnail URL from a YouTube embed URL
 * 
 * @param url - YouTube embed URL
 * @param quality - Thumbnail quality (default: 'maxresdefault')
 * @returns The thumbnail URL or null if video ID cannot be extracted
 */
export function getYouTubeThumbnailFromUrl(
  url: string,
  quality: 'maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault' | 'default' = 'maxresdefault'
): string | null {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;
  return getYouTubeThumbnail(videoId, quality);
}

