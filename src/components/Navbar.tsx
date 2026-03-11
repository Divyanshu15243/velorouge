import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { label: t('nav.home'), to: "/" },
    { label: t('nav.about'), to: "/about" },
    { label: t('nav.visitors'), to: "/visitors" },
    { label: t('nav.residents'), to: "/residents" },
    { label: t('nav.safeSmart'), to: "/safe-smart" },
    { label: t('nav.contact'), to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="VeloRouge" className="h-10" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8">
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

          <button onClick={() => setOpen(!open)} className="md:hidden text-dark-foreground">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
