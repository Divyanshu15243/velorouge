import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const links = [
    { label: t('nav.home'), to: "/" },
    { label: t('nav.about'), to: "/about" },
    { label: t('nav.visitors'), to: "/visitors" },
    { label: t('nav.residents'), to: "/residents" },
    { label: "Minica", to: "/minica" },
    { label: "Blog", to: "/blog" },
    { label: t('nav.contact'), to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="VeloRouge" width={400} height={120} className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                location.pathname === l.to
                  ? "text-primary font-semibold"
                  : "text-dark-foreground/70 hover:text-dark-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => changeLanguage('fr')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              currentLanguage === 'fr'
                ? 'bg-primary text-primary-foreground'
                : 'text-dark-foreground/70 hover:text-dark-foreground hover:bg-dark-surface'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              currentLanguage === 'en'
                ? 'bg-primary text-primary-foreground'
                : 'text-dark-foreground/70 hover:text-dark-foreground hover:bg-dark-surface'
            }`}
          >
            EN
          </button>


          <button onClick={() => setOpen(!open)} className="md:hidden text-dark-foreground ml-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-dark border-t border-dark-surface px-6 pb-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm ${
                location.pathname === l.to
                  ? "text-primary font-semibold"
                  : "text-dark-foreground/70 hover:text-dark-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => changeLanguage('fr')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentLanguage === 'fr'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-dark-foreground/70 bg-dark-surface'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentLanguage === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-dark-foreground/70 bg-dark-surface'
              }`}
            >
              EN
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
