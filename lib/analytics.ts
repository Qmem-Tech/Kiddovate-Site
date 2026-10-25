type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackStoreClick(store: 'app_store' | 'play_store', location: 'hero' | 'download') {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', store === 'app_store' ? 'app_store_click' : 'play_store_click', {
    location,
  });
}
