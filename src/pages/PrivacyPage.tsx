import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const fr = {
  title: "Politique de protection des données",
  sections: [
    {
      heading: "1. Préambule",
      body: `La présente politique de protection des données a pour objectif de vous informer sur les traitements de données à caractère personnel mis en œuvre par TourDeWheel afin de veiller au respect des données à caractère personnel des personnes physiques, conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés ainsi qu'au Règlement européen n°2016/679/UE du 27 avril 2016 sur la Protection des Données (RGPD).\n\nEn nous fournissant vos informations personnelles et autres informations, vous acceptez les conditions générales de cette Politique de protection des données.\n\nLa présente politique de confidentialité pourra évoluer en fonction du contexte légal et réglementaire et de la doctrine de la CNIL.`,
    },
    {
      heading: "2. Identité du responsable de traitement",
      body: `TourDeWheel, société par actions simplifiée, au capital social de 20 000 €, dont le siège social est situé 16 avenue de la Paix – 67000 Strasbourg, immatriculée au Registre du Commerce et des Sociétés de Strasbourg sous le numéro 100 164 706, représentée par son Président, Monsieur Prashant KOTHARI.`,
    },
    {
      heading: "3. Données collectées",
      body: `TourDeWheel veille à ne collecter et à ne traiter que des données strictement nécessaires à la finalité des traitements mis en œuvre, conformément au principe de minimisation des données.\n\nLes « données à caractère personnel » sont des informations qui vous identifient en tant que personne ou qui concernent une personne identifiable.\n\nAfin de définir les besoins du client et de procéder à la constitution du dossier client et du contrat de réservation, les données à caractère personnel suivantes peuvent être collectées et traitées en fonction de la qualité de l'utilisateur :`,
      subsections: [
        {
          heading: "3.1. Données générales",
          items: [
            "Données d'identité et de contact : civilité, nom, prénom, date et lieu de naissance, nationalité, adresse de résidence, adresse e-mail, numéro de téléphone, contact d'urgence (nom, prénom et numéro de téléphone), préférence linguistique, signature, pièce d'identité, images collectées par la vidéoprotection sur le point de vente…",
            "Données financières et contractuelles : coordonnées bancaires, préautorisation bancaire par CB, historique des paiements, règlement des litiges, données de facturation…",
            "Données de vérification d'identité : processus KYC (« Know Your Customer ») peut être mis en place en cas de location de modèle spécifique.",
            "Données de localisation et GPS : coordonnées GPS en temps réel, historique des itinéraires, durée et distance du trajet, données de circuits guidés…",
            "Données numériques et techniques : identifiant de connexion, identifiant d'appareil et adresse IP, données d'utilisation navigateur, données relatives aux cookies, préférences de notifications…",
          ],
        },
        {
          heading: "3.2. Données supplémentaires spécifiques aux livreurs indépendants",
          body: "Statut professionnel, numéro SIRET, affiliation à une plateforme de livraison, historiques de demandes de maintenance, rapports d'incident et d'accidents, rapports d'état du vélo, montant et date versement des appels de fonds, durée du contrat, étude de solvabilité…",
        },
        {
          heading: "3.3. Données supplémentaires spécifiques à l'activité touristique",
          body: "Réservation de circuit, données d'interaction avec le guide audio, avis et commentaires, référence de réservation OTA, déclaration d'aptitude…\n\nCes données peuvent être collectées directement auprès de la personne concernée ou auprès de partenaires et autres parties tierces, telles que les agences de voyages.",
        },
        {
          heading: "3.5. Cookies",
          body: "En naviguant sur le site, des cookies peuvent éventuellement être déposés sur le terminal de l'utilisateur. Un cookie est un petit fichier texte au format alphanumérique déposé sur l'ordinateur de l'internaute par le serveur du site visité ou par un serveur tiers (Tawk Meta et Google Analytics).\n\nIl existe différents types de cookies (de session, tiers, permanent, etc.) avec des rôles différents. Certains cookies sont nécessaires pour accéder à des fonctionnalités du site et d'autres ont une utilité pratique pour le visiteur.\n\nVous n'êtes pas tenus d'accepter les cookies pour aller sur notre site. Toutefois, le fonctionnement de notre site et de nos services pourrait être affecté si vous ne permettez pas la dépose des cookies.",
        },
      ],
    },
    {
      heading: "4. Finalités de la collecte",
      body: "Les traitements mis en œuvre par TourDeWheel répondent à des finalités explicites, légitimes et déterminées, savoir des prestations de location de vélos électriques et de Trottinettes Segway selon trois modes distincts :",
      items: [
        "Programme de location-vente destiné aux livreurs professionnels",
        "Expériences touristiques — circuits touristiques à vélo guidés par application mobile ou guide indépendant, auprès de particuliers",
        "Location courte, moyenne et longue durée — à la journée, à la semaine, au mois et à l'année, auprès de particuliers",
      ],
      afterItems: "Elles font l'objet des traitements principaux nécessaires à : la constitution du dossier client ; la gestion administrative et comptable ; la gestion des contentieux ; la gestion des circuits guidés ; la gestion de la flotte (sécurité, assurance, entretien…) ; la gestion des partenariats ; l'optimisation de l'expérience client, marketing, statistique.\n\nL'ensemble de ces traitements est nécessaire à l'exécution du contrat de location de vélos électriques ou trottinettes Segway par TourDeWheel.",
    },
    {
      heading: "5. Base juridique du traitement",
      body: "Les bases juridiques associées aux traitements de vos données à caractère personnel sont contractuelles et fondées sur le consentement de la personne concernée ou l'intérêt légitime de TourDeWheel.",
    },
    {
      heading: "6. Destinataires des données",
      body: "Les destinataires de vos données à caractère personnel sont les collaborateurs concernés de TourDeWheel.\n\nTourDeWheel ne communique vos données à caractère personnel qu'à des destinataires habilités et déterminés, tels que l'hébergeur de ses données informatiques.\n\nVos données ne font l'objet d'aucun transfert en dehors du territoire de l'Union européenne de la part de TourDeWheel.",
    },
    {
      heading: "7. Durée de conservation des données",
      body: "TourDeWheel ne conserve vos données à caractère personnel que pour la durée nécessaire aux opérations pour lesquelles elles ont été collectées ainsi que dans le respect de la législation en vigueur.",
      items: [
        "Les données relatives aux clients sont conservées pendant la durée des relations contractuelles, augmentée de 5 ans.",
        "Les données relatives aux prospects sont conservées pendant une durée de 3 ans à compter du dernier contact entrant avec TourDeWheel.",
        "Les données comptables sont conservées 10 ans à compter de la clôture de l'exercice correspondant.",
        "Les données de localisation / GPS sont conservées 30 jours à compter de la fin de la location.",
        "La preuve du consentement au dépôt de cookies est conservée 5 ans à compter de la date du consentement.",
        "Les images issues de la vidéoprotection sont conservées au maximum 30 jours. Les images servant de preuves dans le cadre d'une procédure sont conservées le temps du litige.",
      ],
      afterItems: "Ces durées de conservation sont susceptibles d'évoluer en fonction des obligations de conservation et des délais de prescription légale.",
    },
    {
      heading: "8. Caractère obligatoire ou facultatif des réponses",
      body: "Les cases agrémentées d'une astérisque sont obligatoires afin de pouvoir traiter la demande.",
    },
    {
      heading: "9. Sécurité",
      body: "TourDeWheel assure la sécurité de vos données à caractère personnel au travers de l'utilisation de moyens de sécurisation physiques et logiques adaptés.\n\nL'hébergement des données est assuré par une société dont les serveurs sont situés en France.",
    },
    {
      heading: "10. Vos droits",
      body: "Conformément à la loi « informatique et liberté » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, vous disposez d'un droit d'accès, d'interrogation, de modification, de rectification, d'opposition, d'effacement des informations vous concernant, du droit à la portabilité des données, de limitation du traitement ainsi que du droit de définir les directives relatives au sort de vos données à caractère personnel après votre décès.\n\nVous pourrez faire valoir ces droits en contactant notre référent par courrier électronique à l'adresse suivante : Bonjour@velorouge.fr ou par courrier postal à l'adresse suivante, TourDeWheel - 16 avenue de la Paix – 67000 Strasbourg.\n\nVous disposez également du droit de saisir la CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07 – tél : 01 53 73 22 22 - www.cnil.fr si vous estimez, après avoir contacté TourDeWheel, que vos droits Informatiques et Libertés ne sont pas respectés.",
    },
    {
      heading: "11. Contact",
      body: "Pour toutes demandes d'information concernant la politique de protection des données à caractère personnel mise en œuvre par TourDeWheel, vous pouvez vous adresser à : Bonjour@velorouge.fr",
    },
  ],
};

