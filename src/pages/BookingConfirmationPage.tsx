import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackPurchase } from "@/utils/analytics";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Bokun redirects here after a successful payment with query params:
 *   ?order_id=BOKUN_ORDER_ID&item=Ride+Name&value=49&currency=EUR
 *
 * Example redirect URL to configure in Bokun:
 *   https://velorouge.fr/booking-confirmation?order_id={order_id}&item={product_title}&value={total_price}&currency=EUR
 */
const BookingConfirmationPage = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();

  const orderId    = params.get("order_id") ?? "";
  const itemName   = params.get("item")     ?? "VéloRouge Experience";
  const value      = parseFloat(params.get("value") ?? "0");

  useEffect(() => {
    // Only fire if we have a real order ID — prevents accidental re-fires
    if (!orderId) return;
    trackPurchase(orderId, value, itemName);
  }, [orderId, value, itemName]);

  return (
    <main className="bg-background">
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center py-24">
        <div className="container max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />

          <h1 className="font-display text-4xl md:text-5xl font-black mb-4">
            {t("bookingConfirmation.title", "Booking Confirmed!")}
          </h1>

          <p className="text-muted-foreground text-lg mb-2">
            {t("bookingConfirmation.subtitle", "Thank you for your booking.")}
          </p>

          {orderId && (
            <p className="text-sm text-muted-foreground mb-8">
              {t("bookingConfirmation.orderId", "Order ID")}: <span className="font-semibold text-foreground">{orderId}</span>
            </p>
          )}

          <p className="text-muted-foreground mb-10">
            {t("bookingConfirmation.desc", "You'll receive a confirmation email shortly with all the details for your ride.")}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            {t("bookingConfirmation.cta", "Back to Home")}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingConfirmationPage;
