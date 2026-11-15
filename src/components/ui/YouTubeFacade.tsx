import { useEffect, useRef, useState } from 'react';

interface YouTubeFacadeProps {
  /** YouTube video id */
  id: string;
  /** Accessible name; also used as the iframe title once loaded */
  title: string;
  /** Embed host and query used after activation */
  embedSrc?: string;
  allow?: string;
  className?: string;
}

/**
 * Click-to-load YouTube embed. Nothing from YouTube's player is requested
 * until the visitor asks for the video; then the original iframe is mounted
 * with autoplay so one click still starts playback.
 */
export function YouTubeFacade({
  id,
  title,
  embedSrc,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  className = '',
}: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // The play button disappears when the player mounts; hand focus to the player
  // so keyboard users land on the video they just started.
  useEffect(() => {
    if (active) frameRef.current?.focus();
  }, [active]);
  const base = embedSrc ?? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  const src = `${base}${base.includes('?') ? '&' : '?'}autoplay=1`;

  if (active) {
    return (
      <iframe
        ref={frameRef}
        src={src}
        title={title}
        allow={allow}
        allowFullScreen
        className={`absolute inset-0 w-full h-full ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={title}
      className={`group absolute inset-0 w-full h-full cursor-pointer bg-[#141311] ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute left-5 bottom-5 flex h-12 w-12 items-center justify-center border border-[#ede9e3]/70 bg-[#141311]/55 transition-colors duration-300 group-hover:bg-[#B89A4F] group-hover:border-[#B89A4F] group-focus-visible:bg-[#B89A4F]"
      >
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M1 1.2v13.6L13 8 1 1.2Z" fill="#ede9e3" />
        </svg>
      </span>
    </button>
  );
}
