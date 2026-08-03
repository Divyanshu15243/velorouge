import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Picture from "@/components/ui/picture";
import { Check } from "lucide-react";
import { trackAddToCart } from "@/utils/analytics";
import heroImg from "@/assets/minica-hero-minica.webp";
import heroImgAvif from "@/assets/minica-hero-minica.avif";
import sideImg from "@/assets/minica-side.webp";
import sideImgAvif from "@/assets/minica-side.avif";
import angleImg from "@/assets/minica-angle.webp";
import angleImgAvif from "@/assets/minica-angle.avif";

const PRICE = "€3,999";
const ORIGINAL_PRICE = "€4,999";
const SAVINGS = "€1,000";

const colourSwatches = [
  { id: "wood", hex: "#C9A876" },
  { id: "teak", hex: "#5B4130" },
  { id: "black", hex: "#1A1A1A" },
  { id: "pink", hex: "#E8A0AE" },
  { id: "denim", hex: "#3E5C79" },
  { id: "ivyGreen", hex: "#3C5A42" },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const MinicaPage = () => {
  const { t } = useTranslation();
  const deadline = t("minica.offerDeadline");

  const models = [
    {
      id: "minica",
      name: "Minica",
      subtitle: t("minica.modelMinicaSubtitle"),
      img: sideImg,
      imgAvif: sideImgAvif,
      w: 1200,
      h: 900,
    },
    {
      id: "minica-pet",
      name: "Minica Pet",
      subtitle: t("minica.modelPetSubtitle"),
      img: angleImg,
      imgAvif: angleImgAvif,
      w: 1200,
      h: 800,
    },
  ];

  const specs = [
    { label: t("minica.specMotorLabel"), value: t("minica.specMotorValue") },
    { label: t("minica.specBatteryLabel"), value: t("minica.specBatteryValue") },
    { label: t("minica.specRangeLabel"), value: t("minica.specRangeValue") },
    { label: t("minica.specAssistLabel"), value: t("minica.specAssistValue") },
    { label: t("minica.specBrakesLabel"), value: t("minica.specBrakesValue") },
    { label: t("minica.specGearHubLabel"), value: t("minica.specGearHubValue") },
    { label: t("minica.specFrameLabel"), value: t("minica.specFrameValue") },
    { label: t("minica.specWheelsLabel"), value: t("minica.specWheelsValue") },
  ];

  const colours = colourSwatches.map((c) => ({
    id: c.id,
    name: t(`minica.colour${c.id.charAt(0).toUpperCase()}${c.id.slice(1)}`),
    swatch: c.hex,
  }));

  const modelOptions = [
    { value: "minica", label: t("minica.modelOptionMinica") },
    { value: "minica-pet", label: t("minica.modelOptionPet") },
  ];

  const comparisonHeaders = [
    t("minica.comparisonHeaderFeature"),
    t("minica.comparisonHeaderMinica"),
    "Urban Arrow Family",
    "Babboe Curve/Go",
  ];

  const comparisonRows = [
    [t("minica.rowPrice"), PRICE, "€5,000–€8,000+", "€4,400–€5,100"],
    [t("minica.rowType"), t("minica.typeMinica"), t("minica.typeUrbanArrow"), t("minica.typeBabboe")],
    [t("minica.rowMotor"), t("minica.motorMinica"), t("minica.motorUrbanArrow"), t("minica.motorBabboe")],
    [t("minica.rowBattery"), t("minica.batteryMinica"), t("minica.batteryUrbanArrow"), t("minica.batteryBabboe")],
    [t("minica.rowRange"), t("minica.rangeMinica"), t("minica.rangeUrbanArrow"), t("minica.rangeBabboe")],
    [t("minica.rowLoad"), t("minica.loadMinica"), t("minica.loadUrbanArrow"), t("minica.loadBabboe")],
    [t("minica.rowGear"), t("minica.gearMinica"), t("minica.gearUrbanArrow"), t("minica.gearBabboe")],
    [t("minica.rowFrame"), t("minica.frameAluminium"), t("minica.frameAluminium"), t("minica.frameSteel")],
    [t("minica.rowWheels"), t("minica.wheels20"), t("minica.wheels2026"), t("minica.wheels2026")],
    [t("minica.rowCapacity"), t("minica.capacityMinica"), t("minica.capacityUrbanArrow"), t("minica.capacityBabboe")],
  ];

  const takeaways = [
    { rank: "1", name: t("minica.takeaway1Name"), desc: t("minica.takeaway1Desc") },
  ];

  const bullets = [t("minica.bullet1", { savings: SAVINGS }), t("minica.bullet2"), t("minica.bullet3")];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    model: modelOptions[0].value,
    colour: colours[0].name,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const body = new FormData();
      body.append("access_key", "1b2e69b7-2037-4a79-9727-75b38b97c06e");
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("subject", "VéloRouge x Minica — Pre-book request");
      const modelLabel = modelOptions.find((o) => o.value === formData.model)?.label ?? formData.model;
      body.append(
        "message",
        `Model: ${modelLabel}\nColour: ${formData.colour}\nName: ${formData.name}\nEmail: ${formData.email}`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        trackAddToCart(`Minica (${formData.model})`, 3999);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Minica pre-book submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FBF3E7] font-body">
      <SEO title={t("minica.seoTitle")} description={t("minica.seoDescription")} canonical="/minica" />
      <Helmet>
        <link rel="preload" as="image" href={heroImgAvif} type="image/avif" fetchPriority="high" />
      </Helmet>

      <Navbar />

      {/* ── Promo bar (sits just below the fixed site nav) ── */}
      <div className="pt-20">
        <div className="bg-primary text-primary-foreground text-center text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase py-2.5 px-4">
          {t("minica.promoBar", { savings: SAVINGS, deadline })}
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="py-16 md:py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
              {t("minica.presentedBy")}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
              Minica &amp;
              <br />
              Minica Pet
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-md mb-8">{t("minica.heroDesc")}</p>

            <div className="bg-white rounded-xl border border-black/5 p-6 max-w-sm mb-8">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground mb-2">
                {t("minica.preBookingOffer")}
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-primary">{PRICE}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{t("minica.offerValidUntil", { deadline })}</p>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="text-muted-foreground line-through">
                  {t("minica.originalPrice", { price: ORIGINAL_PRICE })}
                </span>
              </div>
              <p className="text-sm font-semibold">{t("minica.youSave", { savings: SAVINGS })}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToId("pre-book")}
                className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors"
              >
                {t("minica.preBookNow")}
              </button>
              <button
                onClick={() => scrollToId("specs")}
                className="border border-black/15 font-semibold px-8 py-3.5 rounded-full hover:border-black/30 transition-colors"
              >
                {t("minica.seeSpecs")}
              </button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-muted">
            <Picture
              avif={heroImgAvif}
              src={heroImg}
              alt={t("minica.heroImageAlt")}
              width={1920}
              height={1484}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ── Models / two ways to carry ── */}
      <section id="models" className="bg-background py-20">
        <div className="container">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            {t("minica.builtForCity")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            {t("minica.twoWaysTitle")}
          </h2>
          <p className="text-foreground/70 max-w-2xl mb-12 leading-relaxed">{t("minica.twoWaysDesc")}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {models.map((m) => (
              <div key={m.id} className="rounded-xl overflow-hidden border border-border bg-muted/30">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <Picture
                    avif={m.imgAvif}
                    src={m.img}
                    alt={m.name}
                    width={m.w}
                    height={m.h}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="font-display text-lg font-bold">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.subtitle}</div>
                  </div>
                  <div className="bg-muted rounded-full px-3 py-1.5 text-sm whitespace-nowrap">
                    <span className="line-through text-muted-foreground mr-1.5">{ORIGINAL_PRICE}</span>
                    <span className="font-semibold">{PRICE}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specification ── */}
      <section id="specs" className="bg-[#FBF3E7] py-20">
        <div className="container">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            {t("minica.specification")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-10">
            {t("minica.powertrainTitle")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border max-w-5xl">
            {specs.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground mb-1.5">
                  {s.label}
                </div>
                <div className="font-semibold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparative specs ── */}
      <section id="comparison" className="bg-background py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-center mb-3">
            {t("minica.comparisonTitle", { price: PRICE })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">{t("minica.comparisonSubtitle")}</p>

          <div className="overflow-x-auto rounded-xl border border-border mb-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {comparisonHeaders.map((h, i) => (
                    <th
                      key={h}
                      className={`px-4 py-3.5 text-left font-semibold whitespace-nowrap ${
                        i === 1 ? "bg-primary text-primary-foreground" : "bg-dark text-dark-foreground"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIdx) => (
                  <tr key={row[0]} className={rowIdx % 2 === 1 ? "bg-muted/30" : "bg-white"}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3 whitespace-nowrap ${
                          i === 0
                            ? "text-muted-foreground"
                            : i === 1
                            ? "bg-primary/10 font-semibold text-foreground"
                            : "text-foreground/80"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-2xl font-bold text-center mb-8">
            {t("minica.keyTakeawaysTitle", { price: PRICE })}
          </h3>
          <div className="max-w-xl mx-auto">
            {takeaways.map((tk) => (
              <div key={tk.rank} className="rounded-xl border border-border bg-white p-6 text-center">
                <div className="font-display text-lg font-bold mb-2">{tk.name}</div>
                <p className="text-sm text-foreground/70 leading-relaxed">{tk.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">{t("minica.comparisonDisclaimer")}</p>
        </div>
      </section>

      {/* ── Box colours ── */}
      <section id="colours" className="bg-background py-20">
        <div className="container">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            {t("minica.boxColours")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-10">
            {t("minica.finishesTitle")}
          </h2>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {colours.map((c) => (
              <div key={c.id} className="flex items-center gap-2.5">
                <span
                  className="w-6 h-6 rounded-full border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: c.swatch }}
                />
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pre-book CTA ── */}
      <section id="pre-book" className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-br from-[#FBE4DE] to-[#FCEFDC] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
                {t("minica.limitedTimeOffer")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-5">
                {t("minica.preBookSaveTitle", { savings: SAVINGS })}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
                {t("minica.preBookDesc", { price: PRICE, originalPrice: ORIGINAL_PRICE, deadline })}
              </p>
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="font-display text-xl font-bold mb-2">{t("minica.thanksTitle")}</p>
                  <p className="text-sm text-muted-foreground">{t("minica.thanksDesc", { deadline })}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-2xl font-bold text-primary">{PRICE}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {t("minica.originalPrice", { price: ORIGINAL_PRICE })}
                    </span>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder={t("minica.formNamePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder={t("minica.formEmailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                  >
                    {modelOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.colour}
                    onChange={(e) => setFormData({ ...formData, colour: e.target.value })}
                    className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                  >
                    {colours.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>

                  {error && <p className="text-sm text-destructive">{t("minica.formErrorMsg")}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? t("minica.sendingButton") : t("minica.reserveButton")}
                  </button>
                  <p className="text-xs text-muted-foreground text-center pt-1">
                    {t("minica.formFinePrint", { deadline })}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MinicaPage;
