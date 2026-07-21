import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { trackAddToCart } from "@/utils/analytics";

const BOKUN_CHANNEL = "79fde21a-45fd-4202-b90d-bfd9333501fd";

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isFrench = i18n.language?.startsWith("fr");
  const baseFeatures = [
    isFrench ? "Location de vélo électrique" : "E-bike rental",
    isFrench ? "Casque et antivol" : "Helmet & lock",
  ];

  useEffect(() => {
    const attachTracking = () => {
      document.querySelectorAll<HTMLElement>(".bokunButton").forEach((btn) => {
        if (btn.dataset.trackingAttached) return;
        btn.dataset.trackingAttached = "1";
        btn.addEventListener("click", () => {
          const planName = btn.dataset.planName ?? "VéloRouge Experience";
          const price = parseFloat(btn.dataset.planPrice ?? "0") || 0;
          trackAddToCart(planName, price);
        });
      });
    };

    const script = document.createElement("script");
    script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL}`;
    script.async = true;
    script.onload = attachTracking;
    document.body.appendChild(script);

    // attach immediately too in case buttons already rendered
    attachTracking();

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const plans = [
    {
      id: "halfday",
      name: t("pricing.plan3Name"),
      price: "€18",
      period: t("pricing.plan3Period"),
      target: t("pricing.plan3Target"),
      bokunId: "bokun_53550c4e_1e17_4fd0_9ed8_a447403c2f21",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238059?partialView=1`,
      features: [...baseFeatures],
    },
    {
      id: "discovery-day",
      name: t("pricing.plan1Name"),
      price: "€25",
      period: t("pricing.plan1Period"),
      target: t("pricing.plan1Target"),
      bokunId: "bokun_6143a63c_4f4b_450f_94a7_90eeec8b1287",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238051?partialView=1`,
      features: [...baseFeatures],
    },
    {
      id: "weekend",
      name: t("pricing.plan4Name"),
      price: "€42",
      period: t("pricing.plan4Period"),
      target: t("pricing.plan4Target"),
      bestValue: true,
      bokunId: "bokun_0df41703_2a01_4e5b_9c07_4b6b322dd5ad",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238095?partialView=1`,
      features: [...baseFeatures],
    },
  ];

  const featuredPlan = {
    id: "3day",
    name: t("pricing.plan5Name"),
    price: "€60",
    period: t("pricing.plan5Period"),
    target: t("pricing.plan5Target"),
    bokunId: "bokun_68bea1db_2fc1_43a4_9d42_b100473905e7",
    bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238065?partialView=1`,
    features: [...baseFeatures],
  };

  return (
    <section id="pricing" className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          {t("pricing.title")}
          <br />
          {t("pricing.titleLine2")} <em className="text-primary">{t("pricing.titleHighlight")}</em>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-6 border flex flex-col ${
                p.bestValue ? "border-primary bg-dark-surface" : "border-dark-surface"
              }`}
            >
              {p.bestValue && (
                <span className="self-start mb-3 text-xs font-semibold uppercase tracking-widest text-primary border border-primary px-2 py-0.5">
                  {t("pricing.bestValue")}
                </span>
              )}
              <div className="text-sm text-dark-foreground/60 mb-1">{p.name}</div>
              <div className="font-display text-3xl font-bold">{p.period}</div>
              <div className="mt-1 text-xs text-dark-foreground/40 italic">{p.target}</div>
              <ul className="mt-5 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-foreground/70">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="bokunButton mt-6 w-full py-3 text-sm font-semibold text-white transition-colors border-none cursor-pointer bg-red-600 hover:bg-red-700"
                id={p.bokunId}
                data-src={p.bokunSrc}
                data-plan-name={p.name}
                data-plan-price={p.price.replace(/[^0-9.]/g, "")}
              >
                {t("pricing.bookNowBtn")}
              </button>
            </div>
          ))}

          {/* Featured plan as 4th card */}
          <div className="p-6 border border-primary bg-dark-surface flex flex-col">
            <div className="text-sm text-dark-foreground/60 mb-1">{featuredPlan.name}</div>
            <div className="font-display text-3xl font-bold">{featuredPlan.period}</div>
            <div className="mt-1 text-xs text-dark-foreground/40 italic">{featuredPlan.target}</div>
            <ul className="mt-5 space-y-2 flex-1">
              {featuredPlan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-dark-foreground/70">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="bokunButton mt-6 w-full py-3 text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors border-none cursor-pointer"
              id={featuredPlan.bokunId}
              data-src={featuredPlan.bokunSrc}
              data-plan-name={featuredPlan.name}
              data-plan-price={featuredPlan.price.replace(/[^0-9.]/g, "")}
            >
              {t("pricing.bookNowBtn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
