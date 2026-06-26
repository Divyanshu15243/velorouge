import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

/* ─── Pricing table ─── */
const pricingFR = [
  { product: "Location Segway", price: "€225/day pass", vehicle: "Trottinette Segway L60", format: "Autonome · app · 2h" },
  { product: "Expérience E-Bike Audio + Stampz", price: "€225/day pass", vehicle: "Vélo électrique premium", format: "Auto-guidé · IZI Travel · 3–4h" },
];
const pricingEN = [
  { product: "Segway Rental", price: "€225/day pass", vehicle: "Segway Scooter L60", format: "Self-guided · app · 2h" },
  { product: "E-Bike Audio Experience + Stampz", price: "€225/day pass", vehicle: "Premium electric bike", format: "Self-guided · IZI Travel · 3–4h" },
];

/* ─── Repairs table ─── */
const repairsFR = [
  { event: "Perte de la clé de cadenas", amount: "25 €", method: "Déduit de la pré-autorisation ou facturé" },
  { event: "Remplacement du cadenas complet", amount: "60 €", method: "Déduit de la pré-autorisation ou facturé" },
  { event: "Perte ou destruction du casque", amount: "45 €", method: "Déduit de la pré-autorisation ou facturé" },
  { event: "Crevaison non signalée et dommage consécutif", amount: "Coût réel de réparation", method: "Facture contradictoire" },
  { event: "Dommages accidentels — réparation possible", amount: "Coût réel de réparation (devis contradictoire)", method: "Capture pré-autorisation + solde SEPA/facture" },
  { event: "Dommages graves — réparation impossible", amount: "Valeur résiduelle du véhicule selon barème", method: "Capture pré-autorisation + mise en demeure" },
  { event: "Vol avec cadenas fourni et utilisé", amount: "0 € — couvert assurance VéloRouge", method: "Déclaration police requise sous 24h" },
  { event: "Vol sans utilisation du cadenas fourni", amount: "Valeur résiduelle du véhicule", method: "Déclaration police requise sous 24h + Capture pré-autorisation + mise en demeure" },
  { event: "Non-restitution du matériel", amount: "Valeur résiduelle + pénalité 20 %", method: "Capture pré-autorisation + dépôt de plainte" },
  { event: "Retour hors délai (par heure au-delà)", amount: "15 € / heure", method: "Déduit de la pré-autorisation ou facturé" },
  { event: "Usage anormal ou malveillant constaté", amount: "Coût réel + pénalité forfaitaire 150 €", method: "Résiliation immédiate + recouvrement" },
];
const repairsEN = [
  { event: "Loss of padlock key", amount: "€25", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Replacement of complete padlock", amount: "€60", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Loss or destruction of helmet", amount: "€45", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Puncture not reported and resulting damage", amount: "Actual repair cost", method: "Contradictory invoice" },
  { event: "Accidental damage — repairable", amount: "Actual repair cost (agreed quote)", method: "Capture pre-authorisation + SEPA direct debit/invoice" },
  { event: "Serious damage — irreparable", amount: "Residual value of the vehicle according to schedule", method: "Capture pre-authorisation + formal notice" },
  { event: "Theft with provided and used padlock", amount: "€0 — covered by VéloRouge insurance", method: "Police report required within 24h" },
  { event: "Theft without use of the provided padlock", amount: "Residual value of the vehicle", method: "Police report required within 24h + Capture pre-authorisation + formal notice" },
  { event: "Non-return of equipment", amount: "Residual value + 20% penalty", method: "Capture pre-authorisation + filing of complaint" },
  { event: "Late return (per hour beyond)", amount: "€15 / hour", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Abnormal or malicious use detected", amount: "Actual cost + flat penalty of €150", method: "Immediate termination + recovery" },
];

/* ─── Content ─── */
const fr = {
  title: "Conditions Générales de Services",
  version: "Version en vigueur à compter du XXX",
  intro: `Les présentes conditions générales de services (ci-après les « CGS ») définissent les conditions juridiques, techniques et commerciales dans lesquelles la société TourDeWheel, société par actions simplifiée, au capital social de 20 000 €, dont le siège social est situé 16 avenue de la Paix – 67000 Strasbourg, immatriculée au Registre du Commerce et des Sociétés de Strasbourg sous le numéro 100 164 706, représentée par son Président, Monsieur Prashant KOTHARI (ci-après le « Prestataire ») – délivre aux particuliers (ci-après le « Client ») des vélos à assistance électrique (ci-après « VAE ») ou des Trottinettes Segway (ci-après « Segway ») sous la marque commerciale VéloRouge (déposée INPI 5250087) et pour lesquels le Prestataire agit en tant que loueur.\n\nLe Client et le Prestataire sont ensemble désignés comme les « Parties ».\n\nLe Prestataire a pour activité la mise à disposition, à titre onéreux, au profit du Client, d'un ou de plusieurs VAE ou Segway, ainsi que la fourniture d'une expérience touristique consistant en un circuit guidé.`,
  pricingHeaders: ["Produit", "Prix public TTC", "Véhicule", "Format"],
  repairsHeaders: ["Événement", "Montant à charge du client", "Modalité de recouvrement"],
  sections: [
    {
      heading: "1. Objet – Champ d'application",
      body: "Les présentes conditions générales (ci-après « CGS ») régissent, en France, l'ensemble des relations contractuelles entre le Prestataire et le Client relatives à :",
      items: [
        "Expériences touristiques — circuits à VAE guidés par application mobile ou guide indépendant ;",
        "Location de vélos à assistance électrique de courte, moyenne et longue durée — à la journée, à la semaine, au mois et à l'année ;",
        "Location de Trottinettes Segway ;",
      ],
      afterItems: "Les présentes CGS prévalent sur tout autre document non expressément accepté par écrit par le Prestataire. Toute commande ou réservation implique l'adhésion pleine et entière du Client aux présentes.\n\nLes présentes CGS s'appliquent à tout Client réservant un produit VéloRouge, quel que soit la plateforme de réservation (en direct, par l'intermédiaire d'autres sites internet, d'OTA ou de partenaires hôteliers...).",
    },
    {
      heading: "2. Définitions",
      definitionItems: [
        ["VAE", "cycle à pédalage assisté au sens de la réglementation, équipé d'une assistance électrique."],
        ["Expérience touristique", "prestation de service consistant en un itinéraire ou circuit à VAE, guidé par application mobile ou guide indépendant, éventuellement assorti de contenus audio/visuels."],
        ["Contrats longue durée", "location de VAE auprès de particuliers pour une durée supérieure à 1 mois."],
        ["Application", "application mobile fournie ou recommandée par le Prestataire pour le guidage des circuits."],
        ["Prestation", "mise à disposition par le Prestataire au Client, pour la durée convenue, d'un ou plusieurs VAE ou Segway, conformes aux normes techniques en vigueur, en état de fonctionnement et munis des équipements de sécurité usuels, notamment les équipements nécessaires à la sécurité des déplacements (batterie, chargeur, casque, antivol, ou tout autre équipement mis à disposition) avec possibilité de souscrire à une Expérience touristique."],
      ],
    },
    {
      heading: "3. Qualité du Client",
      body: "Le Client est une personne physique agissant à des fins non professionnelles.\n\nToute personne réservant une prestation doit être âgée de 18 ans minimum.\n\nÀ partir de 16 ans, les mineurs peuvent, avec l'accord écrit de leur représentant légal et leur participation, participer aux Expériences touristiques et aux sorties en Trottinette Segway. Les mineurs non accompagnés en sont exclus.",
    },
    {
      heading: "4. Zone géographique – Lieu des prestations",
      body: "L'ensemble des prestations de location de VAE et les expériences touristiques guidées sont matériellement exécutées en France.",
    },
    {
      heading: "5. Commande – Réservation",
      body: "5.1. Le Prestataire propose ses prestations de location de VAE et Segway et d'Expériences touristiques par le biais de son site internet, directement en boutique, ou via des applications partenaires (Viator, GetYourGuide…).\n\nLors de la réservation d'une prestation via le site internet, le Client doit créer un compte en ligne. La création d'un compte en ligne nécessite de prendre connaissance des informations précontractuelles et l'acceptation des présentes CGS et de la politique de confidentialité.\n\nLes conditions d'offre (tarifs, durée, caractéristiques des VAE, services annexes) sont précisées sur les supports commerciaux du Prestataire et son site internet.\n\n5.2. Modalités de souscription\n\nLe Client fait le choix de l'Expérience touristique choisie, de la durée de location du VAE ou du Segway, et de la date de la prestation. Il fournit un dépôt de garantie conformément à l'article 8 des présentes.\n\nPour les Expériences touristiques et les locations de VAE de courte durée et de trottinettes Segway, la réservation est définitive à réception du paiement intégral ou de la pré-autorisation bancaire et après confirmation par courrier électronique.\n\nPour les Contrats de location longue durée, le Prestataire peut subordonner l'acceptation à la fourniture de pièces justificatives (identité, domicile, activité professionnelle), à une étude de solvabilité, au versement d'un dépôt de garantie et/ou à la signature d'un contrat spécifique.",
    },
    {
      heading: "6. Durée",
      body: "La location du VAE ou Segway est consentie pour une durée déterminée choisie par le Client lors de la réservation.\n\nL'Expérience touristique est consentie pour la durée du circuit choisi par le Client lors de la réservation.\n\nLa durée court à compter de la remise matérielle du VAE ou Segway au Client jusqu'à sa restitution effective au Prestataire, à son point de vente. Tout dépassement de durée entraîne facturation complémentaire selon le tarif en vigueur.",
    },
    {
      heading: "7. Mise à disposition – État des VAE et des trottinettes Segway",
      body: "Les VAE et les trottinettes Segway sont remis au Client en bon état de fonctionnement, avec les accessoires convenus (batterie, chargeur, antivol, casque, etc.), sur présentation d'une pièce d'identité valide (copie ou photos refusées).\n\nLe Client est tenu de vérifier l'état apparent du VAE et de la trottinette Segway et de signaler immédiatement toute réserve. À défaut de réserves lors de la prise de possession, le VAE ou la trottinette Segway est réputé remis en bon état apparent et conforme à la commande.\n\nLe Client signe un bon de remise mentionnant l'état du VAE ou de la trottinette Segway ainsi que l'heure de départ. En cas de refus du Client de signer le bon de remise, la prestation ne pourra pas avoir lieu.\n\nLes VAE et les trottinettes Segway doivent obligatoirement être retournés à la station de départ et à l'horaire convenu.",
    },
    {
      heading: "8. Conditions financières",
      body: "8.1. Les prix sont exprimés en euros TTC.\n\nLe prix de la location du VAE ou Segway et du circuit guidé est indiqué au descriptif de la prestation ou sur le support de réservation. Il comprend le coût global de mise à disposition du VAE ou Segway, des accessoires spécifiés, ainsi que, selon le cas, les services de guidage ou l'accès à l'application.",
      pricingTable: true,
      afterPricing: "8.2. Paiement – Retard\n\nLe prix est payable intégralement à la réservation.\n– Paiement accepté : carte bancaire (CB/Visa/Mastercard), espèces. Toutefois, les dépôts de garantie ne pourront pas être effectués en espèce.\n– Pré-autorisation bancaire : montant bloqué de 99 € sur la carte du Client au moment de la prise en charge. Cette somme ne sera pas débitée si retour du matériel loué en bon état et dans les délais.\n– Par prélèvement automatique mensuelle le 1er du mois pour les locations longue durée.\n\nTout retard de paiement entraîne, sans mise en demeure préalable, l'application d'intérêts de retard selon le taux convenu ou, à défaut, d'un taux contractuel raisonnable, ainsi que la possibilité pour le Prestataire de suspendre l'exécution des prestations et/ou de résilier le contrat pour faute après mise en demeure restée infructueuse.\n\n8.3. Dépôt de garantie – Prélèvements de frais\n\nUn dépôt de garantie, destiné à couvrir le risque de dégradations, vol ou non-restitution du VAE ou Segway et des accessoires est exigé pour toute réservation. Le dépôt de garantie ne constitue pas une limite de responsabilité.\n\nLe dépôt de garantie s'effectue par carte bancaire (pré-autorisation bancaire) ou autre mécanisme équivalent. Ce dépôt n'est pas productif d'intérêts. En cas de prélèvement, un décompte détaillé est fourni au Client.\n\nLe Client autorise également le Prestataire à prélever, sur la carte bancaire enregistrée, les montants correspondant aux sommes contractuellement dues en cas de dommage, perte ou vol du VAE, dans la limite des plafonds indiqués à l'article 9.3.",
    },
    {
      heading: "9. Frais complémentaires",
      body: "9.1. Frais de retard\n\nDes frais de retard seront facturés en cas de non restitution du VAE ou du Segway à l'horaire convenu au prix de 15 € TTC / heure de retard. Tout retard supérieur à la durée contractuelle est considéré comme une non-restitution du matériel justifiant la facturation de la valeur résiduelle du VAE ou Segway ainsi qu'une pénalité complémentaire de 20 % de celle-ci.\n\n9.2. Frais de dépassement kilométrique\n\nEn cas de dépassement de la limite de km autorisés par mois pour les Contrats de location longue durée, le Client est redevable d'un montant par kilomètre supplémentaire parcouru, en référence au nombre de km inscrits au compteur au moment de la prise du VAE par le Client.\n\n9.3. Montant des réparations du matériel loué",
      repairsTable: true,
    },
    {
      heading: "10. Utilisation des VAE – Obligations du Client",
      body: "Le Client s'engage à utiliser le VAE et la trottinette Segway de manière prudente, conforme à sa destination et aux instructions fournies par le Prestataire. À ce titre, il s'engage à :",
      numberedItems: [
        "N'utiliser le matériel que dans les zones autorisées (pistes cyclables, voies réservées) — usage hors-route, escaliers, zones inondées ou interdites aux vélos strictement prohibé.",
        "Porter le casque fourni en permanence pendant tout déplacement motorisé.",
        "Ne pas prêter, sous-louer ou céder le matériel à un tiers, même temporairement.",
        "Respecter le code de la route français applicable aux cycles à assistance électrique et aux engins de déplacement personnels motorisés (EDPM).",
        "Ne pas conduire sous l'emprise de l'alcool, de stupéfiants ou de tout médicament altérant les facultés de conduite.",
        "Signaler immédiatement à VéloRouge (par téléphone ou WhatsApp) tout incident, accident, vol ou dommage survenu pendant la location.",
        "Ne pas modifier, démonter, repeindre ou altérer le matériel de quelque façon que ce soit.",
        "Stationner le véhicule uniquement dans des zones sécurisées, en utilisant le cadenas fourni à chaque arrêt.",
        "Restituer le matériel à l'heure et au lieu convenus — tout dépassement non signalé au moins 30 minutes à l'avance est facturé au tarif de prolongation.",
        "Se déclarer apte à conduire un véhicule à deux roues (VAE / Segway) en espace urbain.",
        "Ne pas utiliser le VAE pour des usages non prévus (compétition, transport de charges excessives, remorquage, etc.).",
        "Respecter des limitations techniques (puissance, assistance, poids maximum, etc.).",
      ],
      afterItems: "Toute utilisation non conforme, négligente ou dangereuse engage la responsabilité du Client et peut justifier la résiliation du contrat, sans préjudice de dommages et intérêts. Le respect de ces obligations constitue une condition essentielle du contrat.",
    },
    {
      heading: "11. Expériences touristiques – Application mobile – Sécurité",
      body: "L'expérience touristique comprend un parcours prédéfini dont les principales caractéristiques (durée estimative, distance approximative, difficultés particulières, points d'intérêt, éventuelles contraintes horaires) sont communiquées au Client avant la conclusion du contrat.\n\nLorsque le guidage est assuré par un guide personne physique, le Prestataire communique au Client l'identité du guide et les principales caractéristiques de son intervention.\n\nLorsque le guidage est assuré via l'Application mobile, le Prestataire fournit au Client les informations nécessaires au téléchargement et à l'utilisation de ladite application. Le Client est informé que le bon fonctionnement de l'application dépend de la couverture réseau, de l'état de son terminal et de la configuration technique de celui-ci, éléments qui ne relèvent pas du contrôle du Prestataire.\n\nLes circuits guidés par Application mobile constituent des suggestions d'itinéraires et de contenus. Le Client conserve à tout moment la maîtrise de sa trajectoire et de sa conduite. Il doit adapter sa conduite aux conditions de circulation, de météo et à son état physique.\n\nLe Client ne doit en aucun cas manipuler l'Application mobile de façon dangereuse (consultation prolongée en roulant, absence de regard sur la chaussée, etc.). Il appartient au Client de s'arrêter dans un lieu sûr pour toute interaction avec l'écran.\n\nLe Prestataire n'est tenu, au titre de la sécurité des expériences touristiques, qu'à une obligation de moyens raisonnables. Le Client reste seul responsable de la manière dont il utilise ces informations.",
    },
    {
      heading: "12. Entretien, pannes et réparations",
      body: "Le Client doit informer sans délai le Prestataire de toute anomalie, incident, panne ou accident affectant le VAE ou le Segway. Il s'interdit d'effectuer ou de faire effectuer des réparations substantielles sans accord préalable du Prestataire, sauf urgence manifeste pour éviter un dommage plus grave.\n\nPour les locations de VAE longue durée, le Prestataire peut imposer des visites d'entretien périodiques. Le défaut de présentation du VAE aux visites peut limiter ou exclure la prise en charge de certains dommages imputables à un manque d'entretien.\n\nEn cas de panne immobilisant le VAE, le Prestataire peut proposer une assistance ou un VAE de remplacement, dans la limite de ses disponibilités et des conditions contractuelles.",
    },
    {
      heading: "13. Vol, perte et dommages aux VAE",
      body: "En cas de vol, tentative de vol, perte ou dégradation importante du VAE ou de la trottinette Segway ou de leurs accessoires, le Client doit :",
      items: [
        "Informer immédiatement le Prestataire.",
        "Déposer, en cas de vol, une plainte auprès des autorités compétentes et transmettre le récépissé au Prestataire.",
        "Fournir, sur demande, un récit circonstancié et les coordonnées d'éventuels témoins.",
      ],
      afterItems: "Le Client est responsable, à titre contractuel, de la conservation du VAE, de la trottinette Segway ou de leurs accessoires pendant la durée de mise à disposition. En cas de vol ou de dommage résultant d'une négligence manifeste (absence d'usage de l'antivol, stationnement prolongé dans un lieu manifestement non sécurisé, etc.), le Client supporte les conséquences financières dans la limite des plafonds et modalités prévues au contrat.",
    },
    {
      heading: "14. Assurance et Responsabilité du Prestataire",
      body: "14.1. Le Prestataire déclare être titulaire d'une assurance responsabilité civile professionnelle couvrant les dommages corporels, matériels et immatériels causés au Client dans le cadre de la prestation, dans les limites et conditions de la police d'assurance dont un extrait pourra être communiqué sur demande.",
    },
    {
      heading: "15. Politique d'annulation et de remboursement pour les Clients",
      body: "15.1. Annulation par le Client\n\nLe droit de rétractation ne s'applique pas aux services de loisirs fournis à une date ou période déterminée, conformément à l'article L.221-28 du Code de la consommation.\n\nToutefois, le Client peut annuler la location dans les conditions suivantes :",
      items: [
        "Annulation par le client plus de 48h avant : remboursement intégral.",
        "Annulation entre 24h et 48h avant : remboursement à 50 %.",
        "Annulation moins de 24h avant ou non-présentation : aucun remboursement — prestation due intégralement.",
      ],
      afterItems: "15.2. Annulation par le Prestataire (météo extrême, incident technique) : remboursement intégral ou report sans frais.\n\n15.3. Pour les réservations effectuées via des OTA ou autres partenaires, il convient de se reporter à la politique d'annulation de ces organismes. Les présentes CGS régissent uniquement la relation directe avec le Prestataire.",
    },
    {
      heading: "16. Propriété intellectuelle – Application – Marque",
      body: "Les marques, noms commerciaux, logos, dénominations de VAE ou Segway, éléments graphiques, contenus de l'Application, itinéraires, supports numériques et documents remis au Client sont protégés par les droits de propriété intellectuelle du Prestataire ou de ses partenaires.",
    },
    {
      heading: "17. Données personnelles",
      body: "Le Prestataire collecte et traite les données personnelles nécessaires à la gestion des réservations, contrats, paiements, sinistres, ainsi qu'à l'amélioration de ses services (y compris via l'Application).\n\nLes données peuvent être utilisées pour contacter le Client dans le cadre de l'exécution du contrat, pour la gestion des litiges et pour satisfaire aux obligations légales et réglementaires.\n\nLe Prestataire conserve les données pendant la durée nécessaire aux finalités du traitement et peut les transmettre à ses prestataires et partenaires contractuels impliqués dans l'exécution des prestations (maintenance, paiement, assurance, etc.), dans la limite de ce qui est nécessaire.\n\nLe Client peut exercer ses droits d'accès, de rectification et, le cas échéant, d'opposition ou de limitation directement auprès du Prestataire, selon les modalités précisées dans la politique de confidentialité.",
    },
    {
      heading: "18. Force majeure",
      body: "Aucune des parties n'est responsable de l'inexécution ou du retard dans l'exécution de ses obligations lorsqu'ils résultent d'un événement imprévisible, irrésistible et extérieur rendant impossible l'exécution (par exemple événements climatiques extrêmes, catastrophes naturelles, mesures administratives de restriction de circulation, grèves affectant les services indispensables à l'exécution du contrat, etc.).\n\nEn cas de survenance d'un tel événement, l'exécution des obligations est suspendue pendant la durée de l'événement ; si l'empêchement se prolonge au-delà d'une durée raisonnable, chaque partie peut résilier le contrat sans indemnité, par notification écrite.",
    },
    {
      heading: "19. Résiliation",
      body: "Outre les cas spécifiques prévus aux présentes, chaque partie peut résilier le contrat de plein droit en cas de manquement grave de l'autre partie à ses obligations, non réparé dans un délai raisonnable après mise en demeure écrite.\n\nPour le Prestataire, constituent notamment des manquements graves :",
      items: [
        "Non-paiement répété des loyers ou prix.",
        "Utilisation manifestement dangereuse ou illicite des VAE ou Segway.",
        "Sous-location ou cession non autorisée.",
        "Altération volontaire des VAE ou Segway ou modification non autorisée de leurs caractéristiques techniques.",
      ],
      afterItems: "La résiliation entraîne la restitution immédiate des VAE, Segway et accessoires, sous réserve des sommes restant dues au titre des loyers, réparations, indemnités et pénalités prévues au contrat.",
    },
    {
      heading: "20. Droit applicable – Règlement des litiges",
      body: "Les présentes CGS et les contrats qui en découlent sont soumis au droit français.\n\nLa langue du contrat est le français. Les traductions en langues étrangères ne sont mises à disposition par le Prestataire qu'à titre informatif.\n\nEn cas de litige relatif à la validité, l'interprétation ou l'exécution du présent contrat, les parties s'efforceront de rechercher une solution amiable. À défaut de règlement amiable dans un délai de 30 jours à compter de la notification écrite du différend, le litige pourra être porté devant les juridictions compétentes.\n\nLe Client est informé de la possibilité de recourir à un médiateur de la consommation. Le Prestataire a adhéré au Centre de la médiation de la consommation des conciliateurs de justice (CM2C)\n\nAdresse postale : 49 Rue de Ponthieu, 75008 Paris\nAdresse email : declarer-un-litige@cm2c.net\nSite internet : https://www.cm2c.net/comment-nous-saisir.php",
    },
    {
      heading: "21. Dispositions diverses",
      body: "La nullité d'une clause des présentes CGS n'affecte pas la validité des autres stipulations, qui demeurent applicables.\n\nLe fait, pour le Prestataire, de ne pas se prévaloir à un moment donné de l'une quelconque des clauses ne peut être interprété comme une renonciation à s'en prévaloir ultérieurement.\n\nLes présentes CGS peuvent être modifiées par le Prestataire. La version applicable est celle en vigueur au jour de la réservation ou de la signature du contrat.",
    },
  ],
};

const en = {
  title: "General Terms and Conditions",
  version: "Version in effect from XXX",
  intro: `These general terms and conditions (hereinafter the "GTC") define the legal, technical, and commercial conditions under which the company TourDeWheel, a simplified joint-stock company with a share capital of €20,000, whose registered office is located 16 avenue de la Paix – 67000 Strasbourg, registered with the Trade and Companies Register of Strasbourg under number 100 164 706, represented by its President, Mr. Prashant KOTHARI (hereinafter the "Provider") – provides to individuals (hereinafter the "Client") electric-assist bicycles (hereinafter "E-bikes") or Segway Scooters (hereinafter "Segways") under the commercial brand VéloRouge (registered with INPI 5250087) and for which the Provider acts as lessor.\n\nThe Client and the Provider are collectively referred to as the "Parties".\n\nThe Provider's business is the provision, for a fee, to the Client, of one or more E-bikes or Segways, as well as the provision of a tourist experience consisting of a guided tour.`,
  pricingHeaders: ["Product", "Public price incl. VAT", "Vehicle", "Format"],
  repairsHeaders: ["Event", "Amount charged to customer", "Recovery method"],
  sections: [
    {
      heading: "1. Subject – Scope of application",
      body: "These general terms and conditions (hereinafter \"GTC\") govern, in France, all contractual relations between the Provider and the Client relating to:",
      items: [
        "Tourist experiences — guided E-bike tours via mobile application or independent guide;",
        "Rental of electric-assist bicycles for short, medium, and long term — daily, weekly, monthly, and yearly;",
        "Rental of Segway Scooters;",
      ],
      afterItems: "These GTC take precedence over any other document not expressly accepted in writing by the Provider. Any order or booking implies the Client's full and complete acceptance of these terms.\n\nThese GTC apply to any Client booking a VéloRouge product, regardless of the booking platform (direct, via other websites, OTAs, or hotel partners...).",
    },
    {
      heading: "2. Definitions",
      definitionItems: [
        ["E-bike", "a pedal-assisted cycle within the meaning of the regulations, equipped with electric assistance."],
        ["Tourist experience", "service consisting of an E-bike route or tour, guided by mobile application or independent guide, possibly with audio/visual content."],
        ["Long-term contracts", "rental of E-bikes from individuals for a duration exceeding 1 month."],
        ["Application", "mobile application provided or recommended by the Provider for guiding tours."],
        ["Service", "provision by the Provider to the Client, for the agreed duration, of one or more E-bikes or Segways, compliant with current technical standards, in working order and equipped with usual safety equipment, including equipment necessary for safe travel (battery, charger, lock, helmet, or any other equipment provided) with the option to subscribe to a Tourist Experience."],
      ],
    },
    {
      heading: "3. Client Status",
      body: "The Client is a natural person acting for non-professional purposes.\n\nAnyone booking a service must be at least 18 years old.\n\nFrom the age of 16, minors may, with the written consent of their legal guardian and their participation, take part in Tourist Experiences and Segway Scooter rides. Minors not accompanied are excluded.",
    },
    {
      heading: "4. Geographical area – Location of services",
      body: "All E-bike rental services and guided tourist experiences are materially carried out in France.",
    },
    {
      heading: "5. Order – Booking",
      body: "5.1. The Provider offers its E-bike and Segway rental services and Tourist Experiences via its website, directly in the shop, or via partner applications (Viator, GetYourGuide…).\n\nWhen booking a service via the website, the Client must create an online account. Creating an online account requires reviewing the pre-contractual information and accepting these GTC and the privacy policy.\n\nThe offer conditions (prices, duration, characteristics of E-bikes, ancillary services) are detailed on the Provider's commercial materials and its website.\n\n5.2. Subscription methods\n\nThe Client chooses the Tourist Experience, the rental duration for the E-bike or Segway, and the date of the service. They provide a security deposit in accordance with Article 8.\n\nFor Tourist Experiences and short-term E-bike and Segway scooter rentals, the booking is final upon receipt of full payment or bank pre-authorisation and after confirmation by email.\n\nFor Long-term rental contracts, the Provider may make acceptance conditional on the provision of supporting documents (identity, address, professional activity), a solvency check, the payment of a security deposit, and/or the signing of a specific contract.",
    },
    {
      heading: "6. Duration",
      body: "The rental of the E-bike or Segway is granted for a fixed duration chosen by the Client at the time of booking.\n\nThe Tourist Experience is granted for the duration of the tour chosen by the Client at the time of booking.\n\nThe duration runs from the physical handover of the E-bike or Segway to the Client until its effective return to the Provider at its point of sale. Any extension of the duration will incur additional charges according to the applicable rate.",
    },
    {
      heading: "7. Provision – Condition of E-bikes and Segway scooters",
      body: "E-bikes and Segway scooters are handed over to the Client in good working order, with the agreed accessories (battery, charger, lock, helmet, etc.), upon presentation of a valid identity document (copies or photos refused).\n\nThe Client is required to check the apparent condition of the E-bike and Segway scooter and to immediately report any reservations. In the absence of reservations upon collection, the E-bike or Segway scooter is deemed to have been handed over in good apparent condition and as ordered.\n\nThe Client signs a handover form noting the condition of the E-bike or Segway scooter and the departure time. If the Client refuses to sign the handover form, the service cannot take place.\n\nE-bikes and Segway scooters must be returned to the departure station at the agreed time.",
    },
    {
      heading: "8. Financial conditions",
      body: "8.1. Prices are expressed in euros, including VAT.\n\nThe price for renting the E-bike or Segway and the guided tour is indicated in the service description or on the booking form. It includes the overall cost of providing the E-bike or Segway, specified accessories, as well as guiding services or access to the application.",
      pricingTable: true,
      afterPricing: "8.2. Payment – Late fees\n\nPayment is due in full upon booking.\n– Payment accepted: bank card (CB/Visa/Mastercard), cash. However, security deposits cannot be made in cash.\n– Bank pre-authorisation: an amount of €99 is blocked on the Customer's card at the time of collection. This sum will not be debited if the rented equipment is returned in good condition and on time.\n– By direct debit on the 1st of the month for long-term rentals.\n\nAny late payment will result, without prior notice, in the application of late interest at the agreed rate or a reasonable contractual rate, as well as the possibility for the Provider to suspend the performance of services and/or terminate the contract for breach after unsuccessful formal notice.\n\n8.3. Security deposit – Fee charges\n\nA security deposit, intended to cover the risk of damage, theft or non-return of the E-bike or Segway and accessories, is required for all bookings. The security deposit does not constitute a limit of liability.\n\nThe security deposit is made by bank card (bank pre-authorisation) or other equivalent mechanism. This deposit does not earn interest. In the event of a charge, a detailed statement will be provided to the Customer.\n\nThe Customer also authorises the Provider to charge, to the registered bank card, amounts corresponding to sums contractually owed in the event of damage, loss or theft of the E-bike, within the limits of the ceilings indicated in Article 9.3.",
    },
    {
      heading: "9. Additional fees",
      body: "9.1. Late fees\n\nLate fees will be charged for failure to return the E-bike or Segway at the agreed time, at a rate of €15 incl. VAT per hour of delay. Any delay exceeding the contractual duration is considered a non-return of the equipment, justifying the invoicing of the residual value of the E-bike or Segway plus an additional penalty of 20% of this value.\n\n9.2. Mileage overage fees\n\nIn case of exceeding the authorised km limit per month for long-term rental agreements, the Customer owes an amount per additional kilometre travelled, based on the number of km shown on the odometer at the time the E-bike is collected.\n\n9.3. Cost of repairs for rented equipment",
      repairsTable: true,
    },
    {
      heading: "10. Use of E-bikes – Customer obligations",
      body: "The Customer undertakes to use the E-bike and the Segway scooter in a prudent manner, in accordance with their intended purpose and the instructions provided by the Provider. To this end, they undertake to:",
      numberedItems: [
        "Use the equipment only in authorised areas (cycle paths, dedicated lanes) — off-road use, stairs, flooded areas or areas prohibited to bicycles are strictly forbidden.",
        "Wear the provided helmet at all times during motorised travel.",
        "Not lend, sublet or transfer the equipment to a third party, even temporarily.",
        "Comply with French road traffic regulations applicable to electric-assist bicycles and motorised personal mobility devices (MPMDs).",
        "Not drive under the influence of alcohol, drugs or any medication that impairs driving ability.",
        "Immediately report to VéloRouge (by phone or WhatsApp) any incident, accident, theft or damage occurring during the rental.",
        "Not modify, dismantle, repaint or alter the equipment in any way.",
        "Park the vehicle only in secure areas, using the provided padlock at each stop.",
        "Return the equipment at the agreed time and place — any extension not reported at least 30 minutes in advance will be charged at the extension rate.",
        "Declare oneself fit to ride a two-wheeled vehicle (E-bike / Segway) in urban areas.",
        "Not use the E-bike for unintended purposes (competition, transport of excessive loads, towing, etc.).",
        "Respect technical limitations (power, assistance, maximum weight, etc.).",
      ],
      afterItems: "Any non-compliant, negligent, or dangerous use engages the Client's responsibility and may justify termination of the contract, without prejudice to damages. Compliance with these obligations constitutes an essential condition of the contract.",
    },
    {
      heading: "11. Tourist experiences – Mobile application – Safety",
      body: "The tourist experience includes a predefined route whose main characteristics (estimated duration, approximate distance, particular difficulties, points of interest, any time constraints) are communicated to the Client before the contract is concluded.\n\nWhen guidance is provided by a human guide, the Provider communicates the guide's identity and the main characteristics of their intervention to the Client.\n\nWhen guidance is provided via the mobile application, the Provider provides the Client with the necessary information for downloading and using the said application. The Client is informed that the proper functioning of the application depends on network coverage, the condition of their device and its technical configuration, elements which are beyond the Provider's control.\n\nMobile application guided tours constitute suggestions for routes and content. The Client retains control of their route and driving at all times. They must adapt their driving to traffic conditions, weather, and their physical condition.\n\nThe Client must under no circumstances handle the mobile application in a dangerous manner (prolonged consultation while riding, lack of attention to the road, etc.). The Client must stop in a safe place for any interaction with the screen that requires diverting attention from traffic.\n\nThe Provider is only bound by an obligation of reasonable means regarding the safety of tourist experiences. The Client remains solely responsible for how they use this information.",
    },
    {
      heading: "12. Maintenance, breakdowns and repairs",
      body: "The Client must immediately inform the Provider of any anomaly, incident, breakdown, or accident affecting the E-bike or Segway. They are prohibited from carrying out or having substantial repairs made without prior agreement from the Provider, except in clear emergencies to prevent more serious damage.\n\nFor long-term E-bike rentals, the Provider may require periodic maintenance checks at intervals specified in the contract. Failure to present the E-bike for checks may limit or exclude coverage for certain damages attributable to a lack of maintenance.\n\nIn the event of a breakdown rendering the E-bike immobile, the Provider may offer assistance or a replacement E-bike, subject to availability and contractual conditions.",
    },
    {
      heading: "13. Theft, loss and damage to E-bikes",
      body: "In case of theft, attempted theft, loss, or significant damage to the E-bike or Segway scooter or their accessories, the Client must:",
      items: [
        "Immediately inform the Provider.",
        "File a report with the competent authorities in case of theft and send the receipt to the Provider.",
        "Provide, upon request, a detailed account and contact details of any witnesses.",
      ],
      afterItems: "The Client is contractually responsible for the safekeeping of the E-bike, Segway scooter, or their accessories during the period of use. In case of theft or damage resulting from manifest negligence (failure to use the anti-theft device, prolonged parking in a clearly unsecured location, E-bike or Segway left in a vehicle without precautions, etc.), the Client bears the financial consequences within the limits and according to the terms set out in the contract.",
    },
    {
      heading: "14. Service Provider's Insurance and Liability",
      body: "14.1. The Provider declares to hold professional civil liability insurance covering bodily injury, material, and immaterial damage caused to the Client within the scope of the service, within the limits and conditions of the insurance policy, an extract of which may be provided upon request.",
    },
    {
      heading: "15. Cancellation and refund policy for Clients",
      body: "15.1. Cancellation by the Client\n\nThe right of withdrawal does not apply to leisure services provided on a specific date or period, in accordance with Article L.221-28 of the French Consumer Code.\n\nHowever, the Client may cancel the rental under the following conditions:",
      items: [
        "Cancellation by the client more than 48h before: full refund.",
        "Cancellation between 24h and 48h before: 50% refund.",
        "Cancellation less than 24h before or no-show: no refund — service due in full.",
      ],
      afterItems: "15.2. Cancellation by the Provider (extreme weather, technical incident): full refund or free postponement.",
    },
    {
      heading: "16. Intellectual property – Application – Brand",
      body: "The brands, trade names, logos, E-bike or Segway designations, graphic elements, application content, routes, digital media, and documents provided to the Client are protected by the intellectual property rights of the Provider or its partners.",
    },
    {
      heading: "17. Personal data",
      body: "The Provider collects and processes personal data necessary for managing bookings, contracts, payments, claims, and for improving its services (including via the Application).\n\nData may be used to contact the Client in the context of contract execution (booking confirmations, safety information, notifications concerning the E-bike or Segway), for dispute management, and to comply with legal and regulatory obligations.\n\nThe Provider retains data for the duration necessary for the purposes of processing and may transmit it to its contractual service providers and partners involved in the execution of services (maintenance, payment, insurance, etc.), to the extent necessary.\n\nThe Client may exercise their rights of access, rectification and, where applicable, objection or limitation directly with the Provider, according to the terms specified in the privacy policy.",
    },
    {
      heading: "18. Force majeure",
      body: "Neither party shall be liable for non-performance or delay in performance of its obligations when they result from an unforeseeable, irresistible and external event making performance impossible (e.g. extreme weather events, natural disasters, administrative traffic restriction measures, strikes affecting services essential for contract performance, etc.).\n\nIn the event of such an occurrence, the performance of obligations shall be suspended for the duration of the event; if the impediment continues beyond a reasonable period, each party may terminate the contract without compensation, by written notification.",
    },
    {
      heading: "19. Termination",
      body: "In addition to the specific cases provided for herein, each party may terminate the contract by right in the event of a serious breach by the other party of its obligations, not remedied within a reasonable period after written notice.\n\nFor the Provider, serious breaches include in particular:",
      items: [
        "Repeated non-payment of rent or fees.",
        "Obviously dangerous or unlawful use of the E-bikes or Segways.",
        "Unauthorised subletting or assignment.",
        "Wilful damage to the E-bikes or Segways or unauthorised modification of their technical characteristics.",
      ],
      afterItems: "Termination shall result in the immediate return of the E-bikes, Segways and accessories, subject to the sums remaining due for rent, repairs, compensation and penalties provided for in the contract.",
    },
    {
      heading: "20. Applicable law – Dispute resolution",
      body: "These GTC and the resulting contracts are subject to French law.\n\nThe language of the contract is French. Translations into foreign languages are provided by the Provider for information purposes only.\n\nIn the event of a dispute relating to the validity, interpretation or execution of this contract, the parties shall endeavour to reach an amicable settlement. Failing an amicable settlement within 30 days of written notification of the dispute by one of the parties, the dispute may be brought before the competent courts.\n\nThe Client is informed of the possibility to use a consumer mediator. The Provider has joined the Centre de la médiation de la consommation des conciliateurs de justice (CM2C)\n\nPostal address: 49 Rue de Ponthieu, 75008 Paris\nEmail address: declarer-un-litige@cm2c.net\nWebsite: https://www.cm2c.net/comment-nous-saisir.php",
    },
    {
      heading: "21. Miscellaneous provisions",
      body: "The nullity of a clause in these GTC shall not affect the validity of the other provisions, which shall remain applicable.\n\nThe fact that the Provider does not invoke any of the clauses at a given time cannot be interpreted as a waiver of its right to invoke them later.\n\nThese GTC may be modified by the Provider. The applicable version is the one in force on the day of booking or signing the contract.",
    },
  ],
};

/* ─── Types ─── */
type DefItem = [string, string];
type Section = {
  heading: string;
  body?: string;
  items?: string[];
  numberedItems?: string[];
  afterItems?: string;
  definitionItems?: DefItem[];
  pricingTable?: boolean;
  afterPricing?: string;
  repairsTable?: boolean;
};
type Content = typeof fr;

/* ─── Sub-components ─── */
const PricingTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.pricingHeaders.map((h) => (
            <th key={h} className="border border-border px-3 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(content === fr ? pricingFR : pricingEN).map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-3 py-2">{row.product}</td>
            <td className="border border-border px-3 py-2 font-semibold text-primary">{row.price}</td>
            <td className="border border-border px-3 py-2">{row.vehicle}</td>
            <td className="border border-border px-3 py-2">{row.format}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RepairsTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.repairsHeaders.map((h) => (
            <th key={h} className="border border-border px-3 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(content === fr ? repairsFR : repairsEN).map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-3 py-2">{row.event}</td>
            <td className="border border-border px-3 py-2 font-semibold">{row.amount}</td>
            <td className="border border-border px-3 py-2 text-muted-foreground">{row.method}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSection = (section: Section, idx: number, content: Content) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-4">{section.heading}</h2>

    {section.definitionItems && (
      <dl className="space-y-3 mb-4">
        {section.definitionItems.map(([term, def]) => (
          <div key={term} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
            <dt className="font-semibold text-sm col-span-1">{term}</dt>
            <dd className="text-sm text-muted-foreground sm:col-span-3">{def}</dd>
          </div>
        ))}
      </dl>
    )}

    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.pricingTable && <PricingTable content={content} />}
    {section.afterPricing && section.afterPricing.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.repairsTable && <RepairsTable content={content} />}

    {section.items && (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}

    {section.numberedItems && (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
        {section.numberedItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    )}

    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}
  </div>
);

/* ─── Page ─── */
const CGSPage = () => {
  const { i18n } = useTranslation();
  const content: Content = i18n.language.startsWith("fr") ? fr : en;

  return (
    <main>
      <SEO
        title="Conditions Générales de Services — VéloRouge"
        description="Conditions Générales de Services de VéloRouge / TourDeWheel."
        canonical="/cgs"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            {content.title}
          </h1>
          <p className="mt-3 text-dark-foreground/50 text-sm tracking-wide">{content.version}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {content.intro.split("\n\n").map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
          <hr className="my-10 border-border" />
          {content.sections.map((section, idx) => renderSection(section as Section, idx, content))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CGSPage;
