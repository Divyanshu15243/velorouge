import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { Instagram } from "lucide-react";
import { Music2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const body = new FormData();
      body.append("email", trimmedEmail);
      body.append("_subject", "VéloRouge Newsletter Subscription");
      body.append("message", `New newsletter subscription request from: ${trimmedEmail}`);

      const response = await fetch("https://formspree.io/f/mkoqnnyn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (response.ok) {
        setEmail("");
        setStatus("success");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };
  
  return (
  <footer className="bg-dark border-t border-dark-surface text-dark-foreground/60 py-12">
    <div className="container">

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VeloRouge" width={400} height={120} className="h-10 w-auto" loading="lazy" />
          </Link>
          <p className="mt-2 text-base max-w-xs">{t('footer.tagline')}</p>
          
          {/* Newsletter Section */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-bold text-dark-foreground mb-3">
              {t('footer.newsletterTitle')}
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                required
                disabled={status === "loading"}
                className="flex-1 bg-dark-surface border border-dark-surface rounded-none px-4 py-2.5 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:border-primary transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {status === "loading" ? "..." : t('footer.subscribe')}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-sm text-primary">Thanks for subscribing!</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-400">{errorMsg}</p>
            )}
          </div>
        </div>
        <div className="flex gap-12 text-base">
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.company')}</div>
            <Link to="/about" className="block hover:text-dark-foreground transition-colors">{t('footer.about')}</Link>
            <Link to="/visitors" className="block hover:text-dark-foreground transition-colors">{t('footer.rides')}</Link>
            <Link to="/residents" className="block hover:text-dark-foreground transition-colors">{t('footer.residents')}</Link>
            <Link to="/contact" className="block hover:text-dark-foreground transition-colors">{t('footer.contact')}</Link>
            <Link to="/blog" className="block hover:text-dark-foreground transition-colors">Blog</Link>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.quickLinks')}</div>
            <Link to="/" className="block hover:text-dark-foreground transition-colors">{t('footer.home')}</Link>
            <a href="/#pricing" className="block hover:text-dark-foreground transition-colors">{t('footer.pricing')}</a>
            <Link to="/about" className="block hover:text-dark-foreground transition-colors">{t('footer.faq')}</Link>
            <Link to="/safe-smart" className="block hover:text-dark-foreground transition-colors">{t('footer.safeSmart')}</Link>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.social')}</div>
            <a href="http://instagram.com/velorougefrance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@velorougeofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Music2 className="w-4 h-4" />
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-dark-surface text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <span>© 2026 VéloRouge. {t('footer.rights')}</span>
          <Link to="/privacy" className="hover:text-dark-foreground transition-colors">{t('footer.privacyPolicy')}</Link>
          <Link to="/precontractual" className="hover:text-dark-foreground transition-colors">{t('footer.precontractual')}</Link>
          <Link to="/cgs" className="hover:text-dark-foreground transition-colors">{t('footer.cgs')}</Link>
        </div>
        <div>
          Designed By <a href="https://blonqoo.ae" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Blonqoo.ae</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
