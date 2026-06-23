import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const pricingFR = [
  { product: "Location Segway", price: "29 €", vehicle: "Trottinette Segway L60", format: "Autonome · app · 2h" },
  { product: "Expérience E-Bike Audio + Stampz", price: "49 €", vehicle: "Vélo électrique premium", format: "Auto-guidé · IZI Travel · 3–4h" },
  { product: "Visite guidée groupe", price: "59 €/pers · min 4", vehicle: "Vélo électrique premium", format: "Guide humain · 3h · max 8" },
];

const pricingEN = [
  { product: "Segway Rental", price: "€29", vehicle: "Segway Scooter L60", format: "Self-guided · app · 2h" },
  { product: "E-Bike Audio + Stampz Guided Experience", price: "€49", vehicle: "Premium electric bike", format: "Self-guided · IZI Travel · 3–4h" },
  { product: "Group guided tour", price: "€59/person · min 4", vehicle: "Premium electric bike", format: "Human guide · 3h · max 8" },
];

const fr = {
  pageTitle: "Fiche d'information précontractuelle",
  pageSubtitle: "Expérience touristique – location de vélos à assistance électrique avec circuit guidé et de trottinettes Segway",
  pricing: pricingFR,
  pricingHeaders: ["Produit", "Prix public TTC", "Véhicule", "Format"],
  sections: [
    {
      heading: "1. Identité et coordonnées du professionnel",
      rows: [
        ["Dénomination sociale", "TourDeWheel"],
        ["Forme sociale", "Société par actions simplifiée, au capital social de 20 000 €"],
        ["RCS", "Strasbourg 100 164 706"],
        ["Adresse du siège", "16 avenue de la Paix – 67000 Strasbourg"],
        ["Téléphone", "+33 622 810716"],
        ["Adresse électronique", "Bonjour@velorouge.fr"],
        ["Point de contact sur place", "Téléphone d'urgence joignable pendant l'activité : +33 622 810716"],
      ],
    },
    {
      heading: "2. Description et caractéristiques principales de l'expérience",
      body: "Type de prestation : Location de vélos à assistance électrique ou de trottinettes Segway\n\nCircuits touristiques guidés :\n[ ] Circuit X : Nom du circuit — Itinéraire, Principaux points d'intérêt visités, Niveau de difficulté (physique / technique), Vitesse moyenne / distance approximative : [●] km, durée\n[ ] Circuit Y : Nom du circuit — Itinéraire, Principaux points d'intérêt visités, Niveau de difficulté (physique / technique), Vitesse moyenne / distance approximative : [●] km, durée\n[ ] Circuit Z : Nom du circuit — Itinéraire, Principaux points d'intérêt visités, Niveau de difficulté (physique / technique), Vitesse moyenne / distance approximative : [●] km, durée\n\nMode de guidage :\n[ ] via application mobile\n[ ] avec guide accompagnateur indépendant\n\nTaille du groupe pour les visites guidées avec un guide indépendant :\n– Nombre minimal de participants requis : 4 personnes\n– Nombre maximal de participants : 8 personnes\n\nLangue dans laquelle les informations et explications sont fournies : FR / EN / DE",
      subsections: [
        {
          heading: "Équipements fournis par TourDeWheel",
          items: [
            "Vélo à assistance électrique (modèle / puissance nominale : [●])",
            "Trottinettes Segway (modèle / puissance nominale : [●])",
            "Casque",
            "Antivol",
            "Batterie et chargeur",
            "Gilet haute visibilité",
            "Autres accessoires",
          ],
        },
        {
          heading: "Équipements et conditions à la charge du participant",
          items: [
            "Tenue et chaussures adaptées à la pratique du vélo",
            "Déclaration d'aptitude",
            "Âge minimum : 18 ans ou 16 ans accompagné d'un adulte",
          ],
        },
      ],
    },
    {
      heading: "3. Prix et frais supplémentaires éventuels",
      body: "Prix total TTC de l'expérience par personne, selon tableau ci-dessous.",
      table: true,
      afterTable: "Ce prix comprend : mise à disposition des vélos ou des trottinettes Segway, équipements listés et le guidage, le cas échéant.",
    },
    {
      heading: "4. Modalités de paiement",
      body: "L'intégralité du prix des Expériences touristiques est payable au moment de la réservation.\n\nMoyens de paiement acceptés : carte bancaire / espèces",
      subsections: [
        {
          heading: "Garanties financières",
          items: [
            "Dépôt de garantie exigé : 99 € / VAE ou Segway loué",
            "Modalités : empreinte carte, pré-autorisation, etc.",
          ],
        },
      ],
    },
    {
      heading: "5. Conditions de franchissement des frontières et formalités administratives / sanitaires",
      body: "L'expérience se déroule exclusivement en France et n'autorise pas de franchissement de frontière. Le participant doit être muni des documents d'identité légalement requis pour circuler sur le territoire (carte nationale d'identité, etc.).",
    },
    {
      heading: "6. Conditions d'annulation / résolution du contrat",
      body: "Le droit de rétractation ne s'applique pas aux services de loisirs fournis à une date ou période déterminée, conformément à l'article L.221-28 du Code de la consommation.\n\nToutefois, le Client peut annuler la location dans les conditions suivantes :",
      items: [
        "Annulation par le client plus de 48h avant : remboursement intégral",
        "Annulation entre 24h et 48h avant : remboursement à 50 %",
        "Annulation moins de 24h avant ou non-présentation : aucun remboursement — prestation due intégralement",
      ],
      afterItems: "En cas d'annulation par TourDeWheel (météo extrême, incident technique) : remboursement intégral ou report sans frais.",
    },
    {
      heading: "7. Sécurité, responsabilités et assurances",
      body: "TourDeWheel informe le participant :",
      items: [
        "Des risques inhérents à la pratique du vélo et à la participation à un circuit guidé (circulation sur voie publique, relief, conditions météorologiques, etc.)",
        "Des consignes de sécurité à respecter (port du casque, respect du Code de la route, conduite adaptée au niveau du participant et aux conditions du parcours, interdiction de conduire sous l'emprise d'alcool ou de substances altérant la vigilance, etc.)",
      ],
      afterItems: "TourDeWheel est responsable de la bonne exécution des services compris dans l'expérience, dans les limites prévues par la loi, et déclare être couvert par une assurance responsabilité civile professionnelle appropriée.\n\nLe participant est responsable de la garde du vélo et des accessoires pendant la durée de mise à disposition. En cas de dommage, perte ou vol, sa responsabilité peut être engagée.",
    },
    {
      heading: "8. Conditions générales de services",
      body: "La réservation effectuée par le participant implique l'acception sans réserve des conditions générales de services.",
    },
    {
      heading: "9. Traitement des réclamations, médiation et règlement des litiges",
      body: "Toute réclamation relative à l'exécution de l'expérience peut être adressée à TourDeWheel :",
      items: [
        "Par courrier : 16 avenue de la Paix – 67000 Strasbourg",
        "Par courriel : Bonjour@velorouge.fr",
        "Par téléphone : +33 622 810716",
      ],
      afterItems: "TourDeWheel s'engage à accuser réception de la réclamation et à y répondre dans un délai raisonnable.\n\nEn cas de litige persistant, le participant est informé de la possibilité de recourir gratuitement à un médiateur de la consommation.\n\nLes litiges peuvent également être portés devant les juridictions françaises compétentes.\n\nLe participant reconnaît avoir pris connaissance, avant toute réservation ferme, des informations contenues dans la présente fiche, qui lui ont été communiquées de manière lisible et compréhensible sur un support durable.",
    },
  ],
};

