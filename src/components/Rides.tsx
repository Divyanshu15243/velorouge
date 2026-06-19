import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import rideSundowner from "@/assets/starboug-sunset.jpg";
import rideMarket from "@/assets/bar-hop-petite-france.jpg";
import rideRiver from "@/assets/strasbourg-insolite.jpg";
import rideLocal from "@/assets/ride-local.jpg";

const Rides = () => {
  const { t } = useTranslation();
  
  const rides = [
    { 
      img: rideSundowner, 
      title: t('rides.ride1Title'), 
      price: "49€", 
      tag: t('rides.favorite'),
      duration: "2h30",
      difficulty: t('rides.easy'),
      hook: t('rides.ride1Hook'),
      unique: t('rides.ride1Unique')
    },
    { 
      img: rideMarket, 
      title: t('rides.ride2Title'), 
      price: "49€", 
      tag: t('rides.popular'),
      duration: "3h",
      difficulty: t('rides.easy'),
      hook: t('rides.ride2Hook'),
      unique: t('rides.ride2Unique')
    },
    { 
      img: rideRiver, 
      title: t('rides.ride3Title'), 
      price: "49€", 
      tag: null,
      duration: "2h",
      difficulty: t('rides.moderate'),
      hook: t('rides.ride3Hook'),
      unique: t('rides.ride3Unique')
    },
    { 
      img: rideLocal, 
      title: t('rides.ride4Title'), 
      price: "49€", 
      tag: null,
      duration: "3h30",
      difficulty: t('rides.easy'),
      hook: t('rides.ride4Hook'),
      unique: t('rides.ride4Unique')
    },
  ];

  return (
  <section id="rides" className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md mb-4">
        {t('rides.title')}
        <br />
        {t('rides.titleLine2')} <em className="text-primary">{t('rides.titleHighlight')}</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((r) => (
          <Link key={r.title} to="/visitors" className="group cursor-pointer block">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {r.tag && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 tracking-wider">
                  {r.tag}
                </span>
              )}
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{r.duration}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>{r.difficulty}</span>
              </div>
              
              <h3 className="font-body text-2xl font-semibold mb-1 leading-tight">{r.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-0.5 leading-relaxed">{r.hook}</p>
              
              <p className="text-xs text-muted-foreground italic mb-2 leading-snug">{r.unique}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Rides;
