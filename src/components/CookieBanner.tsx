import { useState, useEffect } from "react";

const COOKIE_KEY = "velorouge_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark text-dark-foreground border-t border-primary/20 px-6 py-4 shadow-2xl">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-dark-foreground/80 max-w-2xl">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies conformément à notre{" "}
          <a href="/privacy" className="text-primary underline hover:text-primary/80 transition-colors">
            politique de confidentialité
          </a>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-semibold border border-dark-foreground/30 text-dark-foreground/70 hover:border-dark-foreground/60 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
