export type Region =
  | 'Nord'
  | 'Est'
  | 'Ouest'
  | 'Sud'
  | 'Hauts-Plateaux'
  | 'Sud-Est'
  | 'Sud-Ouest'

export const REGIONS: Region[] = ['Nord', 'Est', 'Ouest', 'Sud', 'Hauts-Plateaux', 'Sud-Est', 'Sud-Ouest']

export type Wilaya = {
  numero: number
  nom: string
  region: Region
  slogan: string
  image: string
}

const regionImage: Record<Region, string> = {
  Nord: '/images/kabylie.png',
  Est: '/images/timgad.png',
  Ouest: '/images/oran.png',
  Sud: '/images/ghardaia.png',
  'Hauts-Plateaux': '/images/kabylie.png',
  'Sud-Est': '/images/djanet.png',
  'Sud-Ouest': '/images/auberge.png',
}

const specificImage: Record<string, string> = {
  Alger: '/images/alger.png',
  Oran: '/images/oran.png',
  Constantine: '/images/constantine.png',
  Annaba: '/images/annaba.png',
  Tlemcen: '/images/tlemcen.png',
  Djanet: '/images/djanet.png',
  'Ghardaïa': '/images/ghardaia.png',
  'Tizi Ouzou': '/images/kabylie.png',
  'Béjaïa': '/images/kabylie.png',
  Batna: '/images/timgad.png',
  Tipaza: '/images/villa.png',
  Skikda: '/images/annaba.png',
}

const raw: [number, string, Region, string][] = [
  [1, 'Adrar', 'Sud-Ouest', 'Les ksour et les foggaras du Touat'],
  [2, 'Chlef', 'Ouest', 'La vallée fertile du Chélif'],
  [3, 'Laghouat', 'Hauts-Plateaux', 'La porte du désert'],
  [4, 'Oum El Bouaghi', 'Est', 'Les lacs salés et les flamants roses'],
  [5, 'Batna', 'Est', 'Timgad et les Aurès millénaires'],
  [6, 'Béjaïa', 'Nord', 'La perle de la Méditerranée kabyle'],
  [7, 'Biskra', 'Sud-Est', 'La reine des Ziban et de ses dattes'],
  [8, 'Béchar', 'Sud-Ouest', 'La Saoura et ses dunes dorées'],
  [9, 'Blida', 'Nord', 'La ville des roses'],
  [10, 'Bouira', 'Nord', 'Au pied du Djurdjura'],
  [11, 'Tamanrasset', 'Sud', "Le Hoggar, toit de l'Algérie"],
  [12, 'Tébessa', 'Est', 'Théveste la romaine'],
  [13, 'Tlemcen', 'Ouest', "La perle du Maghreb"],
  [14, 'Tiaret', 'Hauts-Plateaux', 'Terre des chevaux barbes'],
  [15, 'Tizi Ouzou', 'Nord', 'Le cœur de la Kabylie'],
  [16, 'Alger', 'Nord', 'Alger la Blanche'],
  [17, 'Djelfa', 'Hauts-Plateaux', 'La steppe et ses traditions nomades'],
  [18, 'Jijel', 'Est', 'La corniche aux grottes merveilleuses'],
  [19, 'Sétif', 'Hauts-Plateaux', "La fontaine d'Aïn El Fouara"],
  [20, 'Saïda', 'Hauts-Plateaux', 'La ville des eaux'],
  [21, 'Skikda', 'Est', 'Les plages de Russicada'],
  [22, 'Sidi Bel Abbès', 'Ouest', 'La petite Paris de l’Ouest'],
  [23, 'Annaba', 'Est', "La coquette de l'Est"],
  [24, 'Guelma', 'Est', 'Les sources thermales de Hammam Debagh'],
  [25, 'Constantine', 'Est', 'La ville des ponts suspendus'],
  [26, 'Médéa', 'Nord', 'Le Titteri et ses vignobles'],
  [27, 'Mostaganem', 'Ouest', 'La cité du chaâbi et des plages'],
  [28, "M'Sila", 'Hauts-Plateaux', 'La Qalâa des Béni Hammad'],
  [29, 'Mascara', 'Ouest', "La ville de l'Émir Abdelkader"],
  [30, 'Ouargla', 'Sud-Est', "L'oasis aux mille palmiers"],
  [31, 'Oran', 'Ouest', 'El Bahia, la radieuse'],
  [32, 'El Bayadh', 'Hauts-Plateaux', 'Les gravures rupestres de l’Atlas'],
  [33, 'Illizi', 'Sud-Est', "Le Tassili, musée à ciel ouvert"],
  [34, 'Bordj Bou Arréridj', 'Hauts-Plateaux', 'La capitale de l’électronique'],
  [35, 'Boumerdès', 'Nord', 'Le littoral aux portes d’Alger'],
  [36, 'El Tarf', 'Est', 'Le parc national d’El Kala'],
  [37, 'Tindouf', 'Sud-Ouest', 'Les grands espaces du Sahara occidental'],
  [38, 'Tissemsilt', 'Hauts-Plateaux', 'Les cèdres de Theniet El Had'],
  [39, 'El Oued', 'Sud-Est', 'La ville aux mille coupoles'],
  [40, 'Khenchela', 'Est', 'Les bains romains de Hammam Essalihine'],
  [41, 'Souk Ahras', 'Est', 'La terre natale de Saint Augustin'],
  [42, 'Tipaza', 'Nord', 'Les ruines romaines face à la mer'],
  [43, 'Mila', 'Est', 'Milev et le site de Djemila'],
  [44, 'Aïn Defla', 'Nord', 'Les monts du Zaccar'],
  [45, 'Naâma', 'Hauts-Plateaux', 'Les ksour de l’Atlas saharien'],
  [46, 'Aïn Témouchent', 'Ouest', 'Les plages de la côte turquoise'],
  [47, 'Ghardaïa', 'Sud', 'La vallée du M’Zab'],
  [48, 'Relizane', 'Ouest', 'La plaine de la Mina'],
  [49, 'Timimoun', 'Sud-Ouest', "L'oasis rouge du Gourara"],
  [50, 'Bordj Badji Mokhtar', 'Sud', 'Aux confins du Tanezrouft'],
  [51, 'Ouled Djellal', 'Sud-Est', 'Le pays du mouton Ouled Djellal'],
  [52, 'Béni Abbès', 'Sud-Ouest', "La perle blanche de la Saoura"],
  [53, 'In Salah', 'Sud', 'La cité des dunes du Tidikelt'],
  [54, 'In Guezzam', 'Sud', 'La porte du Sahel'],
  [55, 'Touggourt', 'Sud-Est', "L'oasis de l’Oued Righ"],
  [56, 'Djanet', 'Sud-Est', 'La perle du Tassili n’Ajjer'],
  [57, "El M'Ghair", 'Sud-Est', 'Les palmeraies de l’Oued Righ'],
  [58, 'El Meniaa', 'Sud', 'La perle du désert'],
]

