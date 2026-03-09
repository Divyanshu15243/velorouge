import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";
import { Music2 } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark border-t border-dark-surface text-dark-foreground/60 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <a href="#" className="flex items-center">
            <img src={logo} alt="VeloRouge" className="h-10" />
          </a>
          <p className="mt-2 text-sm max-w-xs">Expériences vélo électrique premium à Strasbourg, France.</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">Entreprise</div>
            <a href="#" className="block hover:text-dark-foreground transition-colors">À propos</a>
            <a href="#" className="block hover:text-dark-foreground transition-colors">Carrières</a>
            <a href="#" className="block hover:text-dark-foreground transition-colors">Contact</a>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">Produit</div>
            <a href="#" className="block hover:text-dark-foreground transition-colors">Circuits</a>
            <a href="#" className="block hover:text-dark-foreground transition-colors">Tarifs</a>
            <a href="#" className="block hover:text-dark-foreground transition-colors">FAQ</a>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">Réseaux sociaux</div>
            <a href="http://instagram.com/velorougefrance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a href="http://tiktok.com/@velorougefrance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Music2 className="w-4 h-4" />
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-dark-surface text-xs">
        © 2026 VeloRouge. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