const en = {
  title: "Data Protection Policy",
  sections: [
    {
      heading: "1. Preamble",
      body: `This data protection policy aims to inform you about the personal data processing implemented by TourDeWheel to ensure respect for the personal data of individuals, in accordance with Law No. 78-17 of 6 January 1978, as amended, relating to data processing, files and liberties, as well as European Regulation No. 2016/679/EU of 27 April 2016 on Data Protection (GDPR).\n\nBy providing us with your personal and other information, you accept the general terms of this Data Protection Policy.\n\nThis privacy policy may evolve depending on the legal and regulatory context and the doctrine of the CNIL.`,
    },
    {
      heading: "2. Identity of the data controller",
      body: `TourDeWheel, a simplified joint-stock company, with a share capital of €20,000, whose registered office is located 16 avenue de la Paix – 67000 Strasbourg, registered with the Strasbourg Trade and Companies Register under number 100 164 706, represented by its President, Mr. Prashant KOTHARI.`,
    },
    {
      heading: "3. Data collected",
      body: `TourDeWheel ensures that only data strictly necessary for the purpose of the processing implemented is collected and processed, in accordance with the data minimisation principle.\n\n"Personal data" is information that identifies you as a person or relates to an identifiable person.\n\nIn order to define customer needs and to create customer files and booking contracts, the following personal data may be collected and processed depending on the user's role:`,
      subsections: [
        {
          heading: "3.1. General data",
          items: [
            "Identity and contact details: title, surname, first name, date and place of birth, nationality, home address, email address, telephone number, emergency contact (name, first name and telephone number), language preference, signature, identity document, images collected by video surveillance at the point of sale…",
            "Financial and contractual data: bank details, bank pre-authorisation by credit card, payment history, dispute resolution, billing data…",
            "Identity verification data: the KYC (\"Know Your Customer\") process may be implemented for the rental of specific models.",
            "Location and GPS data: real-time GPS coordinates, route history, journey duration and distance, guided tour data…",
            "Digital and technical data: login ID, device ID and IP address, browser usage data, cookie-related data, notification preferences…",
          ],
        },
        {
          heading: "3.2. Additional data specific to independent delivery riders",
          body: "Professional status, SIRET number, delivery platform affiliation, maintenance request history, incident and accident reports, bicycle condition reports, amount and date of payment of calls for funds, contract duration, solvency assessment…",
        },
        {
          heading: "3.3. Additional data specific to tourist activities",
          body: "Tour booking, audio guide interaction data, reviews and comments, OTA booking reference, fitness declaration…\n\nThis data may be collected directly from the data subject or from partners and other third parties, such as travel agencies.",
        },
        {
          heading: "3.5. Cookies",
          body: "When browsing the website, cookies may be placed on the user's device. A cookie is a small alphanumeric text file placed on the internet user's computer by the server of the website visited or by a third-party server (Tawk Meta and Google Analytics).\n\nThere are different types of cookies (session, third-party, persistent, etc.) with different roles. Some cookies are necessary to access website features, while others are practically useful for the visitor.\n\nYou are not required to accept cookies to visit our website. However, the functioning of our website and services may be affected if you do not allow cookies to be placed.",
        },
      ],
    },
    {
      heading: "4. Purposes of collection",
      body: "The processing implemented by TourDeWheel serves explicit, legitimate and defined purposes, namely the provision of electric bicycle and Segway scooter rentals in three distinct modes:",
      items: [
        "Lease-purchase programme for professional delivery riders",
        "Tourist experiences — guided bicycle tours via mobile app or independent guide, for individuals",
        "Short, medium and long-term rental — daily, weekly, monthly and yearly, for individuals",
      ],
      afterItems: "These are subject to the main processing operations necessary for: creating the customer file; administrative and accounting management; dispute management; guided tour management; fleet management (safety, insurance, maintenance…); partnership management; customer experience optimisation, marketing, statistics.\n\nAll of these processing operations are necessary for the execution of the electric bicycle or Segway scooter rental contract by TourDeWheel.",
    },
    {
      heading: "5. Legal basis for processing",
      body: "The legal bases associated with the processing of your personal data are contractual and based on the consent of the data subject or the legitimate interest of TourDeWheel.",
    },
    {
      heading: "6. Data recipients",
      body: "The recipients of your personal data are the relevant employees of TourDeWheel.\n\nTourDeWheel only communicates your personal data to authorised and specific recipients, such as its IT data host.\n\nYour data is not transferred outside the European Union territory by TourDeWheel.",
    },
    {
      heading: "7. Data retention period",
      body: "TourDeWheel only retains your personal data for the period necessary for the operations for which it was collected, and in compliance with current legislation.",
      items: [
        "Customer data is retained for the duration of the contractual relationship, plus 5 years.",
        "Prospect data is retained for a period of 3 years from the last incoming contact with TourDeWheel.",
        "Accounting data is retained for 10 years from the end of the corresponding financial year.",
        "Location/GPS data is retained for 30 days from the end of the rental.",
        "Proof of consent for cookie placement is retained for 5 years from the date of consent.",
        "Video surveillance images are retained for a maximum of 30 days. Images used as evidence in legal proceedings are retained for the duration of the dispute.",
      ],
      afterItems: "These retention periods are subject to change depending on legal retention obligations and statutory limitation periods.",
    },
    {
      heading: "8. Mandatory or optional nature of responses",
      body: "Fields marked with an asterisk are mandatory in order to process the request.",
    },
    {
      heading: "9. Security",
      body: "TourDeWheel ensures the security of your personal data through the use of appropriate physical and logical security measures.\n\nData hosting is provided by a company whose servers are located in France.",
    },
    {
      heading: "10. Your rights",
      body: "In accordance with the French Data Protection Act of 6 January 1978, as amended, and European Regulation No. 2016/679/EU of 27 April 2016, you have the right of access, query, modification, rectification, objection, erasure of information concerning you, the right to data portability, the right to restrict processing, as well as the right to define directives concerning the fate of your personal data after your death.\n\nYou can exercise these rights by contacting our representative by email at: Bonjour@velorouge.fr or by post to: TourDeWheel - 16 avenue de la Paix – 67000 Strasbourg.\n\nYou also have the right to lodge a complaint with the CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07 – tel: 01 53 73 22 22 - www.cnil.fr if you believe, after contacting TourDeWheel, that your Data Protection and Liberties rights are not being respected.",
    },
    {
      heading: "11. Contact",
      body: "For any information requests concerning the personal data protection policy implemented by TourDeWheel, you can contact: Bonjour@velorouge.fr",
    },
  ],
};

type Section = {
  heading: string;
  body?: string;
  items?: string[];
  afterItems?: string;
  subsections?: {
    heading: string;
    body?: string;
    items?: string[];
  }[];
};

const renderSection = (section: Section, idx: number) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-3">{section.heading}</h2>
    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}
    {section.items && (
      <ul className="list-disc list-inside space-y-1.5 mb-3 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}
    {section.subsections && section.subsections.map((sub, si) => (
      <div key={si} className="mt-5 ml-4">
        <h3 className="font-semibold text-base mb-2">{sub.heading}</h3>
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

const PrivacyPage = () => {
  const { i18n } = useTranslation();
  const content = i18n.language.startsWith("fr") ? fr : en;

  return (
    <main>
      <SEO
        title="Politique de protection des données — VéloRouge"
        description="Politique de protection des données personnelles de VéloRouge / TourDeWheel."
        canonical="/privacy"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          {content.sections.map((section, idx) => renderSection(section as Section, idx))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;