const en = {
  pageTitle: "Pre-Contractual Information Sheet",
  pageSubtitle: "Tourist experience – electric bike rental with guided tour and Segway scooters",
  pricing: pricingEN,
  pricingHeaders: ["Product", "Public price incl. VAT", "Vehicle", "Format"],
  sections: [
    {
      heading: "1. Professional's identity and contact details",
      rows: [
        ["Company name", "TourDeWheel"],
        ["Company form", "Simplified joint-stock company, with a share capital of €20,000"],
        ["RCS", "Strasbourg 100,164,706"],
        ["Registered office address", "16 avenue de la Paix – 67000 Strasbourg"],
        ["Telephone", "+33 622 810716"],
        ["Email address", "Bonjour@velorouge.fr"],
        ["On-site contact person", "Emergency telephone number reachable during the activity: +33 622 810716"],
      ],
    },
    {
      heading: "2. Description and main characteristics of the experience",
      body: "Type of service: Rental of electric bikes or Segway scooters\n\nGuided tours:\n[ ] Tour X: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n[ ] Tour Y: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n[ ] Tour Z: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n\nGuidance method:\n[ ] via mobile application\n[ ] with an independent accompanying guide\n\nGroup size for guided tours with an independent guide:\n– Minimum number of participants required: 4 people\n– Maximum number of participants: 8 people\n\nLanguage in which information and explanations are provided: FR / EN / DE",
      subsections: [
        {
          heading: "Equipment provided by TourDeWheel",
          items: [
            "Electric bike (model / nominal power: [●])",
            "Segway scooters (model / nominal power: [●])",
            "Helmet",
            "Lock",
            "Battery and charger",
            "High-visibility vest",
            "Other accessories",
          ],
        },
        {
          heading: "Equipment and conditions to be provided by the participant",
          items: [
            "Suitable clothing and footwear for cycling",
            "Fitness declaration",
            "Minimum age: 18 years or 16 years accompanied by an adult",
          ],
        },
      ],
    },
    {
      heading: "3. Price and any additional fees",
      body: "Total price including VAT per person, according to the table below.",
      table: true,
      afterTable: "This price includes: provision of bikes or Segway scooters, listed equipment and guidance, where applicable.",
    },
    {
      heading: "4. Payment terms",
      body: "The full price of the Tourist Experiences is payable at the time of booking.\n\nAccepted payment methods: bank card / cash",
      subsections: [
        {
          heading: "Financial guarantees",
          items: [
            "Security deposit required: €99 per e-bike or Segway rented",
            "Terms: card imprint, pre-authorisation, etc.",
          ],
        },
      ],
    },
    {
      heading: "5. Conditions for crossing borders and administrative / health formalities",
      body: "The experience takes place exclusively in France and does not involve crossing any borders; the participant must have the identity documents legally required to travel in the territory (national identity card, etc.).",
    },
    {
      heading: "6. Cancellation / contract termination conditions",
      body: "The right of withdrawal does not apply to leisure services provided on a specific date or period, in accordance with Article L.221-28 of the French Consumer Code.\n\nHowever, the Customer may cancel the rental under the following conditions:",
      items: [
        "Cancellation by the customer more than 48 hours in advance: full refund",
        "Cancellation between 24 and 48 hours in advance: 50% refund",
        "Cancellation less than 24 hours in advance or no-show: no refund — service fully due",
      ],
      afterItems: "In case of cancellation by TourDeWheel (extreme weather, technical incident): full refund or free postponement.",
    },
    {
      heading: "7. Safety, responsibilities and insurance",
      body: "TourDeWheel informs the participant:",
      items: [
        "Of the risks inherent in cycling and participating in a guided tour (public road traffic, terrain, weather conditions, etc.)",
        "Of the safety instructions to be followed (wearing a helmet, respecting the Highway Code, riding adapted to the participant level and the route conditions, prohibition of riding under the influence of alcohol or substances that impair vigilance, etc.)",
      ],
      afterItems: "TourDeWheel is responsible for the proper execution of the services included in the experience, within the limits provided by law, and declares to be covered by appropriate professional civil liability insurance.\n\nThe participant is responsible for the safekeeping of the bike and accessories during the rental period. In case of damage, loss or theft, their liability may be engaged.",
    },
    {
      heading: "8. General terms and conditions of service",
      body: "The booking made by the participant implies unreserved acceptance of the general terms and conditions of service.",
    },
    {
      heading: "9. Complaint handling, mediation and dispute resolution",
      body: "Any complaint relating to the execution of the experience may be sent to TourDeWheel:",
      items: [
        "By post: 16 avenue de la Paix – 67000 Strasbourg",
        "By email: Bonjour@velorouge.fr",
        "By telephone: +33 622 810716",
      ],
      afterItems: "TourDeWheel undertakes to acknowledge receipt of the complaint and to respond to it within a reasonable time.\n\nIn case of persistent dispute, the participant is informed of the possibility of free recourse to a consumer mediator.\n\nDisputes may also be brought before the competent French courts.\n\nThe participant acknowledges having read, before any firm booking, the information contained in this sheet, which was communicated to them in a clear and understandable manner on a durable medium.",
    },
  ],
};

