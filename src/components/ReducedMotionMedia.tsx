import { useEffect } from 'react';
import { MotionGlobalConfig, visualElementStore } from 'framer-motion';

const QUERY = '(prefers-reduced-motion: reduce)';
const FLAG = 'data-rm-autoplay';

function hold(video: HTMLVideoElement) {
  if (!video.autoplay && !video.hasAttribute(FLAG)) return;
  if (video.hasAttribute(FLAG) && video.paused && video.currentTime === 0) return;
  video.setAttribute(FLAG, '');
  video.autoplay = false;
  video.removeAttribute('autoplay');
  video.pause();
  // load() resets the element to its poster (or first frame) without playing.
  video.load();
}

function release(video: HTMLVideoElement) {
  if (!video.hasAttribute(FLAG)) return;
  video.removeAttribute(FLAG);
  video.autoplay = true;
  video.play().catch(() => { /* autoplay may be blocked; poster stays */ });
}

/**
 * Honours prefers-reduced-motion for every autoplaying <video>, including
 * those mounted later by client-side navigation and when the preference
 * changes while the page is open. Renders nothing.
 */
/**
 * framer-motion only reads `skipAnimations` when an animation starts, so
 * animations already in flight would keep running after the visitor switches
 * reduced motion on. They are completed in place instead: the page stays
 * mounted and no state (form text, focus, scroll, open panels) is lost.
 *
 *  - opacity runs on the Web Animations API  -> finish()
 *  - scaleX / y / scale run in JavaScript on motion values -> complete()
 */
function settleRunningAnimations() {
  document.querySelectorAll<HTMLElement>('#root *').forEach(element => {
    const visualElement = visualElementStore.get(element);
    if (!visualElement) return;
    visualElement.values.forEach(value => {
      try {
        value.animation?.complete();
      } catch {
        /* nothing to complete */
      }
    });
  });
  document.getAnimations().forEach(animation => {
    try {
      animation.finish();
    } catch {
      /* infinite animations cannot be finished; CSS handles those */
    }
  });
}

export function ReducedMotionMedia() {
  useEffect(() => {
    const media = window.matchMedia(QUERY);

    const apply = (root: ParentNode = document) => {
      const videos = root.querySelectorAll<HTMLVideoElement>('video');
      videos.forEach(media.matches ? hold : release);
    };

    const observer = new MutationObserver(records => {
      if (!media.matches) return;
      for (const record of records) {
        record.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          if (node instanceof HTMLVideoElement) hold(node);
          else apply(node);
        });
      }
    });

    const onChange = () => {
      MotionGlobalConfig.skipAnimations = media.matches;
      if (media.matches) settleRunningAnimations();
      apply();
    };
    apply();
    observer.observe(document.body, { childList: true, subtree: true });
    media.addEventListener('change', onChange);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', onChange);
    };
  }, []);

  return null;
}