export const wilayas: Wilaya[] = raw.map(([numero, nom, region, slogan]) => ({
  numero,
  nom,
  region,
  slogan,
  image: specificImage[nom] ?? regionImage[region],
}))

export const popularWilayaNames = ['Alger', 'Oran', 'Constantine', 'Annaba', 'Tlemcen', 'Djanet']

export function getWilaya(numero: number) {
  return wilayas.find((w) => w.numero === numero)
}

export function wilayaDescription(w: Wilaya) {
  return `${w.nom} (wilaya n°${String(w.numero).padStart(2, '0')}) est située dans la région ${w.region} de l'Algérie. Surnommée « ${w.slogan} », elle séduit les voyageurs par la richesse de son patrimoine, la chaleur de ses habitants et une gastronomie locale authentique. Prenez le temps d'explorer ses quartiers historiques, ses paysages naturels et ses marchés traditionnels.`
}

export type Circuit = {
  id: string
  nom: string
  prix: number
  duree: number
  wilayas: string[]
  description: string
  programme: string[]
  image: string
}

export const circuits: Circuit[] = [
  {
    id: 'sahara',
    nom: 'Découverte du Sahara',
    prix: 145000,
    duree: 8,
    wilayas: ['Djanet', 'Illizi', 'Tamanrasset'],
    description: "Bivouacs sous les étoiles, gravures rupestres du Tassili et levers de soleil sur l'Assekrem.",
    programme: ['Arrivée à Djanet et accueil touareg', 'Erg Admer et canyons du Tassili', 'Vol vers Tamanrasset', "Nuit à l'Assekrem"],
    image: '/images/djanet.png',
  },
  {
    id: 'cote',
    nom: 'Côte Méditerranéenne',
    prix: 89000,
    duree: 7,
    wilayas: ['Oran', 'Alger', 'Béjaïa', 'Annaba'],
    description: 'De la baie d’Oran à la corniche d’Annaba, un voyage entre plages, ports et médinas.',
    programme: ['Oran et Santa Cruz', 'Alger, la Casbah et Notre-Dame d’Afrique', 'Béjaïa et le Cap Carbon', 'Annaba et Hippone'],
    image: '/images/annaba.png',
  },
  {
    id: 'historiques',
    nom: 'Villes Historiques',
    prix: 72000,
    duree: 6,
    wilayas: ['Alger', 'Constantine', 'Tlemcen', 'Tipaza', 'Mila'],
    description: 'Casbah, ponts suspendus, mosquées almoravides et cités romaines classées UNESCO.',
    programme: ['La Casbah d’Alger', 'Tipaza et le tombeau de la Chrétienne', 'Constantine et Djemila', 'Tlemcen et Mansourah'],
    image: '/images/constantine.png',
  },
  {
    id: 'aures',
    nom: 'Montagnes des Aurès',
    prix: 65000,
    duree: 5,
    wilayas: ['Batna', 'Khenchela', 'Biskra'],
    description: 'Gorges de Ghoufi, ruines de Timgad et villages chaouis accrochés aux falaises.',
    programme: ['Batna et Timgad', 'Balcons de Ghoufi', 'Villages de Menaa', 'Oasis de Biskra'],
    image: '/images/timgad.png',
  },
  {
    id: 'oasis',
    nom: 'Route des Oasis',
    prix: 98000,
    duree: 7,
    wilayas: ['Ghardaïa', 'El Meniaa', 'Timimoun', 'Béni Abbès'],
    description: 'Ksour du M’Zab, oasis rouge du Gourara et palmeraies infinies de la Saoura.',
    programme: ['La pentapole du M’Zab', 'El Meniaa et son lac', 'Timimoun et le Gourara', 'Béni Abbès'],
    image: '/images/ghardaia.png',
  },
  {
    id: 'kabylie',
    nom: 'Kabylie Authentique',
    prix: 54000,
    duree: 4,
    wilayas: ['Tizi Ouzou', 'Béjaïa', 'Bouira'],
    description: 'Villages perchés du Djurdjura, artisanat kabyle, poterie et randonnées en forêt.',
    programme: ['Tizi Ouzou et Beni Yenni', 'Randonnée à Tikjda', 'Tigzirt et ses ruines', 'Gouraya à Béjaïa'],
    image: '/images/kabylie.png',
  },
]

