import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gigimage from "@/assets/cycle2.png";

const GigHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="grid md:grid-cols-2 min-h-[600px] md:min-h-[900px]">
      <div className="bg-[#C8102E] flex items-center justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-6 md:mb-8">{t('gigHero.tag')}</p>
          
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 md:mb-8">
            {t('gigHero.title1')}<br />
            {t('gigHero.title2')}<br />
            {t('gigHero.title3')}
          </h1>
          
          <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
            {t('gigHero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-8 md:mb-12">
            <div>
              <div className="text-white text-2xl md:text-4xl font-serif font-bold whitespace-nowrap">{t('gigHero.price')}</div>
              <div className="text-white/60 text-xs tracking-[0.15em] uppercase mt-2">{t('gigHero.subscription')}</div>
            </div>
            <div>
              <div className="text-white text-2xl md:text-4xl font-serif font-bold">95%</div>
              <div className="text-white/60 text-xs tracking-[0.15em] uppercase mt-2">{t('gigHero.availability')}</div>
            </div>
          </div>
          
          <Link to="/contact" className="bg-[#F5F5DC] text-black px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-wide uppercase font-medium hover:bg-[#ECECD0] transition-colors w-full sm:w-auto inline-block text-center">
            {t('gigHero.cta')}
          </Link>
        </div>
      </div>
      
      <div className="bg-[#C8102E] relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-0">
        <img 
          src={gigimage} 
          alt="Minimalist white fixed-gear bicycle"
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>
    </section>
  );
};

export default GigHero;
