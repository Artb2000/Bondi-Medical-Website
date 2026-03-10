export const analyticsEvents = {
  bookNowClick: 'book_now_click',
  phoneClick: 'phone_click',
  emailClick: 'email_click',
  mapClick: 'map_click'
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, string> = {}
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}
