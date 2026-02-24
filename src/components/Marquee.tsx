const Marquee = () => {
  const text = "100% curated rides in Strasbourg  •  12 unique routes to discover  •  Delivered to your door in under 24h  •  ";
  return (
    <div className="bg-primary text-primary-foreground py-[60px] px-12 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-2xl italic font-normal tracking-wide mx-4" style={{color: 'rgba(245, 240, 232, 0.9)'}}>{text}{text}{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