export type HebergementType = 'Hôtel' | "Maison d'hôtes" | 'Appartement' | 'Villa' | 'Auberge'
export type Equipement = 'Wi-Fi' | 'Piscine' | 'Restaurant' | 'TV' | 'Climatisation'
export const HEBERGEMENT_TYPES: HebergementType[] = ['Hôtel', "Maison d'hôtes", 'Appartement', 'Villa', 'Auberge']
export const EQUIPEMENTS: Equipement[] = ['Wi-Fi', 'Piscine', 'Restaurant', 'TV', 'Climatisation']

export type Hebergement = {
  id: string
  nom: string
  ville: string
  type: HebergementType
  prix: number
  note: number
  avis: number
  description: string
  equipements: Equipement[]
  image: string
}

export const hebergements: Hebergement[] = [
  { id: 'h1', nom: 'El Djazair Palace', ville: 'Alger', type: 'Hôtel', prix: 28500, note: 9.1, avis: 842, description: 'Hôtel historique au cœur d’Alger avec jardins mauresques et vue sur la baie.', equipements: ['Wi-Fi', 'Piscine', 'Restaurant', 'TV', 'Climatisation'], image: '/images/hotel.png' },
  { id: 'h2', nom: 'Dar Diaf Casbah', ville: 'Alger', type: "Maison d'hôtes", prix: 9800, note: 9.4, avis: 216, description: 'Maison traditionnelle restaurée avec patio et zellige au sein de la Casbah.', equipements: ['Wi-Fi', 'Restaurant', 'Climatisation'], image: '/images/maison-hotes.png' },
  { id: 'h3', nom: 'Résidence Front de Mer', ville: 'Oran', type: 'Appartement', prix: 7200, note: 8.6, avis: 403, description: 'Appartement lumineux avec balcon face à la mer, à deux pas du centre.', equipements: ['Wi-Fi', 'TV', 'Climatisation'], image: '/images/appartement.png' },
  { id: 'h4', nom: 'Villa Corniche Bleue', ville: 'Annaba', type: 'Villa', prix: 32000, note: 9.0, avis: 128, description: 'Villa avec piscine privée et jardin de palmiers, idéale en famille.', equipements: ['Wi-Fi', 'Piscine', 'TV', 'Climatisation'], image: '/images/villa.png' },
  { id: 'h5', nom: 'Auberge Tin Hinan', ville: 'Djanet', type: 'Auberge', prix: 5400, note: 9.3, avis: 189, description: 'Auberge saharienne en terre crue, dîners sous les étoiles et excursions.', equipements: ['Restaurant', 'Wi-Fi'], image: '/images/auberge.png' },
  { id: 'h6', nom: 'Hôtel Cirta', ville: 'Constantine', type: 'Hôtel', prix: 16500, note: 8.8, avis: 517, description: 'Hôtel élégant face aux gorges du Rhummel et aux ponts suspendus.', equipements: ['Wi-Fi', 'Restaurant', 'TV', 'Climatisation'], image: '/images/hotel.png' },
  { id: 'h7', nom: 'Dar Tlemcen Zianide', ville: 'Tlemcen', type: "Maison d'hôtes", prix: 8600, note: 9.2, avis: 144, description: 'Demeure andalouse proche de la Grande Mosquée et du plateau de Lalla Setti.', equipements: ['Wi-Fi', 'Restaurant', 'TV'], image: '/images/maison-hotes.png' },
  { id: 'h8', nom: 'Ksar Tafilelt Lodge', ville: 'Ghardaïa', type: 'Auberge', prix: 6200, note: 8.9, avis: 98, description: 'Hébergement écologique au cœur du ksar, terrasse panoramique sur la vallée.', equipements: ['Wi-Fi', 'Restaurant', 'Climatisation'], image: '/images/auberge.png' },
  { id: 'h9', nom: 'Villa Les Oliviers', ville: 'Tizi Ouzou', type: 'Villa', prix: 21000, note: 8.7, avis: 76, description: 'Villa de montagne entourée d’oliviers avec vue sur le Djurdjura.', equipements: ['Wi-Fi', 'Piscine', 'TV'], image: '/images/villa.png' },
  { id: 'h10', nom: 'Studio Sidi El Houari', ville: 'Oran', type: 'Appartement', prix: 5600, note: 8.3, avis: 231, description: 'Studio moderne dans le quartier historique, proche des restaurants.', equipements: ['Wi-Fi', 'TV', 'Climatisation'], image: '/images/appartement.png' },
]

