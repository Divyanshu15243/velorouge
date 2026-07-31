import Picture from "@/components/ui/picture";
import reliableImg from "@/assets/8.webp";
import reliableImgAvif from "@/assets/8.avif";
import { useTranslation } from "react-i18next";

const ReliableSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t('reliableSection.title1')}
              <br />
              {t('reliableSection.title2')}
              <br />
              <em className="text-primary">{t('reliableSection.titleHighlight')}</em>
            </h2>
            <p className="mt-6 text-dark-foreground/70 max-w-md">
              {t('reliableSection.subtitle')}
            </p>
            <p className="mt-6 text-base text-dark-foreground/70">
              {t('reliableSection.feature1')}
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <Picture
              avif={reliableImgAvif}
              src={reliableImg}
              alt="Cyclist riding through Strasbourg"
              className="w-full h-full object-cover"
              width={1152}
              height={896}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableSection;
