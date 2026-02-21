const Marquee = () => {
  const text = "100% curated rides in Strasbourg  •  12 unique routes to discover  •  Delivered to your door in under 24h  •  ";
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm font-semibold tracking-wide mx-4">{text}{text}{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