export type Vehicule = {
  id: string
  modele: string
  categorie: string
  prix: number
  carburant: string
  transmission: string
  climatisation: boolean
  places: number
  image: string
}

export const vehicules: Vehicule[] = [
  { id: 'v1', modele: 'Renault Clio 5', categorie: 'Citadine', prix: 4500, carburant: 'Essence', transmission: 'Manuelle', climatisation: true, places: 5, image: '/images/voiture.png' },
  { id: 'v2', modele: 'Hyundai Accent', categorie: 'Berline', prix: 5500, carburant: 'Essence', transmission: 'Automatique', climatisation: true, places: 5, image: '/images/voiture.png' },
  { id: 'v3', modele: 'Toyota Land Cruiser', categorie: '4x4', prix: 18000, carburant: 'Diesel', transmission: 'Automatique', climatisation: true, places: 7, image: '/images/4x4.png' },
  { id: 'v4', modele: 'Dacia Duster', categorie: 'SUV', prix: 7500, carburant: 'Diesel', transmission: 'Manuelle', climatisation: true, places: 5, image: '/images/4x4.png' },
]

export type Trajet = { id: string; depart: string; arrivee: string; duree: string; prix: number; compagnie: string; frequence: string }

export const vols: Trajet[] = [
  { id: 'f1', depart: 'Alger', arrivee: 'Tamanrasset', duree: '2h40', prix: 22000, compagnie: 'Air Algérie', frequence: 'Quotidien' },
  { id: 'f2', depart: 'Alger', arrivee: 'Djanet', duree: '2h30', prix: 24500, compagnie: 'Air Algérie', frequence: '4 / semaine' },
  { id: 'f3', depart: 'Alger', arrivee: 'Oran', duree: '0h55', prix: 8500, compagnie: 'Air Algérie', frequence: 'Quotidien' },
  { id: 'f4', depart: 'Oran', arrivee: 'Ghardaïa', duree: '1h30', prix: 12000, compagnie: 'Tassili Airlines', frequence: '3 / semaine' },
  { id: 'f5', depart: 'Constantine', arrivee: 'Ouargla', duree: '1h20', prix: 11500, compagnie: 'Tassili Airlines', frequence: '3 / semaine' },
]

