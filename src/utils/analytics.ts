// Typed wrapper around window.gtag / window.dataLayer
// All events are no-ops if gtag hasn't loaded yet (e.g. ad-blocker).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const gtag = (...args: unknown[]) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
};

/** Fire GA4 + GTM dataLayer page_view (called automatically by GA4 config on hard nav) */
export const trackPageView = (path: string) => {
  gtag("event", "page_view", { page_path: path });
};

/**
 * Fire when a user clicks "Book" on a ride card.
 * @param itemName  e.g. "Strasbourg Sundowner"
 * @param price     numeric price in EUR
 */
export const trackAddToCart = (itemName: string, price: number) => {
  // GA4
  gtag("event", "add_to_cart", {
    currency: "EUR",
    value: price,
    items: [{ item_name: itemName, price, quantity: 1 }],
  });

  // Google Ads Add to Basket conversion
  gtag("event", "conversion", {
    send_to: "AW-18294352919/add_to_basket", // ← replace with your real label
    value: price,
    currency: "EUR",
  });
};

/**
 * Fire ONLY on the booking confirmation / thank-you page after payment.
 * @param transactionId  Unique order/booking ID from Bokun
 * @param value          Total amount paid in EUR
 * @param itemName       Ride name
 */
export const trackPurchase = (
  transactionId: string,
  value: number,
  itemName: string
) => {
  // GA4 purchase
  gtag("event", "purchase", {
    transaction_id: transactionId,
    value,
    currency: "EUR",
    items: [{ item_name: itemName, price: value, quantity: 1 }],
  });

  // Google Ads Purchase conversion (Bokun Purchase)
  gtag("event", "conversion", {
    send_to: "AW-18294352919/ZUajCKqWmM8cEJfYtpNE",
    value,
    currency: "EUR",
    transaction_id: transactionId,
  });
};
