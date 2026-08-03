import { useTranslation } from "react-i18next";
import Picture from "@/components/ui/picture";
import founderImg from "@/assets/founder2.webp";
import founderImgAvif from "@/assets/founder2.avif";

const FounderStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
          {t('founderStory.title').split(' ').slice(0, -1).join(' ')} <em className="text-primary">{t('founderStory.title').split(' ').slice(-1)}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <Picture
              avif={founderImgAvif}
              src={founderImg}
              alt="Prashant Kothari, founder of TourDeWheel (VéloRouge)"
              className="w-full h-full object-cover"
              width={900}
              height={675}
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.intro')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.communitiesIntro')}
            </p>
            <ul className="space-y-3">
              {[t('founderStory.community1'), t('founderStory.community2'), t('founderStory.community3')].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base md:text-lg leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.quietMoments')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.shift')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground font-medium">
              {t('founderStory.closing')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
