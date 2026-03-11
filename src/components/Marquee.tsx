import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  const text = "Rides in Strasbourg  •  6 unique routes to discover  •  100% carefully selected routes in Strasbourg  •  ";

  return (
    <div className="bg-primary text-primary-foreground py-[60px] px-12 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-2xl italic font-normal tracking-wide mx-4" style={{color: 'rgba(245, 240, 232, 0.9)'}}>{text}{text}{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
