/**
 * Documentary reveal: opacity only, once, never a translate.
 * (SUPRA_BRAND_SYSTEM_v2/02_WEB_SYSTEM.md §11)
 */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '0px 0px -8% 0px' },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: 'easeOut' as const, delay },
});