export const trains: Trajet[] = [
  { id: 't1', depart: 'Alger', arrivee: 'Oran', duree: '4h00', prix: 1800, compagnie: 'SNTF Coradia', frequence: '6 / jour' },
  { id: 't2', depart: 'Alger', arrivee: 'Constantine', duree: '6h30', prix: 2200, compagnie: 'SNTF', frequence: '3 / jour' },
  { id: 't3', depart: 'Alger', arrivee: 'Béjaïa', duree: '4h45', prix: 1200, compagnie: 'SNTF', frequence: '2 / jour' },
  { id: 't4', depart: 'Constantine', arrivee: 'Annaba', duree: '2h30', prix: 800, compagnie: 'SNTF', frequence: '4 / jour' },
]

export const bus: Trajet[] = [
  { id: 'b1', depart: 'Alger', arrivee: 'Ghardaïa', duree: '8h00', prix: 2500, compagnie: 'SOGRAL', frequence: '5 / jour' },
  { id: 'b2', depart: 'Alger', arrivee: 'Tizi Ouzou', duree: '2h00', prix: 450, compagnie: 'TVE', frequence: 'Toutes les heures' },
  { id: 'b3', depart: 'Oran', arrivee: 'Tlemcen', duree: '2h15', prix: 600, compagnie: 'SOGRAL', frequence: '8 / jour' },
  { id: 'b4', depart: 'Batna', arrivee: 'Biskra', duree: '1h45', prix: 500, compagnie: 'TVE', frequence: '6 / jour' },
]

export type PlatCategorie = 'Plats principaux' | 'Pâtisseries'
export type Plat = { id: string; nom: string; region: string; categorie: PlatCategorie; description: string; recette: string[]; image: string }