type Row = [string, string];
type Subsection = { heading: string; items?: string[]; body?: string };
type Section = {
  heading: string;
  body?: string;
  rows?: Row[];
  items?: string[];
  afterItems?: string;
  table?: boolean;
  afterTable?: string;
  subsections?: Subsection[];
};
type Content = {
  pageTitle: string;
  pageSubtitle: string;
  pricing: { product: string; price: string; vehicle: string; format: string }[];
  pricingHeaders: string[];
  sections: Section[];
};

const PricingTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.pricingHeaders.map((h) => (
            <th key={h} className="border border-border px-4 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.pricing.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-4 py-2">{row.product}</td>
            <td className="border border-border px-4 py-2 font-semibold text-primary">{row.price}</td>
            <td className="border border-border px-4 py-2">{row.vehicle}</td>
            <td className="border border-border px-4 py-2">{row.format}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSection = (section: Section, idx: number, content: Content) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-4 text-foreground">{section.heading}</h2>

    {section.rows && (
      <div className="border border-border divide-y divide-border mb-4">
        {section.rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
            <span className="text-sm font-semibold text-foreground">{label}</span>
            <span className="sm:col-span-2 text-sm text-muted-foreground">{value}</span>
          </div>
        ))}
      </div>
    )}

    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.table && <PricingTable content={content} />}
    {section.afterTable && (
      <p className="text-muted-foreground leading-relaxed mt-3">{section.afterTable}</p>
    )}

    {section.items && (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}

    {section.subsections && section.subsections.map((sub, si) => (
      <div key={si} className="mt-5 ml-4 border-l-2 border-primary/20 pl-4">
        <h3 className="font-semibold text-base mb-2 text-foreground">{sub.heading}</h3>
        {sub.body && sub.body.split("\n\n").map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
        ))}
        {sub.items && (
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            {sub.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const PrecontractualPage = () => {
  const { i18n } = useTranslation();
  const content: Content = i18n.language.startsWith("fr") ? fr : en;

  return (
    <main>
      <SEO
        title="Fiche d'information précontractuelle — VéloRouge"
        description="Fiche d'information précontractuelle pour les expériences touristiques VéloRouge / TourDeWheel."
        canonical="/precontractual"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            {content.pageTitle}
          </h1>
          <p className="mt-4 text-dark-foreground/60 max-w-2xl text-base italic">
            {content.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {content.sections.map((section, idx) => renderSection(section as Section, idx, content))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrecontractualPage;