export const plats: Plat[] = [
  { id: 'p1', nom: 'Couscous', region: 'Nord', categorie: 'Plats principaux', description: 'Le plat national : semoule roulée à la main, légumes de saison et viande d’agneau.', recette: ['Rouler la semoule avec un peu d’eau salée.', 'Préparer un bouillon avec agneau, oignons, carottes, navets et pois chiches.', 'Cuire la semoule à la vapeur trois fois au-dessus du bouillon.', 'Servir arrosé de sauce avec les légumes et la viande.'], image: '/images/couscous.png' },
  { id: 'p2', nom: 'Chorba Frik', region: 'Est', categorie: 'Plats principaux', description: 'Soupe de blé vert concassé, incontournable des soirées du Ramadan.', recette: ['Faire revenir l’agneau avec oignon, tomate et épices.', 'Ajouter le frik et les pois chiches, mouiller à l’eau.', 'Laisser mijoter 45 minutes.', 'Parsemer de coriandre et servir avec du citron.'], image: '/images/chorba.png' },
  { id: 'p3', nom: 'Chakhchoukha', region: 'Hauts-Plateaux', categorie: 'Plats principaux', description: 'Galettes émiettées nappées d’une sauce rouge épicée, spécialité de Biskra et Batna.', recette: ['Préparer des galettes fines de semoule.', 'Les émietter en petits morceaux.', 'Cuire une sauce rouge à l’agneau et au piment.', 'Arroser les galettes et laisser imbiber.'], image: '/images/couscous.png' },
  { id: 'p4', nom: 'Rechta', region: 'Nord', categorie: 'Plats principaux', description: 'Fines nouilles maison à la sauce blanche au poulet et navets, typique d’Alger.', recette: ['Préparer une pâte fine et la découper en lanières.', 'Cuire les nouilles à la vapeur.', 'Préparer une sauce blanche au poulet, navets et cannelle.', 'Napper les nouilles de sauce.'], image: '/images/chorba.png' },
  { id: 'p5', nom: 'Makrout', region: 'Est', categorie: 'Pâtisseries', description: 'Losanges de semoule fourrés aux dattes, frits puis trempés dans le miel.', recette: ['Mélanger semoule, beurre fondu et eau de fleur d’oranger.', 'Garnir de pâte de dattes et façonner en boudin.', 'Découper en losanges et frire.', 'Tremper dans du miel tiède.'], image: '/images/makrout.png' },
  { id: 'p6', nom: 'Baklawa', region: 'Nord', categorie: 'Pâtisseries', description: 'Feuilles fines superposées garnies d’amandes et parfumées au miel.', recette: ['Étaler de fines feuilles de pâte beurrées.', 'Alterner couches de pâte et d’amandes à la cannelle.', 'Découper en losanges et cuire au four.', 'Arroser de sirop de miel chaud.'], image: '/images/makrout.png' },
  { id: 'p7', nom: 'Kalb El Louz', region: 'Nord', categorie: 'Pâtisseries', description: 'Gâteau de semoule aux amandes imbibé de sirop, star des tables du Ramadan.', recette: ['Mélanger semoule, sucre, amandes et beurre.', 'Laisser reposer une nuit.', 'Cuire au four jusqu’à dorure.', 'Imbiber de sirop à la fleur d’oranger.'], image: '/images/makrout.png' },
  { id: 'p8', nom: 'Mhadjeb', region: 'Sud', categorie: 'Plats principaux', description: 'Crêpes feuilletées farcies d’une sauce tomate-oignon, vendues dans toutes les rues.', recette: ['Préparer une pâte de semoule souple.', 'Cuire oignons et tomates avec du piment.', 'Étaler finement la pâte et garnir.', 'Plier et cuire sur une plaque chaude.'], image: '/images/chorba.png' },
]

export type Artisanat = { id: string; nom: string; region: string; description: string; details: string; image: string }

export const artisanat: Artisanat[] = [
  { id: 'a1', nom: 'Tapis berbères', region: 'Ghardaïa & Aurès', description: 'Tissés à la main avec des motifs géométriques transmis de mère en fille.', details: 'Chaque année, la Fête du tapis de Ghardaïa célèbre ce savoir-faire. Les couleurs proviennent de teintures naturelles : garance, henné et indigo.', image: '/images/tapis.png' },
  { id: 'a2', nom: 'Poterie', region: 'Kabylie', description: 'Poterie kabyle modelée sans tour et peinte de motifs rouges et noirs.', details: 'Les villages de Maâtkas et Ath Kheir perpétuent cet art féminin ; chaque symbole a une signification protectrice.', image: '/images/poterie.png' },
  { id: 'a3', nom: 'Bijoux', region: 'Kabylie & Hoggar', description: 'Bijoux d’argent émaillés et sertis de corail, croix touarègues ciselées.', details: 'Les bijoux de Beni Yenni sont réputés pour leurs émaux bleus, verts et jaunes. Les Touaregs créent les célèbres croix d’Agadez.', image: '/images/bijoux.png' },
  { id: 'a4', nom: 'Vannerie', region: 'Oasis du Sud', description: 'Paniers, chapeaux et nattes tressés en feuilles de palmier.', details: 'À Biskra, Touggourt et El Oued, les artisans tressent la palme du dattier pour des objets utilitaires et décoratifs.', image: '/images/vannerie.png' },
  { id: 'a5', nom: 'Cuivre ciselé', region: 'Constantine', description: 'Plateaux, théières et lanternes ciselés au marteau et au burin.', details: 'Le quartier de Souika à Constantine abrite des dinandiers dont le travail est transmis depuis l’époque ottomane.', image: '/images/cuivre.png' },
  { id: 'a6', nom: 'Broderie', region: 'Alger & Tlemcen', description: 'Broderie au fil d’or (fetla) sur velours pour le karakou et la chedda.', details: 'La chedda de Tlemcen, tenue nuptiale classée UNESCO, est l’un des chefs-d’œuvre de la broderie algérienne.', image: '/images/broderie.png' },
]

export type EvenementCategorie = 'Musique' | 'Cinéma' | 'Littérature' | 'Culture'
export const EVENEMENT_CATEGORIES: EvenementCategorie[] = ['Musique', 'Cinéma', 'Littérature', 'Culture']

export type Evenement = { id: string; nom: string; lieu: string; date: string; categorie: EvenementCategorie; description: string; details: string; image: string }

export const evenements: Evenement[] = [
  { id: 'e1', nom: 'Festival international de Timgad', lieu: 'Timgad, Batna', date: '10 – 18 juillet 2026', categorie: 'Musique', description: 'Concerts dans le théâtre romain de Timgad avec artistes algériens et internationaux.', details: 'Plus de 30 concerts sur 8 soirées. Navettes depuis Batna chaque soir.', image: '/images/festival.png' },
  { id: 'e2', nom: 'Festival du Raï', lieu: 'Oran', date: '1 – 5 août 2026', categorie: 'Musique', description: 'La capitale du raï célèbre son genre musical emblématique face à la mer.', details: 'Scène principale au front de mer et scènes ouvertes dans le quartier de Sidi El Houari.', image: '/images/oran.png' },
  { id: 'e3', nom: 'Festival du film arabe d’Oran', lieu: 'Oran', date: '3 – 10 octobre 2026', categorie: 'Cinéma', description: 'Compétition de longs et courts métrages du monde arabe.', details: 'Projections à la salle Maghreb, rencontres avec les réalisateurs et ateliers pour jeunes cinéastes.', image: '/images/cinema.png' },
  { id: 'e4', nom: 'Rencontres cinématographiques de Béjaïa', lieu: 'Béjaïa', date: '12 – 18 septembre 2026', categorie: 'Cinéma', description: 'Projections et débats autour du cinéma d’auteur.', details: 'Entrée libre, programmation de films algériens, africains et méditerranéens.', image: '/images/cinema.png' },
  { id: 'e5', nom: 'Salon international du livre d’Alger (SILA)', lieu: 'Alger', date: '28 oct. – 7 nov. 2026', categorie: 'Littérature', description: 'Le plus grand salon du livre du Maghreb, avec plus de 1 000 éditeurs.', details: 'Au Palais des expositions des Pins Maritimes. Dédicaces, conférences et espace jeunesse.', image: '/images/livre.png' },
  { id: 'e6', nom: 'Sbeïba', lieu: 'Djanet', date: '25 juillet 2026', categorie: 'Culture', description: 'Cérémonie touarègue classée UNESCO mêlant chants, danses et costumes.', details: 'Célébrée lors de l’Achoura, elle rassemble les ksour de Zelouaz et d’El Mihan.', image: '/images/djanet.png' },
  { id: 'e7', nom: 'Fête du tapis', lieu: 'Ghardaïa', date: '15 – 20 mars 2026', categorie: 'Culture', description: 'Exposition et vente de tapis, défilés et folklore mozabite.', details: 'Rencontres avec les tisserandes et visites guidées de la vallée du M’Zab.', image: '/images/tapis.png' },
]

export const temoignages = [
  { nom: 'Sarah Benali', ville: 'Lyon, France', commentaire: 'Le circuit du Sahara était magique. Nuit à Djanet inoubliable, guides passionnés et organisation parfaite.' },
  { nom: 'Karim Haddad', ville: 'Montréal, Canada', commentaire: 'J’ai redécouvert le pays de mes parents. Constantine et Tlemcen m’ont totalement conquis.' },
  { nom: 'Lina Moreau', ville: 'Bruxelles, Belgique', commentaire: 'Site très clair, j’ai trouvé une maison d’hôtes superbe dans la Casbah en quelques minutes.' },
  { nom: 'Yacine Ait Ali', ville: 'Alger, Algérie', commentaire: 'Parfait pour planifier un week-end en Kabylie avec la famille. Les recommandations sont top.' },
]

export function formatDZD(value: number) {
  return `${value.toLocaleString('fr-FR')} DA`
}

export function noteLabel(note: number) {
  if (note >= 9) return 'Exceptionnel'
  if (note >= 8.5) return 'Fabuleux'
  if (note >= 8) return 'Très bien'
  return 'Bien'
}
