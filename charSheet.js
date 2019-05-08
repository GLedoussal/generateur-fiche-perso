const difficulty = {
	EASY: 0,
	MODERATE: 1,
	HARD: 2,
	VERYHARD: 3
};

$('body').ready(function() {
'use strict';

let checkUnload = false;

const data = {"appearences":[{"id":"1","name":"effrayant","displayName":"Effrayant","description":"Vous êtes indescriptible, monstrueux ou tout bonnement incroyablement laid. Vous ne pouvez pas interagir avec les autres individus mortels. Ce trait est à la limite du surnaturel.","cost":"-24","default":"0"},{"id":"2","name":"monstrueux","displayName":"Monstrueux","description":"Vous êtes hideux et clairement anormal. La plupart des gens réagissent à votre présence comme à celle d’un monstre plutôt qu’un être conscient. Ce trait est à la limite du surnaturel.","cost":"-20","default":"0"},{"id":"3","name":"hideux","displayName":"Hideux","description":"Vous avez un trait qui provoque le dégoût, ou plusieurs choses qui vous donnent une apparence détestable.","cost":"-16","default":"0"},{"id":"4","name":"laid","displayName":"Laid","description":"Comme ci-dessus, mais pas si intense. Peut-être seulement des dents affreuses ou des cheveux implantés n’importe comment.","cost":"-8","default":"0"},{"id":"5","name":"inatractif","displayName":"Inattractif","description":"Vous avez une apparence vaguement inintéressante mais personne ne peut mettre le doigt dessus.","cost":"-4","default":"0"},{"id":"6","name":"moyen","displayName":"Moyen","description":"Votre apparence vous permet de vous fondre dans la masse. L’impression que les gens ont de vous est surtout due à votre comportement.","cost":"0","default":"1"},{"id":"7","name":"attractif","displayName":"Attractif","description":"Vous ne remportez pas les concours de beauté, mais vous avez définitivement une bonne tête.","cost":"4","default":"0"},{"id":"8","name":"beau","displayName":"Beau","description":"Vous pourriez entrer dans les concours de beauté. On vous regarde dans la rue.","cost":"12","default":"0"},{"id":"9","name":"tres_beau","displayName":"Très beau","description":"Vous pourriez gagner les concours de beauté, et ce régulièrement. Ceux qui s’intéressent à votre genre auront leur attention souvent retenue.","cost":"16","default":"0"},{"id":"10","name":"envoutant","displayName":"Envoûtant","description":"Vous êtes un “spécimen idéal”. Vous déclenchez les regards de tous, et les regards particulièrement appuyés de ceux attirés par votre genre. Ce trait est à la limite du surnaturel.","cost":"20","default":"0"}],"attributs":[{"id":"1","name":"for","displayName":"Force","description":"Elle représente votre puissance physique et intervient dans le calcul des dégâts que vous infligez naturellement ainsi que dans votre capacité à porter de lourdes charges. ","costPerLevel":"10"},{"id":"2","name":"dex","displayName":"Dextérité","description":"Elle mesure une combinaison de l’agilité, de la coordination et de la précision des capacités motrices. Utilisée dans toutes les compétences manuelles et exigeant un mouvement précis du corps.","costPerLevel":"20"},{"id":"3","name":"int","displayName":"Intellect","description":"Il désigne la capacité cérébrale, incluant la créativité, l’intuition, la mémoire, la raison, la santé mentale et la volonté. Il intervient dans toutes les compétences basées sur les connaissances et la réflexion, ainsi que dans les compétences sociales.","costPerLevel":"15"},{"id":"4","name":"end","displayName":"Endurance","description":"Elle mesure l’énergie et la vitalité. Elle représente la santé, la résistance aux poisons et maladies. Elle intervient à chaque fois que votre personnage doit guérir de blessures graves.","costPerLevel":"10"},{"id":"5","name":"per","displayName":"Perception","description":"Elle désigne la capacité à être aux aguets, en alerte vis-à-vis de son environnement. Elle conditionne votre utilisation de vos cinq sens dans leur globalité.","costPerLevel":"5"}],"skills":[{"id":"100","name":"calligraphie","displayName":"Calligraphie","description":"Maîtrise de différents styles d’écriture, pinceau ou plume","difficulty":"2","category":"art","baseAttribute":"dex"},{"id":"101","name":"dessin","displayName":"Dessin ","description":"Crayons, fusains, pastel sur papier","difficulty":"2","category":"art","baseAttribute":"dex"},{"id":"102","name":"peinture","displayName":"Peinture","description":"Sur toile ou sur fresque murale","difficulty":"2","category":"art","baseAttribute":"dex"},{"id":"103","name":"mise_en_scene","displayName":"Mise en scène","description":"Choix de représentation d’une pièce de théâtre","difficulty":"2","category":"art","baseAttribute":"int"},{"id":"104","name":"chant","displayName":"Chant","description":"Chanter juste et entraîner sa voix, faire partie d’un choeur","difficulty":"2","category":"art","baseAttribute":"per"},{"id":"105","name":"composition_musicale","displayName":"Composition musicale","description":"Écrire des partitions","difficulty":"2","category":"art","baseAttribute":"int"},{"id":"106","name":"danse","displayName":"Danse","description":"Seul, à deux ou danses de groupe, acrobatiques ou non","difficulty":"1","category":"art","baseAttribute":"dex"},{"id":"107","name":"instrument_de_musique","displayName":"Instrument de musique","description":"Maîtrise d’un instrument et connaissance du solfège","difficulty":"2","category":"art","baseAttribute":"int"},{"id":"108","name":"poesie","displayName":"Poésie","description":"Tous types de vers, de rimes, de styles","difficulty":"2","category":"art","baseAttribute":"int"},{"id":"200","name":"acrobatie","displayName":"Acrobatie","description":"Gymnastique et figures aériennes","difficulty":"2","category":"capacites_physiques","baseAttribute":"dex"},{"id":"201","name":"course","displayName":"Course","description":"Course de longueur et/ou de vitesse, gestion du souffle","difficulty":"1","category":"capacites_physiques","baseAttribute":"end"},{"id":"202","name":"escalade","displayName":"Escalade","description":"Grimper à la verticale sur un mur, un arbre, une pente, s’accrocher","difficulty":"1","category":"capacites_physiques","baseAttribute":"dex"},{"id":"203","name":"lancer","displayName":"Lancer","description":"Avec force et précision, des objets allant du couteau à la masse","difficulty":"1","category":"capacites_physiques","baseAttribute":"dex"},{"id":"204","name":"saut","displayName":"Saut","description":"En hauteur, en longueur, avec ou sans élan","difficulty":"0","category":"capacites_physiques","baseAttribute":"dex"},{"id":"300","name":"comedie","displayName":"Comédie","description":"Jouer de ce talent pour être divertissant ou pour mentir","difficulty":"1","category":"capacites_sociales","baseAttribute":"int"},{"id":"302","name":"imitation_vocale","displayName":"Imitation vocale","description":"Copier le timbre de voix de quelqu’un","difficulty":"2","category":"capacites_sociales","baseAttribute":"per"},{"id":"303","name":"jeu","displayName":"Jeu","description":"Connaissance et maîtrise des règles de nombreux jeux de hasard ou non","difficulty":"0","category":"capacites_sociales","baseAttribute":"int"},{"id":"400","name":"arts_martiaux","displayName":"Arts Martiaux","description":"N'est accessible qu'aux enseignements spécifiques (art martial Saeji ou Adamien).","difficulty":"3","category":"combat","baseAttribute":"dex"},{"id":"401","name":"pugilat","displayName":"Pugilat","description":"Coups de pied et de poings sans technique particulière","difficulty":"0","category":"combat","baseAttribute":"dex"},{"id":"402","name":"lutte","displayName":"Lutte","description":"Prises simples visant à amener l’adversaire au sol","difficulty":"1","category":"combat","baseAttribute":"for"},{"id":"403","name":"attaque_innee","displayName":"Attaque innée","description":"Compétence réservée au staff et aux animaux. L'utilisation de griffes ou de morsure d'ethnies se règlent via les autres compétences de combat à mains nues.","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"404","name":"bouclier","displayName":"Bouclier","description":"","difficulty":"0","category":"combat","baseAttribute":"for"},{"id":"405","name":"dague","displayName":"Dague","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"406","name":"rapiere","displayName":"Rapière","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"407","name":"sabre","displayName":"Sabre","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"408","name":"epee_courte","displayName":"Épée courte","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"409","name":"epee_batarde","displayName":"Épée bâtarde","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"410","name":"epee_a_deux_mains","displayName":"Épée à deux mains","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"411","name":"fleau_a_une_main","displayName":"Fléau à une main","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"412","name":"fouet","displayName":"Fouet","description":"Techniques d'attaque, de désarmement, au fouet.","difficulty":"2","category":"combat","baseAttribute":"dex"},{"id":"413","name":"hache/masse_a_une_main","displayName":"Hache/Masse à une main","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"414","name":"hache/masse_a_deux_mains","displayName":"Hache/Masse à deux mains","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"415","name":"hallebarde","displayName":"Hallebarde","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"416","name":"lance","displayName":"Lance","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"417","name":"baton","displayName":"Bâton","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"418","name":"arbalete","displayName":"Arbalète","description":"Maîtriser l'arbalète, savoir la charger et l'entretenir.","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"419","name":"arc","displayName":"Arc","description":"","difficulty":"1","category":"combat","baseAttribute":"dex"},{"id":"420","name":"armes_a_feu","displayName":"Armes à feu","description":"Maîtriser le mousquet et l'arquebuse dans toute leur complexité : montage, nettoyage, utilisation.","difficulty":"3","category":"combat","baseAttribute":"dex"},{"id":"500","name":"artillerie","displayName":"Artillerie","description":"Connaissance et maîtrise des armes à projectiles lourds : catapultes, trébuchets…","difficulty":"1","category":"militaire","baseAttribute":"int"},{"id":"501","name":"camouflage","displayName":"Camouflage","description":"Se fondre dans un environnement et ne plus être remarqué","difficulty":"0","category":"militaire","baseAttribute":"int"},{"id":"502","name":"entrainement_de_soldat","displayName":"Entraînement de soldat","description":"Principes de base du soldat, hiérarchie militaire, formations, entretien des armes...","difficulty":"1","category":"militaire","baseAttribute":"int"},{"id":"503","name":"strategie","displayName":"Stratégie","description":"Mouvements d’armées, connaissance de l’ennemi","difficulty":"2","category":"militaire","baseAttribute":"int"},{"id":"504","name":"tactique","displayName":"Tactique","description":"Positions d’une unité de combat, patrouilles, connaissance des positions avantageuses","difficulty":"2","category":"militaire","baseAttribute":"int"},{"id":"600","name":"caviste","displayName":"Caviste","description":"Méthodes de préparation de boissons en tous genre, fermentation, presse etc...","difficulty":"1","category":"vie_citadine","baseAttribute":"int"},{"id":"601","name":"comptabilite","displayName":"Comptabilité","description":"Tenir à jour un journal de compte et des registres","difficulty":"2","category":"vie_citadine","baseAttribute":"int"},{"id":"602","name":"cuisine","displayName":"Cuisine","description":"Faire des plats pour le plaisir du goût, plutôt que pour sustenter","difficulty":"1","category":"vie_citadine","baseAttribute":"int"},{"id":"700","name":"adaptation","displayName":"Adaptation","description":"Savoir se fondre dans une foule, repérer et retenir les rondes des gardes, savoir quand et où aller, se déguiser pour passer inaperçu","difficulty":"1","category":"thuglife","baseAttribute":"int"},{"id":"701","name":"contrefacon","displayName":"Contrefaçon","description":"Réaliser de faux papiers et de faux objets d’art","difficulty":"2","category":"thuglife","baseAttribute":"int"},{"id":"702","name":"crochetage","displayName":"Crochetage","description":"Déverrouiller sans clé et sans laisser de trace","difficulty":"1","category":"thuglife","baseAttribute":"dex"},{"id":"703","name":"dissimulation","displayName":"Dissimulation","description":"Cacher de petits objets ou des armes sur soi","difficulty":"1","category":"thuglife","baseAttribute":"int"},{"id":"704","name":"evasion","displayName":"Evasion","description":"Se détacher de liens, menottes, s’évader d’une cage","difficulty":"2","category":"thuglife","baseAttribute":"dex"},{"id":"705","name":"discretion","displayName":"Discrétion","description":"Savoir se déplacer silencieusement, rester caché","difficulty":"1","category":"thuglife","baseAttribute":"dex"},{"id":"706","name":"fouille","displayName":"Fouille","description":"Trouver rapidement des objets dans un endroit fouilli","difficulty":"0","category":"thuglife","baseAttribute":"per"},{"id":"707","name":"vol","displayName":"Vol","description":"Voler un objet à découvert ou porté par quelqu’un","difficulty":"1","category":"thuglife","baseAttribute":"dex"},{"id":"708","name":"prestidigitation","displayName":"Prestidigitation","description":"Art de faire de petits tours de magie à base de pièces, cartes et autres","difficulty":"2","category":"thuglife","baseAttribute":"dex"},{"id":"709","name":"survie_en_exterieur","displayName":"Survie en extérieur","description":"Survivre dans la nature, loin de toute ville","difficulty":"1","category":"thuglife","baseAttribute":"int"},{"id":"710","name":"traque","displayName":"Traque","description":"Traquer et suivre une cible, animale ou humaine, dans la nature ou dans une ville","difficulty":"1","category":"thuglife","baseAttribute":"per"},{"id":"800","name":"architecture","displayName":"Architecture","description":"Connaissance des styles et des règles","difficulty":"1","category":"artisanat","baseAttribute":"int"},{"id":"801","name":"artisan_du_bois","displayName":"Artisan du bois","description":"Créer de petits objets à base de bois : vaisselle, papier...","difficulty":"2","category":"artisanat","baseAttribute":"dex"},{"id":"802","name":"bucheron","displayName":"Bûcheron","description":"Couper des arbres et débiter le bois en planches","difficulty":"1","category":"artisanat","baseAttribute":"for"},{"id":"803","name":"charpenterie","displayName":"Charpenterie","description":"Couverture de bâtiments en bois ou en métal","difficulty":"0","category":"artisanat","baseAttribute":"int"},{"id":"804","name":"couture","displayName":"Couture","description":"Du tricot à la dentelle, en passant par la broderie","difficulty":"0","category":"artisanat","baseAttribute":"dex"},{"id":"805","name":"ebenisterie","displayName":"Ébénisterie","description":"Fabrication de meubles et objets en bois","difficulty":"2","category":"artisanat","baseAttribute":"dex"},{"id":"806","name":"forge","displayName":"Forge","description":"Fabrication et réparation d’armes, armures et outils","difficulty":"1","category":"artisanat","baseAttribute":"dex"},{"id":"807","name":"joaillerie","displayName":"Joaillerie","description":"Création de bijoux et estimation de valeur","difficulty":"2","category":"artisanat","baseAttribute":"dex"},{"id":"808","name":"maconnerie","displayName":"Maçonnerie","description":"Monter des murs droits et solides avec des pierres taillées. Nécessaire sur un chantier dès que la pierre monte plus haut que le rez-de-chaussée, ou que le mur doit être d'une qualité particulière.","difficulty":"0","category":"artisanat","baseAttribute":"int"},{"id":"809","name":"mecanique","displayName":"Mécanique","description":"Réaliser des systèmes mécaniques complexes","difficulty":"1","category":"artisanat","baseAttribute":"int"},{"id":"810","name":"minage","displayName":"Minage","description":"Creuser une mine durable et efficiente","difficulty":"1","category":"artisanat","baseAttribute":"int"},{"id":"811","name":"tailleur_de_pierre","displayName":"Tailleur de pierre","description":"Tailler la pierre pour la rendre constructible, ou artistique","difficulty":"2","category":"artisanat","baseAttribute":"dex"},{"id":"900","name":"capitainerie","displayName":"Capitainerie","description":"Commander un navire, du pilotage à la vie à bord","difficulty":"2","category":"mer_et_navigation","baseAttribute":"int"},{"id":"901","name":"natation","displayName":"Natation","description":"Nage prolongée, rapide, en apnée ou non","difficulty":"0","category":"mer_et_navigation","baseAttribute":"end"},{"id":"902","name":"navigation","displayName":"Navigation","description":"Lecture de cartes et maintien d’un cap","difficulty":"1","category":"mer_et_navigation","baseAttribute":"int"},{"id":"903","name":"matelot","displayName":"Matelot","description":"Principes de base du matelot, hiérarchie maritime","difficulty":"0","category":"mer_et_navigation","baseAttribute":"int"},{"id":"904","name":"peche","displayName":"Pêche","description":"De la canne au filet, connaissance des poissons","difficulty":"0","category":"mer_et_navigation","baseAttribute":"int"},{"id":"1000","name":"attelage","displayName":"Attelage","description":"Conduire un attelage d’animaux","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"int"},{"id":"1001","name":"chasse","displayName":"Chasse","description":"Abattre des animaux sauvage et les dépecer de telle sorte à en extraire de la viande et des matériaux utilisables.","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"dex"},{"id":"1002","name":"elevage","displayName":"Élevage","description":"Tenir un élevage de bêtes, les faire se reproduire, les nourrir, les maintenir en bonne santé, les abattre.","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"int"},{"id":"1003","name":"dressage_d_animaux","displayName":"Dressage d’animaux","description":"Apprendre des ordres à un animal","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"int"},{"id":"1004","name":"fermier","displayName":"Fermier","description":"Gérer les plantations, la récolte, le stockage","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"int"},{"id":"1005","name":"monture","displayName":"Monture","description":"Monter un animal et le diriger","difficulty":"1","category":"animaux_et_vegetaux","baseAttribute":"dex"},{"id":"1006","name":"naturaliste","displayName":"Naturaliste","description":"Connaissance pratique de la nature : champignons, plantes, comportements animaux...","difficulty":"2","category":"animaux_et_vegetaux","baseAttribute":"int"},{"id":"1100","name":"chirurgie","displayName":"Chirurgie","description":"Opérer directement à l’intérieur du corps humain","difficulty":"3","category":"medecine","baseAttribute":"dex"},{"id":"1101","name":"herboristerie","displayName":"Herboristerie","description":"Connaissance des herbes médicinales, des dosages, des poisons...","difficulty":"3","category":"medecine","baseAttribute":"int"},{"id":"1102","name":"medecine_generale","displayName":"Médecine générale","description":"Connaissance du corps et de ses dysfonctionnements les plus courants","difficulty":"2","category":"medecine","baseAttribute":"int"},{"id":"1103","name":"premiers_secours","displayName":"Premiers secours","description":"Mener les premiers soins sur un blessé en état d’hémorragie","difficulty":"0","category":"medecine","baseAttribute":"dex"},{"id":"1104","name":"veterinaire","displayName":"Vétérinaire","description":"Médecine appliquée aux animaux : blessures et maladies","difficulty":"2","category":"medecine","baseAttribute":"int"},{"id":"1200","name":"alchimie","displayName":"Alchimie","description":"Propriétés de la matière, réactions chimiques, transformations","difficulty":"3","category":"sciences_physiques","baseAttribute":"int"},{"id":"1201","name":"archeologie","displayName":"Archéologie","description":"Mener des fouilles archéologiques","difficulty":"2","category":"sciences_physiques","baseAttribute":"int"},{"id":"1202","name":"astronomie","displayName":"Astronomie","description":"Connaissance des étoiles et des astres","difficulty":"2","category":"sciences_physiques","baseAttribute":"int"},{"id":"1203","name":"cartographie","displayName":"Cartographie","description":"Lecture et création de cartes de tous types","difficulty":"1","category":"sciences_physiques","baseAttribute":"int"},{"id":"1204","name":"cryptographie","displayName":"Cryptographie","description":"Élaboration de codes et décryptage","difficulty":"2","category":"sciences_physiques","baseAttribute":"int"},{"id":"1205","name":"enseignement","displayName":"Enseignement","description":"Transmettre des connaissances efficacement","difficulty":"1","category":"sciences_physiques","baseAttribute":"int"},{"id":"1206","name":"geologie","displayName":"Géologie","description":"Connaissance du sol et des roches","difficulty":"2","category":"sciences_physiques","baseAttribute":"int"},{"id":"1300","name":"anthropologie","displayName":"Anthropologie","description":"Étude générale de l’être humanoïde : races, cultures…","difficulty":"2","category":"sciences_humaines","baseAttribute":"int"},{"id":"1301","name":"connaissance_de_la_loi","displayName":"Connaissance de la loi","description":"Textes, fonctionnement et cas célèbres","difficulty":"2","category":"sciences_humaines","baseAttribute":"int"},{"id":"1302","name":"connaissance_secrete","displayName":"Connaissance secrète","description":"Prendre un niveau par savoir secret possédé","difficulty":"1","category":"sciences_humaines","baseAttribute":"int"},{"id":"1303","name":"heraldique","displayName":"Héraldique","description":"Connaissance des blasons et des règles de l’héraldique","difficulty":"1","category":"sciences_humaines","baseAttribute":"int"},{"id":"1304","name":"histoire","displayName":"Histoire","description":"Connaissances historiques larges et de multiples continents","difficulty":"2","category":"sciences_humaines","baseAttribute":"int"},{"id":"1305","name":"litterature","displayName":"Littérature","description":"Auteurs célèbres, styles et courants","difficulty":"2","category":"sciences_humaines","baseAttribute":"int"},{"id":"1400","name":"connaissance_de_callac","displayName":"Connaissance de Callac","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1401","name":"connaissance_de_dromorth","displayName":"Connaissance de Dromorth","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1402","name":"connaissance_d_heragan","displayName":"Connaissance d’Heragan","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1403","name":"connaissance_de_l_ile_des_brumes","displayName":"Connaissance de l’Île des Brumes","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1404","name":"connaissance_de_menicea","displayName":"Connaissance de Ménicéa","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1405","name":"connaissance_de_l_ostalie","displayName":"Connaissance de l’Ostalie","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1406","name":"connaissance_de_vays","displayName":"Connaissance de Vays","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1407","name":"connaissance_d_anskylvia","displayName":"Connaissance d’Anskylvia","description":"Régions, villes, traditions, légendes…","difficulty":"0","category":"connaissance_des_regions","baseAttribute":"int"},{"id":"1500","name":"meditation","displayName":"Méditation","description":"Se concentrer jusqu’à faire abstraction de l’environnement","difficulty":"2","category":"magie_et_religion","baseAttribute":"int"},{"id":"1503","name":"rituels_religieux","displayName":"Rituels religieux","description":"Mener des rituels religieux seul ou à plusieur, sans aucune conséquence magique","difficulty":"2","category":"magie_et_religion","baseAttribute":"int"},{"id":"1504","name":"thaumatologie","displayName":"Thaumatologie","description":"Étude et maîtrise de la magie","difficulty":"3","category":"magie_et_religion","baseAttribute":"int"},{"id":"1505","name":"force_mentale","displayName":"Force mentale","description":"Résister à des attaques mentales magiques ou non","difficulty":"0","category":"magie_et_religion","baseAttribute":"int"},{"id":"1506","name":"theologie","displayName":"Théologie","description":"Connaissance des religions","difficulty":"2","category":"magie_et_religion","baseAttribute":"int"}],"skillsCategories":[{"id":"1","name":"art","displayName":"Art"},{"id":"2","name":"capacites_physiques","displayName":"Capacités physiques"},{"id":"3","name":"capacites_sociales","displayName":"Capacités sociales"},{"id":"4","name":"combat","displayName":"Combat"},{"id":"5","name":"militaire","displayName":"Militaire"},{"id":"6","name":"vie_citadine","displayName":"Vie citadine"},{"id":"7","name":"thuglife","displayName":"Vie de rue et illégalité"},{"id":"8","name":"artisanat","displayName":"Artisanat"},{"id":"9","name":"mer_et_navigation","displayName":"Mer et navigation"},{"id":"10","name":"animaux_et_vegetaux","displayName":"Animaux et végétaux"},{"id":"11","name":"medecine","displayName":"Médecine"},{"id":"12","name":"sciences_physiques","displayName":"Sciences physiques"},{"id":"13","name":"sciences_humaines","displayName":"Sciences humaines"},{"id":"14","name":"connaissance_des_regions","displayName":"Connaissance des régions"},{"id":"15","name":"magie_et_religion","displayName":"Magie et religion"}],"advantages":[{"id":"1","advantageType":"ADVANTAGE","type":"BOOL","name":"ambidextrie","displayName":"Ambidextrie","description":"Savoir se servir aussi bien de ses deux mains","cost":"5","category":"avantages_physiques_naturels","parent":null},{"id":"2","advantageType":"ADVANTAGE","type":"LEVEL","name":"besoin_de_moins_de_sommeil","displayName":"Besoin de moins de sommeil","description":"Chaque niveau retire une heure de sommeil aux huit nécessaires par nuit pour être en forme","cost":"2","category":"avantages_physiques_naturels","parent":null},{"id":"4","advantageType":"ADVANTAGE","type":"SELECT","name":"consommation_reduite_naturelle","displayName":"Consommation réduite naturelle","description":null,"cost":null,"category":"avantages_physiques_naturels","parent":null},{"id":"5","advantageType":"ADVANTAGE","type":"OPTION","name":"consommation_legere","displayName":"Légère","description":"Consommation de nourriture réduite aux deux tiers de la normale","cost":"2","category":"avantages_physiques_naturels","parent":"consommation_reduite_naturelle"},{"id":"6","advantageType":"ADVANTAGE","type":"OPTION","name":"consommation_importante","displayName":"Importante","description":"Consommation de nourriture réduite au tiers de la normale","cost":"4","category":"avantages_physiques_naturels","parent":"consommation_reduite_naturelle"},{"id":"7","advantageType":"ADVANTAGE","type":"SELECT","name":"defense_amelioree","displayName":"Défenses améliorées","description":null,"cost":null,"category":"avantages_physiques_naturels","parent":null},{"id":"8","advantageType":"ADVANTAGE","type":"OPTION","name":"defense_amelioree_parade","displayName":"Parade","description":"Donne un bonus de +1 à toutes les parades","cost":"5","category":"avantages_physiques_naturels","parent":"defense_amelioree"},{"id":"9","advantageType":"ADVANTAGE","type":"OPTION","name":"defense_amelioree_esquive","displayName":"Esquive","description":"Donne un bonus de +1 à l'esquive","cost":"5","category":"avantages_physiques_naturels","parent":"defense_amelioree"},{"id":"10","advantageType":"ADVANTAGE","type":"OPTION","name":"defense_amelioree_blocage","displayName":"Blocage","description":"Donne un bonus de +1 au blocage","cost":"5","category":"avantages_physiques_naturels","parent":"defense_amelioree"},{"id":"11","advantageType":"ADVANTAGE","type":"BOOL","name":"difficile_a_tuer","displayName":"Difficile à tuer","description":"Très bonne résistance en situation de santé critique","cost":"3","category":"avantages_physiques_naturels","parent":null},{"id":"12","advantageType":"ADVANTAGE","type":"BOOL","name":"guerison_rapide_naturelle","displayName":"Guérison rapide naturelle","description":"Multiplie par 1.5 la vitesse de récupération des points de santé","cost":"5","category":"avantages_physiques_naturels","parent":null},{"id":"13","advantageType":"ADVANTAGE","type":"BOOL","name":"haute_resistance_a_la_douleur","displayName":"Haute résistance à la douleur","description":"Jusqu’à un point critique, pas de malus d’action à cause des blessures","cost":"10","category":"avantages_physiques_naturels","parent":null},{"id":"14","advantageType":"ADVANTAGE","type":"BOOL","name":"recuperation","displayName":"Récupération","description":"Reprendre rapidement ses esprits après être tombé inconscient","cost":"10","category":"avantages_physiques_naturels","parent":null},{"id":"15","advantageType":"ADVANTAGE","type":"BOOL","name":"saut_ameliore","displayName":"Saut amélioré","description":"Le saut en longueur est environ 2 mètres plus long et 1 mètre plus haut.","cost":"5","category":"avantages_physiques_naturels","parent":null},{"id":"16","advantageType":"ADVANTAGE","type":"BOOL","name":"souplesse","displayName":"Souplesse","description":"Offre un bonus de +3 aux jets d’escalade et d'évasion","cost":"5","category":"avantages_physiques_naturels","parent":null},{"id":"101","advantageType":"ADVANTAGE","type":"BOOL","name":"absorbeur_de_magie","displayName":"Absorbeur de magie","description":"Réduit l’effet des magies alentours","cost":"10","category":"avantages_physiques_surnaturels","parent":null},{"id":"102","advantageType":"ADVANTAGE","type":"BOOL","name":"brachiation","displayName":"Brachiation","description":"Capacité à se déplacer de branche en branche avec les bras","cost":"5","category":"avantages_physiques_surnaturels","parent":null},{"id":"103","advantageType":"ADVANTAGE","type":"BOOL","name":"chute_amortie","displayName":"Chute amortie","description":"Amortir sa chute à hauteur de 2 mètres de chute en moins","cost":"5","category":"avantages_physiques_surnaturels","parent":null},{"id":"104","advantageType":"ADVANTAGE","type":"SELECT","name":"consommation_reduite_surnaturelle","displayName":"Consommation réduite surnaturelle","description":null,"cost":null,"category":"avantages_physiques_surnaturels","parent":null},{"id":"105","advantageType":"ADVANTAGE","type":"OPTION","name":"consommation_reduite_surnaturelle_legere","displayName":"Légère","description":"Consommation de nourriture réduite à un repas par semaine","cost":"6","category":"avantages_physiques_surnaturels","parent":"consommation_reduite_surnaturelle"},{"id":"106","advantageType":"ADVANTAGE","type":"OPTION","name":"consommation_reduite_surnaturelle_importante","displayName":"Importante","description":"Consommation de nourriture réduite à un repas par mois","cost":"8","category":"avantages_physiques_surnaturels","parent":"consommation_reduite_surnaturelle"},{"id":"107","advantageType":"ADVANTAGE","type":"BOOL","name":"dents","displayName":"Dents","description":"Dents de carnivores, capables d’infliger une blessure","cost":"1","category":"avantages_physiques_surnaturels","parent":null},{"id":"108","advantageType":"ADVANTAGE","type":"BOOL","name":"gardien","displayName":"Gardien (anskylvien)","description":"Avoir un gardien anskylvien : un loup invisible qui peut défendre son maître.","cost":"40","category":"avantages_physiques_surnaturels","parent":null},{"id":"109","advantageType":"ADVANTAGE","type":"SELECT","name":"griffes","displayName":"Griffes","description":null,"cost":null,"category":"avantages_physiques_surnaturels","parent":null},{"id":"110","advantageType":"ADVANTAGE","type":"OPTION","name":"griffes_petites","displayName":"Petites","description":"De la taille de celles des Gérouns","cost":"5","category":"avantages_physiques_surnaturels","parent":"griffes"},{"id":"111","advantageType":"ADVANTAGE","type":"OPTION","name":"griffes_longues","displayName":"Longues","description":"De la taille de celles des Shéons et des Dreyleindovve","cost":"7","category":"avantages_physiques_surnaturels","parent":"griffes"},{"id":"112","advantageType":"ADVANTAGE","type":"BOOL","name":"guerison_rapide_surnaturelle","displayName":"Guérison rapide surnaturelle","description":"Multiplie par deux la vitesse de régénération des points de santé","cost":"15","category":"avantages_physiques_surnaturels","parent":null},{"id":"113","advantageType":"ADVANTAGE","type":"BOOL","name":"hermaphromorphe","displayName":"Hermaphromorphe","description":"Capacité à changer de sexe à volonté","cost":"5","category":"avantages_physiques_surnaturels","parent":null},{"id":"114","advantageType":"ADVANTAGE","type":"BOOL","name":"longevite_accrue","displayName":"Longévité accrue","description":"Espérance de vie aux alentours de 150~200 ans","cost":"2","category":"avantages_physiques_surnaturels","parent":null},{"id":"115","advantageType":"ADVANTAGE","type":"LEVEL","name":"magie","displayName":"Magie","description":"Chaque niveau donne accès à des sorts de plus en plus puissants (maximum niveau 9)","cost":"3","category":"avantages_physiques_surnaturels","parent":null},{"id":"116","advantageType":"ADVANTAGE","type":"BOOL","name":"morsure_vampirique","displayName":"Morsure vampirique","description":"Capacité à aspirer le sang. Pas de régénération physique induite par le processus","cost":"5","category":"avantages_physiques_surnaturels","parent":null},{"id":"117","advantageType":"ADVANTAGE","type":"LEVEL","name":"resistance_a_la_magie","displayName":"Résistance à la magie","description":"Chaque niveau donne un bonus de +1 pour résister à un sort","cost":"2","category":"avantages_physiques_surnaturels","parent":null},{"id":"118","advantageType":"ADVANTAGE","type":"SELECT","name":"resistance_a_une_substance","displayName":"Résistance à une substance","description":"Capacité à résister aux effets nocifs d’une toxine en particulier","cost":null,"category":"avantages_physiques_surnaturels","parent":null},{"id":"119","advantageType":"ADVANTAGE","type":"OPTION","name":"resistance_a_une_substance_toxine_commune","displayName":"Toxine commune","description":"Mort-aux-rats, cyanure…","cost":"15","category":"avantages_physiques_surnaturels","parent":"resistance_a_une_substance"},{"id":"120","advantageType":"ADVANTAGE","type":"OPTION","name":"resistance_a_une_substance_toxine_rare","displayName":"Toxine rare","description":"Toxines magiques, poisons élaborés…","cost":"5","category":"avantages_physiques_surnaturels","parent":"resistance_a_une_substance"},{"id":"121","advantageType":"ADVANTAGE","type":"BOOL","name":"armure_naturelle","displayName":"Armure naturelle","description":"Offre un bonus de +1 à l’armure","cost":"5","category":"avantages_physiques_surnaturels","parent":null},{"id":"122","advantageType":"ADVANTAGE","type":"BOOL","name":"transformation_binaire","displayName":"Transformation binaire","description":"Alterner entre deux formes physiques","cost":"20","category":"avantages_physiques_surnaturels","parent":null},{"id":"123","advantageType":"ADVANTAGE","type":"BOOL","name":"transformation_libre","displayName":"Transformation libre","description":"Choisir une forme à volonté parmi toutes celles connues : on ne profite que de l'apparence, pas de la force ni des capacités !","cost":"50","category":"avantages_physiques_surnaturels","parent":null},{"id":"201","advantageType":"ADVANTAGE","type":"SELECT","name":"detecter","displayName":"Détecter","description":"Capacité surnaturelle à détecter une substance dans son environnement proche","cost":null,"category":"avantages_de_perception","parent":null},{"id":"202","advantageType":"ADVANTAGE","type":"OPTION","name":"detecter_substance_rare","displayName":"Substance rare","description":"Pierres précieuses, mort-vivants, feu magique…","cost":"5","category":"avantages_de_perception","parent":"detecter"},{"id":"203","advantageType":"ADVANTAGE","type":"OPTION","name":"detecter_substance_occasionnelle","displayName":"Substance occasionnelle","description":"Mages, magie, métaux précieux…","cost":"10","category":"avantages_de_perception","parent":"detecter"},{"id":"204","advantageType":"ADVANTAGE","type":"OPTION","name":"detecter_substance_commune","displayName":"Substance commune","description":"Humains ou autre race, métaux communs…","cost":"20","category":"avantages_de_perception","parent":"detecter"},{"id":"205","advantageType":"ADVANTAGE","type":"BOOL","name":"empathie_animale","displayName":"Empathie animale","description":"Ressentir l’état d’esprit d’un animal","cost":"5","category":"avantages_de_perception","parent":null},{"id":"206","advantageType":"ADVANTAGE","type":"BOOL","name":"empathie_avec_les_plantes","displayName":"Empathie avec les plantes","description":"Capter l’état de santé d’une plante instinctivement","cost":"5","category":"avantages_de_perception","parent":null},{"id":"207","advantageType":"ADVANTAGE","type":"BOOL","name":"equilibre_parfait","displayName":"Equilibre parfait","description":"Ne perds jamais l’équilibre même sur des surfaces irrégulières","cost":"5","category":"avantages_de_perception","parent":null},{"id":"208","advantageType":"ADVANTAGE","type":"LEVEL","name":"odorat_et_gout_accentues","displayName":"Odorat et goût accentués","description":"Chaque niveau donne un bonus de +1 au goût et à l'odorat. Le score total de goût et d'odorat (perception + avantage) ne doit pas dépasser 15.","cost":"2","category":"avantages_de_perception","parent":null},{"id":"209","advantageType":"ADVANTAGE","type":"LEVEL","name":"ouie_accentuee","displayName":"Ouïe accentuée","description":"Chaque niveau donne un bonus de +1 à l'ouïe. Le score total d'ouïe (perception + avantage) ne doit pas dépasser 15.","cost":"2","category":"avantages_de_perception","parent":null},{"id":"210","advantageType":"ADVANTAGE","type":"BOOL","name":"truffe_sheonne","displayName":"Truffe shéonne","description":"Truffe permettant de discriminer des odeurs de manière précise, reconnaître des odeurs de personnes connues.","cost":"6","category":"avantages_de_perception","parent":null},{"id":"211","advantageType":"ADVANTAGE","type":"BOOL","name":"vision_dans_la_nuit","displayName":"Vision dans la nuit","description":"Permet de voir dans la nuit presque comme de jour.","cost":"5","category":"avantages_de_perception","parent":null},{"id":"212","advantageType":"ADVANTAGE","type":"BOOL","name":"vision_dans_le_noir","displayName":"Vision dans le noir","description":"Moyen surnaturel de percevoir l’environnement sans aucune lumière","cost":"25","category":"avantages_de_perception","parent":null},{"id":"213","advantageType":"ADVANTAGE","type":"BOOL","name":"vision_peripherique","displayName":"Vision périphérique","description":"Augmentation du champ de vision à 270° au lieu de 180°","cost":"15","category":"avantages_de_perception","parent":null},{"id":"214","advantageType":"ADVANTAGE","type":"LEVEL","name":"vue_accentuee","displayName":"Vue accentuée","description":"Chaque niveau donne un bonus de +1 à la vision. Le score total de vision (perception + avantage) ne doit pas dépasser 15.","cost":"2","category":"avantages_de_perception","parent":null},{"id":"301","advantageType":"ADVANTAGE","type":"SELECT","name":"adaptabilite_culturelle","displayName":"Adaptabilité culturelle","description":null,"cost":null,"category":"avantages_sociaux","parent":null},{"id":"302","advantageType":"ADVANTAGE","type":"OPTION","name":"adaptabilite_culturelle_toutes_les_cultures_d_une_race","displayName":"Toutes les cultures d’une race","description":"Connaître et pouvoir s’adapter à toutes les cultures d’une même race","cost":"2","category":"avantages_sociaux","parent":"adaptabilite_culturelle"},{"id":"303","advantageType":"ADVANTAGE","type":"OPTION","name":"adaptabilite_culturelle_toutes_les_cultures_de_toutes_les_races","displayName":"Toutes les cultures de toutes les races","description":"Connaître et pouvoir s’adapter à toutes les cultures de toutes les races","cost":"5","category":"avantages_sociaux","parent":"adaptabilite_culturelle"},{"id":"304","advantageType":"ADVANTAGE","type":"BOOL","name":"animal_de_compagnie","displayName":"Animal de compagnie","description":"Avoir un animal de compagnie qu'on amène avec soi sur le serveur.","cost":"3","category":"avantages_sociaux","parent":null},{"id":"305","advantageType":"ADVANTAGE","type":"BOOL","name":"charisme","displayName":"Charisme","description":"Prestance naturelle émanant de vous","cost":"5","category":"avantages_sociaux","parent":null},{"id":"306","advantageType":"ADVANTAGE","type":"BOOL","name":"clerge","displayName":"Clergé","description":"Avoir un rang reconnu dans le milieu religieux, avec les privilèges et les responsabilités subséquents","cost":"5","category":"avantages_sociaux","parent":null},{"id":"307","advantageType":"ADVANTAGE","type":"BOOL","name":"concentration_accrue","displayName":"Concentration accrue","description":"Capacité à se concentrer sur une longue durée malgré les perturbations extérieures","cost":"5","category":"avantages_sociaux","parent":null},{"id":"308","advantageType":"ADVANTAGE","type":"SELECT","name":"contacts","displayName":"Contacts","description":"Connaître et pouvoir contacter quelqu’un de haut placé sur les continents","cost":null,"category":"avantages_sociaux","parent":null},{"id":"311","advantageType":"ADVANTAGE","type":"OPTION","name":"contacts_sur_les_continents_et_sur_qui_on_peut_compter","displayName":"Sur qui on peut compter","description":null,"cost":"3","category":"avantages_sociaux","parent":"contacts"},{"id":"312","advantageType":"ADVANTAGE","type":"OPTION","name":"contacts_sur_les_continents_et_sur_qui_on_ne_peut_pas_vraiment_c","displayName":"Sur qui on ne peut pas vraiment compter","description":null,"cost":"2","category":"avantages_sociaux","parent":"contacts"},{"id":"313","advantageType":"ADVANTAGE","type":"BOOL","name":"difficile_a_impressionner","displayName":"Difficile à impressionner","description":"Jamais dérangé par les choses étranges et déroutantes, tant qu’elles ne constituent pas une menace. Bonus de +3 pour tous les jets de terreur.","cost":"5","category":"avantages_sociaux","parent":null},{"id":"314","advantageType":"ADVANTAGE","type":"BOOL","name":"empathique","displayName":"Empathique","description":"Ressent instinctivement toutes les émotions des autres","cost":"15","category":"avantages_sociaux","parent":null},{"id":"315","advantageType":"ADVANTAGE","type":"BOOL","name":"information_secrete","displayName":"Information secrète","description":"Posséder des informations secrètes d’importance","cost":"5","category":"avantages_sociaux","parent":null},{"id":"316","advantageType":"ADVANTAGE","type":"BOOL","name":"memoire_photographique","displayName":"Mémoire photographique","description":"Se souvenir en détails des éléments visuels","cost":"10","category":"avantages_sociaux","parent":null},{"id":"317","advantageType":"ADVANTAGE","type":"BOOL","name":"notoriete","displayName":"Notoriété","description":"Faire partie d’une race ou d’une classe sociale qui est le plus souvent regardée avec respect par les autres catégories de population","cost":"5","category":"avantages_sociaux","parent":null},{"id":"318","advantageType":"ADVANTAGE","type":"SELECT","name":"objet_de_maitre","displayName":"Objet de maître","description":"Possession d’un objet unique et potentiellement connu dans son lieu d’origine","cost":null,"category":"avantages_sociaux","parent":null},{"id":"319","advantageType":"ADVANTAGE","type":"OPTION","name":"objet_de_maitre_non-magique","displayName":"Non-magique","description":null,"cost":"5","category":"avantages_sociaux","parent":"objet_de_maitre"},{"id":"320","advantageType":"ADVANTAGE","type":"OPTION","name":"objet_de_maitre_magique","displayName":"Magique","description":null,"cost":"10","category":"avantages_sociaux","parent":"objet_de_maitre"},{"id":"321","advantageType":"ADVANTAGE","type":"BOOL","name":"rang_de_marchand","displayName":"Rang de marchand","description":"Avoir un rang dans une compagnie marchande, avec les privilèges et les responsabilités subséquents","cost":"5","category":"avantages_sociaux","parent":null},{"id":"322","advantageType":"ADVANTAGE","type":"BOOL","name":"rang_militaire","displayName":"Rang militaire","description":"Posséder un haut rang militaire et être ainsi reconnu et estimé par les autres militaires","cost":"10","category":"avantages_sociaux","parent":null},{"id":"323","advantageType":"ADVANTAGE","type":"BOOL","name":"sensible","displayName":"Sensible","description":"Ressent les émotions d’autrui avec plus de facilité","cost":"5","category":"avantages_sociaux","parent":null},{"id":"324","advantageType":"ADVANTAGE","type":"BOOL","name":"temeraire","displayName":"Téméraire","description":"N’hésite pas à aller au devant du danger. Bonus de +2 pour tous les jets de terreur.","cost":"3","category":"avantages_sociaux","parent":null},{"id":"325","advantageType":"ADVANTAGE","type":"BOOL","name":"tres_bonne_memoire","displayName":"Très bonne mémoire","description":"Capacité à se remémorer un grand nombre d’informations. Donne +1 à tous les jets de connaissance","cost":"5","category":"avantages_sociaux","parent":null},{"id":"326","advantageType":"ADVANTAGE","type":"BOOL","name":"voix","displayName":"Voix","description":"Avoir une voix claire et agréable.","cost":"5","category":"avantages_sociaux","parent":null},{"id":"401","advantageType":"DISADVANTAGE","type":"SELECT","name":"addiction","displayName":"Addiction","description":"Effet de manque si une certaine substance n’est pas ingérée régulièrement","cost":null,"category":"desavantages_physiques_naturels","parent":null},{"id":"402","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_difficile_a_se_procurer_et_illegale","displayName":"Substance difficile à se procurer et illégale","description":null,"cost":"-20","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"403","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_difficile_a_se_procurer","displayName":"Substance difficile à se procurer","description":null,"cost":"-15","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"404","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_moyennement_facile_a_se_procurer","displayName":"Substance moyennement facile à se procurer","description":null,"cost":"-10","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"405","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_facile_a_se_procurer","displayName":"Substance facile à se procurer","description":null,"cost":"-5","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"406","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_incapacitante_ou_hallucinogene","displayName":"Substance incapacitante ou hallucinogène","description":null,"cost":"-10","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"407","advantageType":"DISADVANTAGE","type":"OPTION","name":"addiction_substance_hautement_addictive","displayName":"Substance hautement addictive","description":null,"cost":"-5","category":"desavantages_physiques_naturels","parent":"addiction"},{"id":"408","advantageType":"DISADVANTAGE","type":"BOOL","name":"blessure_profonde","displayName":"Blessure profonde","description":"Avoir une blessure qui ne se refermera jamais correctement","cost":"-5","category":"desavantages_physiques_naturels","parent":null},{"id":"409","advantageType":"DISADVANTAGE","type":"SELECT","name":"boiteux","displayName":"Boiteux","description":"Avoir une jambe qui fait défaut","cost":null,"category":"desavantages_physiques_naturels","parent":null},{"id":"410","advantageType":"DISADVANTAGE","type":"OPTION","name":"boiteux_jambe_abimee","displayName":"Jambe abîmée","description":null,"cost":"-10","category":"desavantages_physiques_naturels","parent":"boiteux"},{"id":"411","advantageType":"DISADVANTAGE","type":"OPTION","name":"boiteux_jambe_en_moins","displayName":"Jambe en moins","description":null,"cost":"-30","category":"desavantages_physiques_naturels","parent":"boiteux"},{"id":"412","advantageType":"DISADVANTAGE","type":"BOOL","name":"bras_en_moins","displayName":"Bras en moins","description":"Avoir perdu l’usage d’un bras, ou simplement le bras entier","cost":"-20","category":"desavantages_physiques_naturels","parent":null},{"id":"413","advantageType":"DISADVANTAGE","type":"BOOL","name":"degage_une_mauvaise_odeur","displayName":"Dégage une mauvaise odeur","description":"Repousse les autres personnes en général","cost":"-10","category":"desavantages_physiques_naturels","parent":null},{"id":"414","advantageType":"DISADVANTAGE","type":"SELECT","name":"dependance","displayName":"Dépendance","description":"Substance sans laquelle des risques de mort apparaissent","cost":null,"category":"desavantages_physiques_naturels","parent":null},{"id":"415","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_substance_rare","displayName":"Substance rare","description":"Pas achetable, elle doit être trouvée ou fabriquée","cost":"-30","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"416","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_occasionnelle","displayName":"Occasionnelle","description":"Très chère et difficile à trouver","cost":"-20","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"417","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_commune","displayName":"Commune","description":"Chère, trouvable en cherchant bien","cost":"-10","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"418","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_tres_commune","displayName":"Très commune","description":"Trouvable presque partout","cost":"-5","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"419","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_substance_illicite","displayName":"Substance illicite","description":null,"cost":"-5","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"420","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_a_prendre_tous_les_jours","displayName":"À prendre tous les jours","description":null,"cost":"-10","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"421","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_a_prendre_toutes_les_semaines","displayName":"À prendre toutes les semaines","description":null,"cost":"-5","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"422","advantageType":"DISADVANTAGE","type":"OPTION","name":"dependance_a_prendre_tous_les_mois","displayName":"À prendre tous les mois","description":null,"cost":"-1","category":"desavantages_physiques_naturels","parent":"dependance"},{"id":"423","advantageType":"DISADVANTAGE","type":"LEVEL","name":"doigt_en_moins","displayName":"Doigt en moins","description":"Chaque niveau correspond à un doigt coupé","cost":"-3","category":"desavantages_physiques_naturels","parent":null},{"id":"424","advantageType":"DISADVANTAGE","type":"SELECT","name":"douleur_chronique","displayName":"Douleur chronique","description":"Avoir une douleur qui revient par crise et qui ne se soigne pas","cost":null,"category":"desavantages_physiques_naturels","parent":null},{"id":"425","advantageType":"DISADVANTAGE","type":"OPTION","name":"douleur_chronique_douleur_legere","displayName":"Douleur légère","description":"Sensation très désagréable une à deux fois par jour","cost":"-5","category":"desavantages_physiques_naturels","parent":"douleur_chronique"},{"id":"426","advantageType":"DISADVANTAGE","type":"OPTION","name":"douleur_chronique_douleur_severe","displayName":"Douleur sévère","description":"Sensation insupportable deux à trois fois par jour","cost":"-10","category":"desavantages_physiques_naturels","parent":"douleur_chronique"},{"id":"427","advantageType":"DISADVANTAGE","type":"BOOL","name":"guerison_lente","displayName":"Guérison lente","description":"Guérir plus lentement que la moyenne, cicatriser avec difficulté. -1 à la régénération journalière des points de santé.","cost":"-5","category":"desavantages_physiques_naturels","parent":null},{"id":"428","advantageType":"DISADVANTAGE","type":"BOOL","name":"facile_a_tuer","displayName":"Facile à tuer","description":"Finit par mourir plus vite, une fois la situation critique atteinte","cost":"-3","category":"desavantages_physiques_naturels","parent":null},{"id":"429","advantageType":"DISADVANTAGE","type":"BOOL","name":"hemophile","displayName":"Hémophile","description":"Ne peut jamais cicatriser : se vide de son sang sur une simple coupure si elle n’est pas soignée","cost":"-30","category":"desavantages_physiques_naturels","parent":null},{"id":"430","advantageType":"DISADVANTAGE","type":"BOOL","name":"insomniaque","displayName":"Insomniaque","description":"Éprouve de grandes difficultés à dormir, se réveille souvent","cost":"-10","category":"desavantages_physiques_naturels","parent":null},{"id":"431","advantageType":"DISADVANTAGE","type":"LEVEL","name":"main_en_moins","displayName":"Main en moins","description":"Chaque niveau correspond à une main coupée","cost":"-15","category":"desavantages_physiques_naturels","parent":null},{"id":"432","advantageType":"DISADVANTAGE","type":"BOOL","name":"mal_des_transports","displayName":"Mal des transports","description":"Nausées puissantes dans tout type de transport","cost":"-5","category":"desavantages_physiques_naturels","parent":null},{"id":"433","advantageType":"DISADVANTAGE","type":"BOOL","name":"muet","displayName":"Muet","description":"Ne peut pas parler, peut uniquement émettre des sons simples","cost":"-25","category":"desavantages_physiques_naturels","parent":null},{"id":"434","advantageType":"DISADVANTAGE","type":"SELECT","name":"regime_particulier","displayName":"Régime particulier","description":"Ne se nourrir que d’un type de nourriture précis, volontairement ou non","cost":null,"category":"desavantages_physiques_naturels","parent":null},{"id":"435","advantageType":"DISADVANTAGE","type":"OPTION","name":"regime_particulier_dangereux","displayName":"Dangereux","description":"Chair humaine, sang humain...","cost":"-20","category":"desavantages_physiques_naturels","parent":"regime_particulier"},{"id":"436","advantageType":"DISADVANTAGE","type":"OPTION","name":"regime_particulier_commun","displayName":"Commun","description":"Viande fraîche, sang frais, végétaux...","cost":"-10","category":"desavantages_physiques_naturels","parent":"regime_particulier"},{"id":"437","advantageType":"DISADVANTAGE","type":"LEVEL","name":"sommeil_supplementaire","displayName":"Sommeil supplémentaire","description":"Chaque niveau ajoute une heure de sommeil nécessaire aux huit heures d’une nuit normale","cost":"-2","category":"desavantages_physiques_naturels","parent":null},{"id":"438","advantageType":"DISADVANTAGE","type":"BOOL","name":"voix_derangeante","displayName":"Voix dérangeante","description":"Avoir une voix désagréable.","cost":"-10","category":"desavantages_physiques_naturels","parent":null},{"id":"439","advantageType":"DISADVANTAGE","type":"BOOL","name":"sommeil_leger","displayName":"Sommeil léger","description":"Se réveiller au moindre bruit","cost":"-5","category":"desavantages_physiques_naturels","parent":null},{"id":"440","advantageType":"DISADVANTAGE","type":"BOOL","name":"sensible_a_la_douleur","displayName":"Sensible à la douleur","description":"-2 aux malus de blessure.","cost":"-10","category":"desavantages_physiques_naturels","parent":null},{"id":"441","advantageType":"DISADVANTAGE","type":"BOOL","name":"mort","displayName":"Mort","description":"Ne pas cocher à la création. Ce désavantage indique que le personnage est mort définitivement.","cost":"0","category":"desavantages_physiques_naturels","parent":null},{"id":"501","advantageType":"DISADVANTAGE","type":"BOOL","name":"appetit_incontrolable","displayName":"Appétit incontrôlable","description":"Doit se nourrir au dépend d’autres personnes, souvent lié à Régime Particulier","cost":"-15","category":"desavantages_physiques_surnature","parent":null},{"id":"502","advantageType":"DISADVANTAGE","type":"BOOL","name":"contagion","displayName":"Contagion","description":"Capacité à répandre ses capacités surnaturelles par la morsure ou autre","cost":"-5","category":"desavantages_physiques_surnature","parent":null},{"id":"503","advantageType":"DISADVANTAGE","type":"BOOL","name":"effraie_les_animaux","displayName":"Effraie les animaux","description":"Provoque des réactions de peur et d’agressivité chez les animaux","cost":"-10","category":"desavantages_physiques_surnature","parent":null},{"id":"504","advantageType":"DISADVANTAGE","type":"SELECT","name":"faiblesse","displayName":"Faiblesse","description":"Être affecté par une substance particulière, d’ordinaire inoffensive","cost":null,"category":"desavantages_physiques_surnature","parent":null},{"id":"505","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_mortelle","displayName":"Mortelle","description":"Le contact prolongé avec la substance sera mortel","cost":"-20","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"506","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_dangereuse","displayName":"Dangereuse","description":"Le contact prolongé avec la substance blesse et/ou infecte","cost":"-10","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"507","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_incapacitante","displayName":"Incapacitante","description":"Le contact avec la substance fait perdre toute force","cost":"-5","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"508","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_occasionnelle","displayName":"Occasionnelle","description":"Métal précieux, liquide peu commun…","cost":"-5","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"509","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_commune","displayName":"Commune","description":"Métal commun, fumée…","cost":"-10","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"510","advantageType":"DISADVANTAGE","type":"OPTION","name":"faiblesse_tres_commune","displayName":"Très commune","description":"Soleil, plantes, eau…","cost":"-15","category":"desavantages_physiques_surnature","parent":"faiblesse"},{"id":"511","advantageType":"DISADVANTAGE","type":"BOOL","name":"non_magique","displayName":"Non-magique","description":"Ne peut physiquement pas pratiquer la magie et ne le pourra jamais (à justifier dans le RP).","cost":"-10","category":"desavantages_physiques_surnature","parent":null},{"id":"512","advantageType":"DISADVANTAGE","type":"LEVEL","name":"sensibilite_accrue_a_la_magie","displayName":"Sensibilité accrue à la magie","description":"Accorde un bonus de +1 aux mages pour lancer des sorts contre soi","cost":"-3","category":"desavantages_physiques_surnature","parent":null},{"id":"601","advantageType":"DISADVANTAGE","type":"BOOL","name":"aveugle","displayName":"Aveugle","description":"Ne peut pas voir","cost":"-50","category":"desavantages_de_perception","parent":null},{"id":"602","advantageType":"DISADVANTAGE","type":"BOOL","name":"daltonien","displayName":"Daltonien","description":"Confond certaines couleurs","cost":"-5","category":"desavantages_de_perception","parent":null},{"id":"603","advantageType":"DISADVANTAGE","type":"BOOL","name":"dur_de_la_feuille","displayName":"Dur de la feuille","description":"Malus de -4 aux jets impliquant l’ouïe","cost":"-10","category":"desavantages_de_perception","parent":null},{"id":"604","advantageType":"DISADVANTAGE","type":"BOOL","name":"faible_empathie","displayName":"Faible empathie","description":"Éprouve beaucoup de difficultés à capter les émotions d’autrui","cost":"-10","category":"desavantages_de_perception","parent":null},{"id":"605","advantageType":"DISADVANTAGE","type":"SELECT","name":"mauvaise_vue","displayName":"Mauvaise vue","description":"Avoir une vision altérée : myopie, hypermétropie…","cost":null,"category":"desavantages_de_perception","parent":null},{"id":"606","advantageType":"DISADVANTAGE","type":"OPTION","name":"mauvaise_vue_sans_lunettes","displayName":"Sans lunettes","description":null,"cost":"-25","category":"desavantages_de_perception","parent":"mauvaise_vue"},{"id":"607","advantageType":"DISADVANTAGE","type":"OPTION","name":"mauvaise_vue_avec_lunettes","displayName":"Avec lunettes","description":null,"cost":"-10","category":"desavantages_de_perception","parent":"mauvaise_vue"},{"id":"608","advantageType":"DISADVANTAGE","type":"BOOL","name":"pas_de_sens_du_gout_ni_de_l_odorat","displayName":"Pas de sens du goût ni de l’odorat","description":"Ne sent ni les goûts ni les odeurs","cost":"-5","category":"desavantages_de_perception","parent":null},{"id":"609","advantageType":"DISADVANTAGE","type":"BOOL","name":"pas_de_vision_de_profondeur","displayName":"Pas de vision de profondeur","description":"Avoir deux yeux mais ne pas percevoir la profondeur","cost":"-10","category":"desavantages_de_perception","parent":null},{"id":"610","advantageType":"DISADVANTAGE","type":"BOOL","name":"sourd","displayName":"Sourd","description":"Ne peut rien entendre","cost":"-20","category":"desavantages_de_perception","parent":null},{"id":"611","advantageType":"DISADVANTAGE","type":"BOOL","name":"un_seul_oeil","displayName":"Un seul oeil","description":"A un oeil en moins","cost":"-15","category":"desavantages_de_perception","parent":null},{"id":"701","advantageType":"DISADVANTAGE","type":"BOOL","name":"dyslexie","displayName":"Dyslexie","description":"Difficultés à écrire et orthographier correctement les mots","cost":"-10","category":"desavantages_mentaux","parent":null},{"id":"702","advantageType":"DISADVANTAGE","type":"SELECT","name":"amnesie","displayName":"Amnésie","description":null,"cost":null,"category":"desavantages_mentaux","parent":null},{"id":"703","advantageType":"DISADVANTAGE","type":"OPTION","name":"amnesie_partielle","displayName":"Partielle","description":"A oublié plusieurs années de sa vie","cost":"-10","category":"desavantages_mentaux","parent":"amnesie"},{"id":"704","advantageType":"DISADVANTAGE","type":"OPTION","name":"amnesie_totale","displayName":"Totale","description":"A oublié toute sa vie et n’a de souvenirs que depuis peu","cost":"-25","category":"desavantages_mentaux","parent":"amnesie"},{"id":"705","advantageType":"DISADVANTAGE","type":"BOOL","name":"begaiement","displayName":"Bégaiement","description":"A des difficultés à s’exprimer clairement.","cost":"-10","category":"desavantages_mentaux","parent":null},{"id":"706","advantageType":"DISADVANTAGE","type":"BOOL","name":"cauchemars","displayName":"Cauchemars","description":"A régulièrement des cauchemars traumatisant, souvent le même","cost":"-5","category":"desavantages_mentaux","parent":null},{"id":"707","advantageType":"DISADVANTAGE","type":"SELECT","name":"desordre_neurologique","displayName":"Désordre neurologique","description":"A des spasmes et autres problèmes plus ou moins handicapants","cost":null,"category":"desavantages_mentaux","parent":null},{"id":"708","advantageType":"DISADVANTAGE","type":"OPTION","name":"desordre_neurologique_tics_nerveux","displayName":"Tics nerveux","description":"Ponctuels, on les remarque à force de fréquentation","cost":"-5","category":"desavantages_mentaux","parent":"desordre_neurologique"},{"id":"709","advantageType":"DISADVANTAGE","type":"OPTION","name":"desordre_neurologique_spasmes_legers","displayName":"Spasmes légers","description":"Visibles de tous, -2 aux tâches manuelles précises","cost":"-15","category":"desavantages_mentaux","parent":"desordre_neurologique"},{"id":"710","advantageType":"DISADVANTAGE","type":"OPTION","name":"desordre_neurologique_spasmes_severes","displayName":"Spasmes sévères","description":"Difficile de vivre en société, -4 aux tâches manuelles","cost":"-35","category":"desavantages_mentaux","parent":"desordre_neurologique"},{"id":"711","advantageType":"DISADVANTAGE","type":"SELECT","name":"entend_des_voix","displayName":"Entend des voix","description":"Est le seul à entendre certaines voix, réelles ou non","cost":null,"category":"desavantages_mentaux","parent":null},{"id":"712","advantageType":"DISADVANTAGE","type":"OPTION","name":"entend_des_voix_ennuyantes","displayName":"Ennuyantes","description":"Parvient à ne pas les écouter, mais entend tout de même","cost":"-5","category":"desavantages_mentaux","parent":"entend_des_voix"},{"id":"713","advantageType":"DISADVANTAGE","type":"OPTION","name":"entend_des_voix_derangeantes","displayName":"Dérangeantes","description":"Parfois effrayantes, peuvent émettre d’autres sons","cost":"-10","category":"desavantages_mentaux","parent":"entend_des_voix"},{"id":"714","advantageType":"DISADVANTAGE","type":"OPTION","name":"entend_des_voix_diaboliques","displayName":"Diaboliques","description":"Demandent de tuer, de commettre des actes horribles","cost":"-15","category":"desavantages_mentaux","parent":"entend_des_voix"},{"id":"715","advantageType":"DISADVANTAGE","type":"BOOL","name":"mentalite_d_esclave","displayName":"Mentalité d’esclave","description":"Pas d’initiative ni d’envies, confus sans ordre à suivre","cost":"-20","category":"desavantages_mentaux","parent":null},{"id":"716","advantageType":"DISADVANTAGE","type":"BOOL","name":"ne_ressent_pas_le_plaisir","displayName":"Ne ressent pas le plaisir","description":"Incapacité biologique à ressentir le plaisir","cost":"-15","category":"desavantages_mentaux","parent":null},{"id":"717","advantageType":"DISADVANTAGE","type":"BOOL","name":"ne_sait_pas_compter","displayName":"Ne sait pas compter","description":"Incapacité à faire des mathématiques, même simples","cost":"-5","category":"desavantages_mentaux","parent":null},{"id":"718","advantageType":"DISADVANTAGE","type":"BOOL","name":"personnalite_multiple","displayName":"Personnalité multiple","description":"Possède plusieurs personnalités souvent en confrontation","cost":"-15","category":"desavantages_mentaux","parent":null},{"id":"719","advantageType":"DISADVANTAGE","type":"BOOL","name":"somnambule","displayName":"Somnambule","description":"Se lève encore endormi certaines nuit et peut se mettre en danger","cost":"-5","category":"desavantages_mentaux","parent":null},{"id":"720","advantageType":"DISADVANTAGE","type":"BOOL","name":"tetanie_en_combat","displayName":"Tétanie en combat","description":"Reste figé face à la violence, ne peut pas réagir","cost":"-15","category":"desavantages_mentaux","parent":null},{"id":"721","advantageType":"DISADVANTAGE","type":"BOOL","name":"traumatise_par_la_violence","displayName":"Traumatisé par la violence","description":"Se retrouve totalement traumatisé par toute manifestation de violence, qu'il y ait pris part ou non.","cost":"-5","category":"desavantages_mentaux","parent":null},{"id":"801","advantageType":"DISADVANTAGE","type":"BOOL","name":"acrophobie","displayName":"Acrophobie","description":"Peur des hauteurs, vertige maladif","cost":"-10","category":"phobies","parent":null},{"id":"802","advantageType":"DISADVANTAGE","type":"BOOL","name":"agoraphobie","displayName":"Agoraphobie","description":"Peur des espaces ouverts","cost":"-10","category":"phobies","parent":null},{"id":"803","advantageType":"DISADVANTAGE","type":"BOOL","name":"aichmophobie","displayName":"Aichmophobie","description":"Peur des objets tranchants et/ou pointus","cost":"-10","category":"phobies","parent":null},{"id":"804","advantageType":"DISADVANTAGE","type":"BOOL","name":"ailurophobie","displayName":"Ailurophobie","description":"Peur des chats et des gérouns","cost":"-10","category":"phobies","parent":null},{"id":"805","advantageType":"DISADVANTAGE","type":"BOOL","name":"arachnophobie","displayName":"Arachnophobie","description":"Peur des araignées","cost":"-5","category":"phobies","parent":null},{"id":"806","advantageType":"DISADVANTAGE","type":"BOOL","name":"brontophobie","displayName":"Brontophobie","description":"Peur du tonnere, de l'orage, de la tempête","cost":"-10","category":"phobies","parent":null},{"id":"807","advantageType":"DISADVANTAGE","type":"BOOL","name":"claustrophobie","displayName":"Claustrophobie","description":"Peur des espaces restreints","cost":"-15","category":"phobies","parent":null},{"id":"808","advantageType":"DISADVANTAGE","type":"BOOL","name":"coitophobie","displayName":"Coitophobie","description":"Peur du sexe","cost":"-10","category":"phobies","parent":null},{"id":"809","advantageType":"DISADVANTAGE","type":"BOOL","name":"cynophobie","displayName":"Cynophobie","description":"Peur des chiens, des loups et des shéons","cost":"-5","category":"phobies","parent":null},{"id":"810","advantageType":"DISADVANTAGE","type":"BOOL","name":"demophobie","displayName":"Démophobie","description":"Peur des grands groupes de personnes","cost":"-15","category":"phobies","parent":null},{"id":"811","advantageType":"DISADVANTAGE","type":"BOOL","name":"entomophobie","displayName":"Entomophobie","description":"Peur des insectes","cost":"-10","category":"phobies","parent":null},{"id":"812","advantageType":"DISADVANTAGE","type":"BOOL","name":"hemophobie","displayName":"Hemophobie","description":"Peur du sang","cost":"-10","category":"phobies","parent":null},{"id":"813","advantageType":"DISADVANTAGE","type":"BOOL","name":"herpetophobie","displayName":"Herpétophobie","description":"Peur des reptiles et des dreyleindovve","cost":"-10","category":"phobies","parent":null},{"id":"814","advantageType":"DISADVANTAGE","type":"BOOL","name":"mysophobie","displayName":"Mysophobie","description":"Peur de la poussière, de la terre, des infections…","cost":"-10","category":"phobies","parent":null},{"id":"815","advantageType":"DISADVANTAGE","type":"BOOL","name":"necrophobie","displayName":"Nécrophobie","description":"Peur de la mort et des morts","cost":"-10","category":"phobies","parent":null},{"id":"816","advantageType":"DISADVANTAGE","type":"BOOL","name":"pyrophobie","displayName":"Pyrophobie","description":"Peur du feu","cost":"-5","category":"phobies","parent":null},{"id":"817","advantageType":"DISADVANTAGE","type":"BOOL","name":"scotophobie","displayName":"Scotophobie","description":"Peur du noir","cost":"-15","category":"phobies","parent":null},{"id":"818","advantageType":"DISADVANTAGE","type":"BOOL","name":"teratophobie","displayName":"Tératophobie","description":"Peur de toute créature surnaturelle","cost":"-5","category":"phobies","parent":null},{"id":"819","advantageType":"DISADVANTAGE","type":"BOOL","name":"thalassophobie","displayName":"Thalassophobie","description":"Peur des grandes étendues d’eau","cost":"-10","category":"phobies","parent":null},{"id":"820","advantageType":"DISADVANTAGE","type":"BOOL","name":"thaumaphobie","displayName":"Thaumaphobie","description":"Peur de la magie","cost":"-10","category":"phobies","parent":null},{"id":"821","advantageType":"DISADVANTAGE","type":"BOOL","name":"xenophobie","displayName":"Xénophobie","description":"Peur des choses et des gens étranges et inconnus","cost":"-15","category":"phobies","parent":null},{"id":"901","advantageType":"DISADVANTAGE","type":"BOOL","name":"altruiste","displayName":"Altruiste","description":"Place souvent l’intérêt des autres avant le sien","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"902","advantageType":"DISADVANTAGE","type":"BOOL","name":"avare","displayName":"Avare","description":"Tente toujours de dépenser le moins d’argent possible","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"903","advantageType":"DISADVANTAGE","type":"BOOL","name":"avide","displayName":"Avide","description":"Place l’acquisition d’argent au sommet de ses objectifs","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"904","advantageType":"DISADVANTAGE","type":"BOOL","name":"besoin_de_compagnie","displayName":"Besoin de compagnie","description":"Se sent mal en solitaire, travaille mieux en groupe","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"905","advantageType":"DISADVANTAGE","type":"BOOL","name":"borne","displayName":"Borné","description":"Change très rarement d’avis","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"906","advantageType":"DISADVANTAGE","type":"BOOL","name":"charitable","displayName":"Charitable","description":"Aide toujours son prochain, même si c’est un ennemi","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"907","advantageType":"DISADVANTAGE","type":"LEVEL","name":"comportement_compulsif","displayName":"Comportement compulsif","description":"Chaque niveau correspond à une tare : jeu d’argents, drague, achat compulsif…","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"908","advantageType":"DISADVANTAGE","type":"BOOL","name":"couard","displayName":"Couard","description":"Fuit le danger à la moindre occasion, laissant parfois ses alliés sur place. Malus de -3 à tous les jets de terreur.","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"909","advantageType":"DISADVANTAGE","type":"BOOL","name":"crainte","displayName":"Crainte","description":"Peur viscérale d’une certaine substance","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"910","advantageType":"DISADVANTAGE","type":"BOOL","name":"culpabilite","displayName":"Culpabilité","description":"Se sent coupable de beaucoup de choses, souvent à tort","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"911","advantageType":"DISADVANTAGE","type":"BOOL","name":"curieux","displayName":"Curieux","description":"Cherche toujours à en savoir plus, ne supporte pas l’inconnu","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"912","advantageType":"DISADVANTAGE","type":"BOOL","name":"depression_chronique","displayName":"Dépression chronique","description":"A perdu le goût à la vie, à son existence","cost":"-15","category":"desavantages_comportementaux","parent":null},{"id":"913","advantageType":"DISADVANTAGE","type":"BOOL","name":"egoiste","displayName":"Égoïste","description":"Place souvent son intérêt avant celui des autres","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"914","advantageType":"DISADVANTAGE","type":"BOOL","name":"faible_image_de_soi","displayName":"Faible image de soi","description":"Se sous-estime grandement et a peu d’assurance","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"915","advantageType":"DISADVANTAGE","type":"BOOL","name":"flemmard","displayName":"Flemmard","description":"Cherche toujours à produire le moins d’effort possible","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"916","advantageType":"DISADVANTAGE","type":"BOOL","name":"glouton","displayName":"Glouton","description":"Adore manger et le fera à la moindre occasion","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"917","advantageType":"DISADVANTAGE","type":"BOOL","name":"honnete","displayName":"Honnête","description":"Obéit en permanence à la loi, n’est pas mentalement prêt à frauder","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"918","advantageType":"DISADVANTAGE","type":"BOOL","name":"impulsif","displayName":"Impulsif","description":"Prend rarement le temps de réfléchir, agit sur l’instant","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"919","advantageType":"DISADVANTAGE","type":"BOOL","name":"intolerance","displayName":"Intolérance","description":"Éprouve une répulsion envers certaines races et catégories sociales","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"920","advantageType":"DISADVANTAGE","type":"BOOL","name":"jaloux","displayName":"Jaloux","description":"Peur et anxiété concernant la perte anticipée d'un statue, d'un objet ou d'une relation.","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"921","advantageType":"DISADVANTAGE","type":"BOOL","name":"kleptomane","displayName":"Kleptomane","description":"Ne résiste pas à la possibilité de dérober un objet un peu partout","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"922","advantageType":"DISADVANTAGE","type":"BOOL","name":"livre_ouvert","displayName":"Livre ouvert","description":"Trahit toujours ses émotions par son expression faciale","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"923","advantageType":"DISADVANTAGE","type":"BOOL","name":"lunatique","displayName":"Lunatique","description":"Caractère instable pouvant changer du tout au tout sur l'instant (peut également être lié aux phases lunaires pour certaines ethnies)","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"924","advantageType":"DISADVANTAGE","type":"BOOL","name":"luxure","displayName":"Luxure","description":"Apprécie et recherche le plaisir sexuel et les fantasmes en tous genres","cost":"-15","category":"desavantages_comportementaux","parent":null},{"id":"925","advantageType":"DISADVANTAGE","type":"BOOL","name":"naif","displayName":"Naïf","description":"Avale la plus ridicule des histoires, croit tout ce qu’on raconte","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"926","advantageType":"DISADVANTAGE","type":"BOOL","name":"ne_peut_pas_mentir","displayName":"Ne peut pas mentir","description":"Pas prêt mentalement à mentir à quelqu’un","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"927","advantageType":"DISADVANTAGE","type":"BOOL","name":"maladroit","displayName":"Maladroit","description":"Propension à faire des bêtises, faire tomber des objets","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"928","advantageType":"DISADVANTAGE","type":"BOOL","name":"mauvais_temperament","displayName":"Mauvais tempérament","description":"Imprévisible et désagréable pour son entourage","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"929","advantageType":"DISADVANTAGE","type":"BOOL","name":"megalomane","displayName":"Mégalomane","description":"Persuadé d’être particulier, d’avoir un grand destin, d’être unique","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"930","advantageType":"DISADVANTAGE","type":"SELECT","name":"obsession","displayName":"Obsession","description":"Avoir un but dans la vie qui dirige la totalité de ses choix","cost":null,"category":"desavantages_comportementaux","parent":null},{"id":"931","advantageType":"DISADVANTAGE","type":"OPTION","name":"obsession_realisable_a_court_terme","displayName":"Réalisable à court terme","description":null,"cost":"-5","category":"desavantages_comportementaux","parent":"obsession"},{"id":"932","advantageType":"DISADVANTAGE","type":"OPTION","name":"obsession_realisable_a_long_terme","displayName":"Réalisable à long terme","description":null,"cost":"-10","category":"desavantages_comportementaux","parent":"obsession"},{"id":"933","advantageType":"DISADVANTAGE","type":"SELECT","name":"pacifiste","displayName":"Pacifiste","description":null,"cost":null,"category":"desavantages_comportementaux","parent":null},{"id":"934","advantageType":"DISADVANTAGE","type":"OPTION","name":"pacifiste_tueur_reticent","displayName":"Tueur réticent","description":"Peut se battre ou déclencher des combats contre n'importe qui. N'est pas psychologiquement préparé à tuer mais peut y arriver si la situation l'exige","cost":"-5","category":"desavantages_comportementaux","parent":"pacifiste"},{"id":"935","advantageType":"DISADVANTAGE","type":"OPTION","name":"pacifiste_ne_peut_pas_blesser_d_innocent","displayName":"Ne peut pas blesser d’innocent","description":"Peut se battre ou déclencher des combats mais n'attaquera que si la personne l'a cherché. Peut tuer si menacé de mort","cost":"-10","category":"desavantages_comportementaux","parent":"pacifiste"},{"id":"936","advantageType":"DISADVANTAGE","type":"OPTION","name":"pacifiste_ne_peut_pas_tuer","displayName":"Ne peut pas tuer","description":"Peut se battre ou déclencher des combats sans porter aucune attaque létale","cost":"-15","category":"desavantages_comportementaux","parent":"pacifiste"},{"id":"937","advantageType":"DISADVANTAGE","type":"OPTION","name":"pacifiste_defense_legitime","displayName":"Défense légitime","description":"Ne fera que se défendre sans blesser en cas d’attaque","cost":"-15","category":"desavantages_comportementaux","parent":"pacifiste"},{"id":"938","advantageType":"DISADVANTAGE","type":"OPTION","name":"pacifiste_non-violent","displayName":"Non-violent","description":"N’appliquera jamais aucune forme de violence physique","cost":"-30","category":"desavantages_comportementaux","parent":"pacifiste"},{"id":"939","advantageType":"DISADVANTAGE","type":"BOOL","name":"paranoiaque","displayName":"Paranoïaque","description":"Croit qu’il est surveillé, critiqué dans son dos, épié en permanence","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"940","advantageType":"DISADVANTAGE","type":"BOOL","name":"pas_de_sens_de_l_humour","displayName":"Pas de sens de l’humour","description":"Incapable de comprendre ou de faire des plaisanteries","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"941","advantageType":"DISADVANTAGE","type":"BOOL","name":"peureux","displayName":"Peureux","description":"A peur de la moindre chose inconnue ou incertaine. Malus de -2 à tous les jets de terreur.","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"942","advantageType":"DISADVANTAGE","type":"BOOL","name":"premier_degre","displayName":"Premier degré","description":"Ne remarque ni les tentatives de séduction, ni les insultes déguisées","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"943","advantageType":"DISADVANTAGE","type":"BOOL","name":"provocateur","displayName":"Provocateur","description":"Va toujours aller embêter la bête la plus grosse, la personne qu’il faut le moins provoquer","cost":"-15","category":"desavantages_comportementaux","parent":null},{"id":"944","advantageType":"DISADVANTAGE","type":"BOOL","name":"pyromanie","displayName":"Pyromanie","description":"Obsession du feu, a envie de brûler un maximum de choses","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"945","advantageType":"DISADVANTAGE","type":"BOOL","name":"sadique","displayName":"Sadique","description":"Obsession de la souffrance, a envie de faire mal, physiquement et mentalement","cost":"-15","category":"desavantages_comportementaux","parent":null},{"id":"946","advantageType":"DISADVANTAGE","type":"BOOL","name":"sang-chaud","displayName":"Sang-Chaud","description":"Par au quart de tour et peut devenir très violent","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"947","advantageType":"DISADVANTAGE","type":"BOOL","name":"sans-coeur","displayName":"Sans-coeur","description":"Incapable de ressentir de fortes émotions, d’éprouver de la compassion","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"948","advantageType":"DISADVANTAGE","type":"BOOL","name":"sens_du_devoir","displayName":"Sens du devoir","description":"Ressentir le devoir d'aider une certaine personne ou un petit groupe de personnes en toutes circonstances","cost":"-4","category":"desavantages_comportementaux","parent":null},{"id":"949","advantageType":"DISADVANTAGE","type":"BOOL","name":"soif_de_sang","displayName":"Soif de sang","description":"Désire voir ses ennemis morts, ne fait pas de prisonniers","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"950","advantageType":"DISADVANTAGE","type":"BOOL","name":"solitaire","displayName":"Solitaire","description":"Préfère vivre et travailler seul, apprécie moyennement la compagnie","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"951","advantageType":"DISADVANTAGE","type":"BOOL","name":"sur_le_fil_du_rasoir","displayName":"Sur le fil du rasoir","description":"Téméraire au point de prendre des risques inconsidérés","cost":"-15","category":"desavantages_comportementaux","parent":null},{"id":"952","advantageType":"DISADVANTAGE","type":"BOOL","name":"susceptible","displayName":"Susceptible","description":"Facilement provocable, monte vite au créneau","cost":"-3","category":"desavantages_comportementaux","parent":null},{"id":"953","advantageType":"DISADVANTAGE","type":"BOOL","name":"timide","displayName":"Timide","description":"Va difficilement vers les gens, trop peu sur de lui","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"954","advantageType":"DISADVANTAGE","type":"BOOL","name":"vaniteux","displayName":"Vaniteux","description":"Se surestime la plupart du temps, se vante souvent","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"955","advantageType":"DISADVANTAGE","type":"BOOL","name":"vicieux","displayName":"Vicieux","description":"Cherche toujours à pousser les gens à bout, à tester leurs limites","cost":"-10","category":"desavantages_comportementaux","parent":null},{"id":"1001","advantageType":"DISADVANTAGE","type":"SELECT","name":"avoir_un_dependant","displayName":"Avoir un dépendant","description":"Avoir quelqu’un de qui on est responsable","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1002","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_enfant_present_sur_le_serveur","displayName":"Enfant présent sur le serveur","description":null,"cost":"-40","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1003","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_amant_present_sur_le_serveur","displayName":"Amant présent sur le serveur","description":null,"cost":"-10","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1004","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_employe_present_sur_le_serveur","displayName":"Employé présent sur le serveur","description":null,"cost":"-5","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1005","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_enfant_sur_les_continents","displayName":"Enfant sur les continents","description":null,"cost":"-20","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1006","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_amant_sur_les_continents","displayName":"Amant sur les continents","description":null,"cost":"-5","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1007","advantageType":"DISADVANTAGE","type":"SELECT","name":"code_d_honneur","displayName":"Code d’honneur","description":"Code duquel on ne doit déroger sous aucun prétexte","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1008","advantageType":"DISADVANTAGE","type":"OPTION","name":"code_d_honneur_professionnel","displayName":"Professionnel","description":"Correspond à tout ordre professionnel : médecine, guilde, militaire...","cost":"-5","category":"desavantages_sociaux","parent":"code_d_honneur"},{"id":"1009","advantageType":"DISADVANTAGE","type":"OPTION","name":"code_d_honneur_piraterie","displayName":"Piraterie","description":"Respecter les règles implicites des hors-la-loi organisés","cost":"-5","category":"desavantages_sociaux","parent":"code_d_honneur"},{"id":"1010","advantageType":"DISADVANTAGE","type":"OPTION","name":"code_d_honneur_homme_d_honneur","displayName":"Homme d’honneur","description":"Avoir un très fort sens de l'honneur, ne jamais refuser un défi, toujours punir un affront...","cost":"-10","category":"desavantages_sociaux","parent":"code_d_honneur"},{"id":"1011","advantageType":"DISADVANTAGE","type":"OPTION","name":"code_d_honneur_chevalerie","displayName":"Chevalerie","description":"Respecter toute la hiérarchie et tous les principes de la chevalerie","cost":"-15","category":"desavantages_sociaux","parent":"code_d_honneur"},{"id":"1012","advantageType":"DISADVANTAGE","type":"LEVEL","name":"dette","displayName":"Dette","description":"Chaque niveau implique une dette équivalente à la somme moyenne initiale à l’arrivée sur le nouveau continent","cost":"-2","category":"desavantages_sociaux","parent":null},{"id":"1013","advantageType":"DISADVANTAGE","type":"SELECT","name":"devoir","displayName":"Devoir","description":"Avoir un devoir qui découle de sa position sociale","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1014","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_tout_le_temps","displayName":"Tout le temps","description":"Doit être appliqué en tout temps, de jour comme de nuit","cost":"-15","category":"desavantages_sociaux","parent":"devoir"},{"id":"1015","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_tres_souvent","displayName":"Très souvent","description":"Doit être appliqué au moins deux fois par jour","cost":"-10","category":"desavantages_sociaux","parent":"devoir"},{"id":"1016","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_souvent","displayName":"Souvent","description":"Doit être appliqué presque tous les jours","cost":"-5","category":"desavantages_sociaux","parent":"devoir"},{"id":"1017","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_rarement","displayName":"Rarement","description":"Doit être appliqué toutes les semaines","cost":"-2","category":"desavantages_sociaux","parent":"devoir"},{"id":"1018","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_extremement_dangereux","displayName":"Extrêmement dangereux","description":"Ce devoir incombe des situations risquées","cost":"-5","category":"desavantages_sociaux","parent":"devoir"},{"id":"1019","advantageType":"DISADVANTAGE","type":"OPTION","name":"devoir_contre_son_gre","displayName":"Contre son gré","description":"Ne pas être en accord personnel avec ce devoir","cost":"-5","category":"desavantages_sociaux","parent":"devoir"},{"id":"1020","advantageType":"DISADVANTAGE","type":"SELECT","name":"disciplines_de_foi","displayName":"Disciplines de foi","description":null,"cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1021","advantageType":"DISADVANTAGE","type":"OPTION","name":"disciplines_de_foi_monastere","displayName":"Monastère","description":"Isolé la plupart du temps dans un lieu reculé","cost":"-10","category":"desavantages_sociaux","parent":"disciplines_de_foi"},{"id":"1022","advantageType":"DISADVANTAGE","type":"OPTION","name":"disciplines_de_foi_mysticisme","displayName":"Mysticisme","description":"Méditations fréquentes, peut être considéré comme un fou","cost":"-10","category":"desavantages_sociaux","parent":"disciplines_de_foi"},{"id":"1023","advantageType":"DISADVANTAGE","type":"OPTION","name":"disciplines_de_foi_ritualisme","displayName":"Ritualisme","description":"Obéit à des rituels de vie strictes, du lever au coucher","cost":"-5","category":"desavantages_sociaux","parent":"disciplines_de_foi"},{"id":"1024","advantageType":"DISADVANTAGE","type":"SELECT","name":"ennemis","displayName":"Ennemis","description":"Avoir des personnes contre soi, plus ou moins violentes","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1025","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_une_personne_peu_puissante","displayName":"Une personne peu puissante","description":null,"cost":"-5","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1026","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_une_personne_puissante","displayName":"Une personne puissante","description":null,"cost":"-10","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1027","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_groupe_de_trois_a_cinq_personnes_peu_puissantes","displayName":"Groupe de trois à cinq personnes peu puissantes","description":null,"cost":"-7","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1028","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_groupe_d_une_dizaine_de_personnes_peu_puissantes","displayName":"Groupe d’une dizaine de personnes peu puissantes","description":null,"cost":"-15","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1029","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_groupe_de_quelques_centaines_de_personnes_peu_puissantes","displayName":"Groupe de quelques centaines de personnes peu puissantes","description":null,"cost":"-20","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1030","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_groupe_moyen_incluant_des_personnes_puissantes","displayName":"Groupe moyen incluant des personnes puissantes","description":null,"cost":"-20","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1031","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_gouvernement_entier_guilde_puissante","displayName":"Gouvernement entier, guilde puissante","description":null,"cost":"-30","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1032","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_surveillance","displayName":"Surveillance","description":"Les ennemis ne font que surveiller la cible","cost":"-1","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1033","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_rival","displayName":"Rival","description":"Les ennemis cherchent simplement à dépasser la cible","cost":"-5","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1034","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_chasse_et_traque","displayName":"Chasse et traque","description":"Les ennemis cherchent activement leur cible","cost":"-10","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1035","advantageType":"DISADVANTAGE","type":"OPTION","name":"ennemis_presents_sur_le_serveur","displayName":"Présents sur le serveur","description":null,"cost":"-10","category":"desavantages_sociaux","parent":"ennemis"},{"id":"1036","advantageType":"DISADVANTAGE","type":"BOOL","name":"fanatisme","displayName":"Fanatisme","description":"Placer un culte ou une organisation avant toute autre chose","cost":"-15","category":"desavantages_sociaux","parent":null},{"id":"1037","advantageType":"DISADVANTAGE","type":"SELECT","name":"illusion","displayName":"Illusion","description":"Croire dur comme fer à quelque chose qui est en fait faux","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1038","advantageType":"DISADVANTAGE","type":"OPTION","name":"illusion_legere","displayName":"Légère","description":"Ne se remarque qu’au bout d’un long moment de fréquentation","cost":"-5","category":"desavantages_sociaux","parent":"illusion"},{"id":"1039","advantageType":"DISADVANTAGE","type":"OPTION","name":"illusion_severe","displayName":"Sévère","description":"Affecte le comportement et rend étrange la vie en société","cost":"-10","category":"desavantages_sociaux","parent":"illusion"},{"id":"1040","advantageType":"DISADVANTAGE","type":"SELECT","name":"secret","displayName":"Secret","description":"Information personnelle qui doit absolument rester secrète","cost":null,"category":"desavantages_sociaux","parent":null},{"id":"1041","advantageType":"DISADVANTAGE","type":"OPTION","name":"secret_embarras","displayName":"Embarras","description":"La révélation du secret empêche le mariage et de gouverner","cost":"-5","category":"desavantages_sociaux","parent":"secret"},{"id":"1042","advantageType":"DISADVANTAGE","type":"OPTION","name":"secret_rejet_total","displayName":"Rejet total","description":"La révélation entraîne un rejet de ses amis et de sa famille","cost":"-10","category":"desavantages_sociaux","parent":"secret"},{"id":"1043","advantageType":"DISADVANTAGE","type":"OPTION","name":"secret_emprisonnement_ou_exil","displayName":"Emprisonnement ou exil","description":"La révélation peut mener en prison ou en exil","cost":"-20","category":"desavantages_sociaux","parent":"secret"},{"id":"1044","advantageType":"DISADVANTAGE","type":"OPTION","name":"secret_revelation_mortelle","displayName":"Révélation mortelle","description":"La révélation peut mener à une peine de mort","cost":"-30","category":"desavantages_sociaux","parent":"secret"},{"id":"1045","advantageType":"DISADVANTAGE","type":"BOOL","name":"stigmatisme_social","displayName":"Stigmatisme social","description":"Faire partie d’une race ou d’une catégorie sociale qui est stigmatisée par la population en général","cost":"-10","category":"desavantages_sociaux","parent":null},{"id":"1101","advantageType":"ADVANTAGE","type":"SELECT","name":"langue_commune","displayName":"Langue Commune","description":"Langue parlée par tous, excepté les communautés reculées ou fermées sur elles-mêmes.","cost":null,"category":"langues","parent":null},{"id":"1102","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_commune_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"langue_commune"},{"id":"1103","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_commune_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"langue_commune"},{"id":"1104","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_commune_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"langue_commune"},{"id":"1105","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_commune_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"langue_commune"},{"id":"1106","advantageType":"DISADVANTAGE","type":"OPTION","name":"avoir_un_dependant_gardien","displayName":"Gardien (anskylvien)","description":"Avoir un gardien et devoir s'en occuper régulièrement : le nourrir, devoir vivre avec lui.","cost":"-20","category":"desavantages_sociaux","parent":"avoir_un_dependant"},{"id":"1107","advantageType":"ADVANTAGE","type":"SELECT","name":"draconique","displayName":"Draconique","description":"Langue parlée par les Dreyleindovve et que l'on suppose parlée par les dragons eux-mêmes.","cost":null,"category":"langues","parent":null},{"id":"1108","advantageType":"ADVANTAGE","type":"OPTION","name":"draconique_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"draconique"},{"id":"1109","advantageType":"ADVANTAGE","type":"OPTION","name":"draconique_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"draconique"},{"id":"1110","advantageType":"ADVANTAGE","type":"OPTION","name":"draconique_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"draconique"},{"id":"1111","advantageType":"ADVANTAGE","type":"OPTION","name":"draconique_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"draconique"},{"id":"1112","advantageType":"ADVANTAGE","type":"SELECT","name":"adamien","displayName":"Adamien","description":"Langue parlée par les Adamiens.","cost":null,"category":"langues","parent":null},{"id":"1113","advantageType":"ADVANTAGE","type":"OPTION","name":"adamien_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"adamien"},{"id":"1114","advantageType":"ADVANTAGE","type":"OPTION","name":"adamien_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"adamien"},{"id":"1115","advantageType":"ADVANTAGE","type":"OPTION","name":"adamien_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"adamien"},{"id":"1116","advantageType":"ADVANTAGE","type":"OPTION","name":"adamien_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"adamien"},{"id":"1117","advantageType":"ADVANTAGE","type":"SELECT","name":"saefre","displayName":"Saefrë","description":"Langue parlée par les Saejis.","cost":null,"category":"langues","parent":null},{"id":"1118","advantageType":"ADVANTAGE","type":"OPTION","name":"saefre_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"saefre"},{"id":"1119","advantageType":"ADVANTAGE","type":"OPTION","name":"saefre_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"saefre"},{"id":"1120","advantageType":"ADVANTAGE","type":"OPTION","name":"saefre_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"saefre"},{"id":"1121","advantageType":"ADVANTAGE","type":"OPTION","name":"saefre_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"saefre"},{"id":"1122","advantageType":"ADVANTAGE","type":"SELECT","name":"anskylvien","displayName":"Anskylvien","description":"Langue parlée en Anskylvia.","cost":null,"category":"langues","parent":null},{"id":"1123","advantageType":"ADVANTAGE","type":"OPTION","name":"anskylvien_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"anskylvien"},{"id":"1124","advantageType":"ADVANTAGE","type":"OPTION","name":"anskylvien_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"anskylvien"},{"id":"1125","advantageType":"ADVANTAGE","type":"OPTION","name":"anskylvien_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"anskylvien"},{"id":"1126","advantageType":"ADVANTAGE","type":"OPTION","name":"anskylvien_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"anskylvien"},{"id":"1127","advantageType":"ADVANTAGE","type":"SELECT","name":"illien","displayName":"Illien","description":"Langue parlée par les Illiens.","cost":null,"category":"langues","parent":null},{"id":"1128","advantageType":"ADVANTAGE","type":"OPTION","name":"illien_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"illien"},{"id":"1129","advantageType":"ADVANTAGE","type":"OPTION","name":"illien_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"illien"},{"id":"1130","advantageType":"ADVANTAGE","type":"OPTION","name":"illien_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"illien"},{"id":"1131","advantageType":"ADVANTAGE","type":"OPTION","name":"illien_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"illien"},{"id":"1132","advantageType":"ADVANTAGE","type":"SELECT","name":"langue_nomade","displayName":"Langue Nomade","description":"Langue parlée en Vays par les nomades.","cost":null,"category":"langues","parent":null},{"id":"1133","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_nomade_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"langue_nomade"},{"id":"1134","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_nomade_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"langue_nomade"},{"id":"1135","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_nomade_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"langue_nomade"},{"id":"1142","advantageType":"ADVANTAGE","type":"SELECT","name":"meniceen","displayName":"Ménicéen","description":"Langue parlée par les gérouns à Ménicéa","cost":null,"category":"langues","parent":null},{"id":"1143","advantageType":"ADVANTAGE","type":"OPTION","name":"meniceen_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"meniceen"},{"id":"1144","advantageType":"ADVANTAGE","type":"OPTION","name":"meniceen_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"meniceen"},{"id":"1145","advantageType":"ADVANTAGE","type":"OPTION","name":"meniceen_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"meniceen"},{"id":"1146","advantageType":"ADVANTAGE","type":"OPTION","name":"meniceen_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"meniceen"},{"id":"1147","advantageType":"ADVANTAGE","type":"SELECT","name":"langue_gylmaureen","displayName":"Langue Elfique Gylmauréen","description":"Langue parlée par les elfes Gylmauréens","cost":null,"category":"langues","parent":null},{"id":"1148","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_gylmaureen_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"langue_gylmaureen"},{"id":"1149","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_gylmaureen_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"langue_gylmaureen"},{"id":"1150","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_gylmaureen_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"langue_gylmaureen"},{"id":"1151","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_gylmaureen_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"langue_gylmaureen"},{"id":"1152","advantageType":"ADVANTAGE","type":"SELECT","name":"langue_iphrit","displayName":"Langue Iphrit","description":"Langue parlée par les Iphrits sur leur continent.","cost":null,"category":"langues","parent":null},{"id":"1153","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_iphrit_basique","displayName":"Niveau Basique","description":"Vous pouvez reconnaître les mots les plus importants d’une phrase s’ils sont prononcés doucement.","cost":"2","category":"langues","parent":"langue_iphrit"},{"id":"1154","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_iphrit_courant","displayName":"Niveau Courant","description":"Vous pouvez communiquer clairement, même sous stress. Cependant, votre discours et votre écriture sont académique et il est évident que ce n’est pas votre langue natale.","cost":"3","category":"langues","parent":"langue_iphrit"},{"id":"1155","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_iphrit_natif","displayName":"Niveau Natif","description":"Vous avez une maîtrise complète de la langue, y compris de ses figures de style. Vous pouvez penser dans cette langue.","cost":"4","category":"langues","parent":"langue_iphrit"},{"id":"1156","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_iphrit_ecrit","displayName":"Écrit","description":"À prendre en supplément si vous souhaitez savoir lire et écrire la langue.","cost":"3","category":"langues","parent":"langue_iphrit"},{"id":"1157","advantageType":"ADVANTAGE","type":"SELECT","name":"langue_tribale","displayName":"Langue Tribale - Réservé staff","description":"Langue réservée aux personnages staff","cost":null,"category":"langues","parent":null},{"id":"1158","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_tribale_basique","displayName":"Niveau Basique","description":"Uniquement attribué par un membre du staff","cost":"2","category":"langues","parent":"langue_tribale"},{"id":"1159","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_tribale_courant","displayName":"Niveau Courant","description":"Uniquement attribué par un membre du staff","cost":"3","category":"langues","parent":"langue_tribale"},{"id":"1160","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_tribale_natif","displayName":"Niveau Natif - Interdit","description":"Réservé aux personnages staff","cost":"0","category":"langues","parent":"langue_tribale"},{"id":"1161","advantageType":"ADVANTAGE","type":"OPTION","name":"langue_tribale_ecrit","displayName":"Écrit","description":"Uniquement attribué par un membre du staff","cost":"3","category":"langues","parent":"langue_tribale"},{"id":"1162","advantageType":"ADVANTAGE","type":"BOOL","name":"langue_mj","displayName":"Toutes les langues - Réservé au MJs","description":"Permet de comprendre et parler toutes les langues. Réservé aux MJs.","cost":"0","category":"langues","parent":null},{"id":"1163","advantageType":"ADVANTAGE","type":"BOOL","name":"resistance_au_froid_surnaturelle","displayName":"Résistance au froid surnaturelle","description":"(Réservée aux shéons) Offre une résistance aux grands froids.","cost":"10","category":"avantages_physiques_surnaturels","parent":null},{"id":"1164","advantageType":"ADVANTAGE","type":"BOOL","name":"vitesse_animale","displayName":"Vitesse animale","description":"(Réservée aux shéons) Offre une vitesse de course équivalente à un animal sauvage quadrupède.","cost":"10","category":"avantages_physiques_surnaturels","parent":null},{"id":"1165","advantageType":"DISADVANTAGE","type":"BOOL","name":"frenesie_meurtriere","displayName":"Frénésie meurtrière","description":"(Réservée aux shéons)Rend le personnage complètement incontrôlable lors qu’actif. ","cost":"15","category":"desavantages_comportementaux","parent":null},{"id":"1166","advantageType":"DISADVANTAGE","type":"BOOL","name":"nanisme","displayName":"Nanisme","description":"Ralentissement de la croissance, rendant un individu grandement plus petit que la moyenne de sa race.","cost":"-20","category":"desavantages_physiques_naturels","parent":null},{"id":"1167","advantageType":"DISADVANTAGE","type":"BOOL","name":"maladie_grave","displayName":"Maladie grave","description":"Le personnage est atteint d'une maladie très handicapante / le vouant à mourir à moyen terme.","cost":"-10","category":"desavantages_physiques_naturels","parent":null},{"id":"1168","advantageType":"ADVANTAGE","type":"BOOL","name":"erudisme","displayName":"(Réservé au staff) Érudisme","description":"Regroupe toutes les sciences liées à l'Histoire, la littérature, l'héraldique et l'astronomie. A utiliser en accord avec le background du personnage.","cost":"15","category":"avantages_sociaux","parent":null},{"id":"1169","advantageType":"DISADVANTAGE","type":"BOOL","name":"envieux","displayName":"Envieux","description":"Envie les possessions et le statut des autres personnes.","cost":"-5","category":"desavantages_comportementaux","parent":null},{"id":"1170","advantageType":"ADVANTAGE","type":"BOOL","name":"entrainement_soldat","displayName":"(Réservé au staff)Entraînement de soldat","description":"Principes de base du soldat : hiérarchie militaire, entretien des armes, formations...","cost":"5","category":"avantages_sociaux","parent":null},{"id":"1171","advantageType":"ADVANTAGE","type":"BOOL","name":"traque","displayName":"(Réservé au staff) Traque","description":"Traquer et suivre une cible animale ou humaine, dans la nature ou dans une ville.","cost":"7","category":"avantages_de_perception","parent":null},{"id":"1172","advantageType":"ADVANTAGE","type":"BOOL","name":"survie_en_exterieur","displayName":"(Réservée au staff) Survie en extérieur","description":"Connaître les rudiments de la survie dans la nature : allumer un feu, se repérer grâce aux étoiles...","cost":"5","category":"avantages_sociaux","parent":null},{"id":"1173","advantageType":"ADVANTAGE","type":"BOOL","name":"sceau_geroun","displayName":"Sceau géroun","description":"(Réservé aux gérouns) Voir fiche wikipédia pour une description précise !","cost":"10","category":"avantages_physiques_surnaturels","parent":null}],"advantagesCategories":[{"id":"1","name":"langues","displayName":"Langues"},{"id":"2","name":"avantages_physiques_naturels","displayName":"Avantages physiques naturels"},{"id":"3","name":"avantages_physiques_surnaturels","displayName":"Avantages physiques surnaturels"},{"id":"4","name":"avantages_de_perception","displayName":"Avantages de perception"},{"id":"5","name":"avantages_sociaux","displayName":"Avantages sociaux"},{"id":"6","name":"desavantages_physiques_naturels","displayName":"Désavantages physiques naturels"},{"id":"7","name":"desavantages_physiques_surnature","displayName":"Désavantages physiques surnaturels"},{"id":"8","name":"desavantages_de_perception","displayName":"Désavantages de perception"},{"id":"9","name":"desavantages_mentaux","displayName":"Désavantages mentaux"},{"id":"10","name":"phobies","displayName":"Phobies"},{"id":"11","name":"desavantages_comportementaux","displayName":"Désavantages comportementaux"},{"id":"12","name":"desavantages_sociaux","displayName":"Désavantages sociaux"}],"wealthes":[{"id":"1","name":"depouille","displayName":"Dépouillé","description":"Points d'équipement : 0.\nVous n’aviez pas de travail, pas de revenu, pas d’argent et aucune propriété autre que les vêtements que vous portez.\nObligatoire pour votre premier personnage sur le serveur.","cost":"-25","default":"1"},{"id":"2","name":"pauvre","displayName":"Pauvre","description":"Points d'équipement : 1 000.\nVotre richesse initiale est équivalente au cinquième de la richesse moyenne. Certains postes vous étaient inaccessibles et aucun travail ne vous payait décemment.","cost":"-15","default":"0"},{"id":"3","name":"en_difficulte","displayName":"En difficulté","description":"Points d'équipement : 2 500.\nVotre richesse initiale est la moitié de la richesse moyenne. Vous pouviez accéder à n’importe quel travail mais vous ne gagniez pas beaucoup.","cost":"-10","default":"0"},{"id":"4","name":"moyen","displayName":"Moyen","description":"Points d'équipement : 5 000.\nVous avez un train de vie normal et tous les postes vous étaient accessibles. Vous pouviez garder votre place dans la société sans trop de doutes.","cost":"0","default":"0"},{"id":"5","name":"aise","displayName":"Aisé","description":"Points d'équipement : 10 000.\nVous travailliez pour un foyer, mais votre train de vie était meilleur que la moyenne. Vous avez une richesse initiale qui est le double de la richesse moyenne.","cost":"10","default":"0"},{"id":"6","name":"riche","displayName":"Riche - Interdit","description":"Points d'équipement : 25 000.\nVotre richesse est cinq fois supérieure à la normale, et il en allait de même de votre train de vie.","cost":"20","default":"0"}],"ethnies":[{"id":"1","name":"humain","displayName":"Humain","positivePoints":"0","negativePoints":"0","default":"1"},{"id":"3","name":"elfe","displayName":"Elfe","positivePoints":"18","negativePoints":"18","default":"0"},{"id":"4","name":"saeji","displayName":"Saeji","positivePoints":"40","negativePoints":"40","default":"0"},{"id":"10","name":"morphis","displayName":"Morphis","positivePoints":"50","negativePoints":"50","default":"0"},{"id":"11","name":"geroun","displayName":"Géroun","positivePoints":"53","negativePoints":"50","default":"0"},{"id":"31","name":"sheon","displayName":"Shéon - Fiche humaine","positivePoints":"50","negativePoints":"70","default":"0"},{"id":"32","name":"sheon_animal","displayName":"Shéon - Fiche animale","positivePoints":"70","negativePoints":"50","default":"0"},{"id":"40","name":"adamien_djak","displayName":"Adamien - Djak","positivePoints":"20","negativePoints":"20","default":"0"},{"id":"41","name":"adamien_boz_naz_kaj_ydr","displayName":"Adamien - Bozieu, Nazrate, Kaji, Ydril","positivePoints":"10","negativePoints":"10","default":"0"},{"id":"42","name":"adamien_teirsar","displayName":"Adamien - Teirsar","positivePoints":"55","negativePoints":"55","default":"0"},{"id":"43","name":"adamien_kaol","displayName":"Adamien - Kaol","positivePoints":"35","negativePoints":"35","default":"0"}]};
const data2 = {"name":"Elvànduïl","ethnie":"elfe","appearence":"attractif","wealth":"moyen","exp":"23","manual_exp":"0","advantages":{"avoir_un_dependant_amant_present_sur_le_serveur":"1","cauchemars":"1","concentration_accrue":"1","curieux":"1","depression_chronique":"1","empathie_animale":"1","faible_image_de_soi":"1","insomniaque":"1","langue_commune_ecrit":"1","langue_commune_natif":"1","langue_gylmaureen_ecrit":"1","langue_gylmaureen_natif":"1","longevite_accrue":"1","mort":"1","ouie_accentuee":"2","pacifiste_ne_peut_pas_blesser_d_innocent":"1","secret_embarras":"1","sensibilite_accrue_a_la_magie":"1","sensible":"1","sommeil_leger":"1","souplesse":"1","timide":"1","tres_bonne_memoire":"1","vision_dans_la_nuit":"1","vue_accentuee":"1"},"skills":{"arc":"1","artisan_du_bois":"0","camouflage":"1","chasse":"1","connaissance_de_vays":"0","course":"0","dague":"-1","dessin":"-2","discretion":"0","ebenisterie":"0","escalade":"0","lancer":"-1","natation":"1","naturaliste":"0","premiers_secours":"0","saut":"0","survie_en_exterieur":"0","traque":"1"},"attributes":{"dex":"14","end":"12","for":"10","int":"12","per":"12"}};

start(data, data2);

function start(data, data2) {
	data.appearences.forEach( (appearence) => {
		const choice = {
			name: appearence.name,
			cost: parseInt(appearence.cost),
			displayName: appearence.displayName,
			description: appearence.description
		}
		appearenceObject.addChoice({choice});
		if (!data2 || !data2.appearence) {
			if (appearence.default === '1') {
				appearenceObject.select({choice});
			}
		} else {
			if (appearence.name === data2.appearence) {
				appearenceObject.select({choice});
			}
		}
	});

	data.wealthes.forEach( (wealth) => {
		const choice = {
			name: wealth.name,
			cost: parseInt(wealth.cost),
			displayName: wealth.displayName,
			description: wealth.description
		}
		wealthObject.addChoice({choice});

		if (!data2 || !data2.wealth) {
			if (wealth.default === '1') {
				wealthObject.select({choice});
			}
		} else {
			if (wealth.name === data2.wealth) {
				wealthObject.select({choice});
			}
		}
	});

	data.attributs.forEach( (attribute) => {
		attribute.cost =  parseInt(attribute.costPerLevel);
		attribute = addAttribute(attribute);

		if (!data2 || !data2.attributes[attribute.name]) {
			attribute.setValue(10);
		} else {
			const value = parseInt(data2.attributes[attribute.name]);
			attribute.setValue(value);
		}
	});

	let exp = 0;
	if (data2) {
		exp = parseInt(data2.exp);
	}
	const autoExp = addExperience({value: exp, name: "exp_auto", displayName: "Exp. ancienneté", description: "Expérience gagnée grâce à l'ancienneté de votre personnage."});

	let exp2 = 0;
	if (data2) {
		exp2 = parseInt(data2.manual_exp);
	}
	const manualExp = addExperience({value: exp2, name: "exp_manual", displayName: "Exp. récompense", description: "Expérience offerte grâce à la participation à des events, etc."});

	data.skillsCategories.forEach( (category) => {
		skillCategories[category.name] = {
			title: category.displayName,
			skills: {}
		};
	});

	data.skills.forEach( (skill) => {
		skill.difficulty = parseInt(skill.difficulty);
		skill.baseAttribute = attributes[skill.baseAttribute];
		const skillObj = addSkill(skill);
		setSkillCat({skill: skill.name, cat: skill.category});

		if (data2 && data2.skills[skill.name]) {
			const bonus = parseInt(data2.skills[skill.name]);
			skillObj.setBonus(bonus, true)
		}
	});

	data.advantagesCategories.forEach( (category) => {
		advantagesCategories[category.name] = {
			title: category.displayName,
			advantages: {}
		};
	});

	data.advantages.forEach( (advantage) => {
		advantage.cost = parseInt(advantage.cost);
		const advantageObj = addAdvantage(advantage);
		setAdvantageCat({advantage: advantage.name, cat: advantage.category});

		if (data2 && data2.advantages[advantage.name]) {
			const value = parseInt(data2.advantages[advantage.name]);
			advantageObj.setValue(value, true)
		}
	});



	data.ethnies.forEach( (ethnie) => {
		const choice = {
			name: ethnie.name,
			displayName: ethnie.displayName,
			positivePoints:  parseInt(ethnie.positivePoints),
			negativePoints:  parseInt(ethnie.negativePoints)
		};

		ethnieObject.addChoice({choice});
		if (!data2) {
			if (ethnie.default === "1") {
				ethnieObject.select({choice});
			}
		} else {
			if (choice.name === data2.ethnie) {
				ethnieObject.select({choice});
			}
		}
	});



	//===========================================================================
	// Beggining DOM manipulations
	//===========================================================================
	const sheetWrapper = $('.char-sheet');

	//---------------------------------------------------------------------------
	// Adding attributes
	//---------------------------------------------------------------------------

	// Wrapper
	const attributesWrapper = $('<div>',{'class': 'row'});

	// Title
	attributesWrapper.append($('<h2>', {'text':'Attributs'}));

	// Looping through all attributes
	Object.keys(attributes).forEach( ( key ) => {
		// Reference to attribute
		const attribute = attributes[key];

		// Label
		const label = $('<label>', {'for': attribute.input.attr('id'), 'class': 'tooltiped', 'data-tooltip': attribute.description, 'data-position': 'top', 'text': attribute.displayName});
		
		// Cost informations
		const costInfo = $('<span>', {'class': 'attr-cost-per-level','text':attribute.cost + ' points / niveau.'});

		// Cost label
		const costLabel = $('<span>', {'class': 'skill-cost', 'html': '(<b>' + attribute.getCost() + 'p.</b>)'});

		// 'More' button
		const more = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '+', 'data-value': '+'});

		// 'Less' button
		const less = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '-', 'data-value': '-'});

		// Change event handler
		const handler = (e) => {
			const button = $(e.target);
			const action = button.attr('data-value');
			let nextValue = 0;
			if (action === '+') {
				nextValue = (attribute.value + 1);
			} else {
				nextValue = (attribute.value - 1);
			}
			attribute.setValue(parseInt(nextValue));
			globalRefresh();
			sheetWrapper.trigger('attributeChange');
			checkUnload = true;
		};

		// Global refresh handler
		const globalRefresh = () => {
			costLabel.html('(<b>' + attribute.getCost() + 'p</b>)');
			updatePoints();
			checkUnload = true;
		};

		// Adding listeners
		more.add(less).on('click', handler);
		sheetWrapper.on('globalRefresh', globalRefresh);

		// Wrappers
		const partOne = $('<div>',{'class':'char-one'});
		const partTwo = $('<div>',{'class':'char-two'});

		// Appending different parts
		partOne.append(label, costInfo, costLabel);
		partTwo.append(attribute.input, less, more);

		// Apending wrappers to attributes's wrapper
		$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(attributesWrapper);
	});
	attributesWrapper.appendTo(sheetWrapper);

	//---------------------------------------------------------------------------
	// Adding experience
	//---------------------------------------------------------------------------

	Object.keys(experiences).forEach( ( key ) => {
		// Reference to attribute
		const experience = experiences[key];

		// Label
		const label = $('<label>', {'for': experience.input.attr('id'), 'class': 'tooltiped', 'data-tooltip': experience.description, 'data-position': 'top', 'text': experience.displayName});
		
		// Cost informations
		const costInfo = $('<span>', {'class': 'attr-cost-per-level','html':'&nbsp;'});

		// Cost label
		const costLabel = $('<span>', {'class': 'skill-cost', 'html': '&nbsp;'});

		// 'More' button
		const more = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '+', 'data-value': '+'});

		// 'Less' button
		const less = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '-', 'data-value': '-'});

		// Change event handler
		const handler = (e) => {
			const button = $(e.target);
			const action = button.attr('data-value');
			let nextValue = 0;
			if (action === '+') {
				nextValue = (experience.value + 1);
			} else {
				nextValue = (experience.value - 1);
			}
			experience.setValue(parseInt(nextValue));
			globalRefresh();
			sheetWrapper.trigger('experienceChange');
			checkUnload = true;
		};

		// Global refresh handler
		const globalRefresh = () => {
			updatePoints();
			checkUnload = true;
		};

		// Adding listeners
		more.add(less).on('click', handler);
		sheetWrapper.on('globalRefresh', globalRefresh);

		// Wrappers
		const partOne = $('<div>',{'class':'char-one'});
		const partTwo = $('<div>',{'class':'char-two'});

		// Appending different parts
		partOne.append(label, costInfo, costLabel);
		partTwo.append(experience.input);

		if ($('meta[name="moderator"]').attr('content') === "true") {
			partTwo.append(less, more);
		}

		// Apending wrappers to attributes's wrapper
		$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(attributesWrapper);
	});

	//---------------------------------------------------------------------------
	// Adding ethnie
	//---------------------------------------------------------------------------

	// Wrapper
	const ethnieWrapper = $('<div>',{'class': 'input-field'});

	// Title
	ethnieWrapper.append($('<h2>', {'text':'Ethnie'}));

	// Event handler
	const ethnieHandler = (e) => {
		const selected = ethnieObject.choices[ethnieObject.input.val()];
		ethnieObject.select({choice: selected, updateSelect: false});
		updatePoints();
		sheetWrapper.trigger('ethnieChange');
		checkUnload = true;
	};
	ethnieObject.input.on('change', ethnieHandler);
	ethnieWrapper.append(ethnieObject.input, '<hr>').appendTo(sheetWrapper);

	ethnieObject.input.formSelect();

	//---------------------------------------------------------------------------
	// Adding appearence
	//---------------------------------------------------------------------------

	// Wrapper
	const appearenceWrapper = $('<div>',{'class': 'input-field'});

	// Title
	appearenceWrapper.append($('<h2>', {'text':'Apparence'}));

	// Descriptpion
	const appearenceDesc = $('<p>', {'html': appearenceObject.selected.description + ' (<b>' + appearenceObject.selected.cost + 'p.</b>)'});

	// Event handler
	const appearenceHandler = (e) => {
		const selected = appearenceObject.choices[appearenceObject.input.val()];
		appearenceObject.select({choice: selected, updateSelect: false});
		appearenceDesc.html(selected.description + ' (<b>' + selected.cost + 'p.</b>)');
		updatePoints();
		sheetWrapper.trigger('appearenceChange');
		checkUnload = true;
	};
	appearenceObject.input.on('change', appearenceHandler);
	appearenceWrapper.append(appearenceObject.input, appearenceDesc).appendTo(sheetWrapper);

	appearenceObject.input.formSelect();

	//---------------------------------------------------------------------------
	// Adding wealth
	//---------------------------------------------------------------------------

	// Wrapper
	const wealthWrapper = $('<div>',{'class': 'input-field'});

	// Title
	wealthWrapper.append($('<h2>', {'text':'Richesse'}));

	// Descriptpion
	const wealthDesc = $('<p>', {'html': wealthObject.selected.description + ' (<b>' + wealthObject.selected.cost + 'p.</b>)'});

	// Event handler
	const wealthHandler = (e) => {
		const selected = wealthObject.choices[wealthObject.input.val()];
		wealthObject.select({choice: selected, updateSelect: false});
		wealthDesc.html(selected.description + ' (<b>' + selected.cost + 'p.</b>)');
		updatePoints();
		sheetWrapper.trigger('wealthChange');
		checkUnload = true;
	};
	wealthObject.input.on('change', wealthHandler);
	wealthWrapper.append(wealthObject.input, wealthDesc).appendTo(sheetWrapper);

	wealthObject.input.formSelect();

	//---------------------------------------------------------------------------
	// Adding skills
	//---------------------------------------------------------------------------

	const skillsWrapper = $('<div>');
	skillsWrapper.append($('<h2>', {'text': 'Compétences'}));
	const skillsList = $('<ul>', {'class': 'collapsible'});
	Object.keys(skillCategories).forEach( (index) => {
		const category = skillCategories[index];

		const categoryWrapper = $('<li>');
		const categoryHeader = $('<div>', {'class': 'collapsible-header'});
		const categoryCost = $('<span>', {'html': '(<b>0p.</b>)'});
		categoryHeader.append($('<h3>', {'text': category.title}).append(categoryCost));
		const categoryBody = $('<div>', {'class': 'collapsible-body'});

		Object.keys(category.skills).forEach( (index) => {
			const skill = category.skills[index];

			const label = $('<label>', {'for': skill.input.attr('id'), 'text': skill.displayName});
			if (skill.description != '') {
				label.attr({'class': 'tooltiped', 'data-tooltip': skill.description, 'data-position': 'top'});
			}

			const attribute = $('<span>', {'class': 'skill-attribute', 'text': skill.baseAttribute.name});

			const difficulties = {0: 'Facile', 1:'Moyen', 2:'Difficile', 3:'T.Difficile'};
			const difficultyLabel = $('<span>', {'class': 'skill-difficulty', 'text': difficulties[skill.difficulty]});

			const cost = $('<span>', {'html': '(<b>'+skill.getCost() + 'p.</b>)'});

			// 'More' button
			const more = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '+', 'data-value': '+'});

			// 'Less' button
			const less = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '-', 'data-value': '-'});

			const handler = (e) => {
				const button = $(e.target);
				const action = button.attr('data-value');
				checkUnload = true;
				if (action === '+') {
					skill.addBonus(true);
				} else {
					skill.removeBonus(true);
				}
				cost.html('(<b>'+skill.getCost() + 'p.</b>)');
				sheetWrapper.trigger('skillChange');
				updatePoints();
			}

			const refresh = (e) => {
				if (skill.calcValue() === 0)
					skill.input.val('-');
				else
					skill.input.val(skill.calcValue());
				cost.html('(<b>'+skill.getCost() + 'p.</b>)');
			}

			// Adding listeners
			more.add(less).on('click', handler);
			sheetWrapper.on('globalRefresh', refresh);
			sheetWrapper.on('attributeChange', refresh);

			// Wrappers
			const partOne = $('<div>',{'class':'char-one'}).append(label, attribute, difficultyLabel, cost);
			const partTwo = $('<div>',{'class':'char-two'}).append(skill.input, less, more);

			$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(categoryBody);
		});

		sheetWrapper.on('skillChange', () => {
			const cost = Object.keys(category.skills).reduce( (acc, index) => {
				const skill = category.skills[index];
				return acc += skill.getCost();
			}, 0);
			categoryCost.html('(<b>'+cost+'p.</b>)')
		});

		categoryWrapper.append(categoryHeader,categoryBody);
		categoryWrapper.appendTo(skillsList);
	});
	skillsWrapper.append(skillsList).appendTo(sheetWrapper);
	skillsList.collapsible({ accordion: false });

	//---------------------------------------------------------------------------
	// Adding advantages
	//---------------------------------------------------------------------------

	const advantagesWrapper = $('<div>');
	advantagesWrapper.append($('<h2>', {'text': 'Avantages et désavantages'}));
	const advantagesList = $('<ul>', {'class': 'collapsible'});
	Object.keys(advantagesCategories).forEach( (index) => {
		const category = advantagesCategories[index];

		const categoryWrapper = $('<li>');
		const categoryHeader = $('<div>', {'class': 'collapsible-header'});
		const categoryCost = $('<span>', {'html': '(<b>0p.</b>)'});
		categoryHeader.append($('<h3>', {'text': category.title}).append(categoryCost));
		const categoryBody = $('<div>', {'class': 'collapsible-body'});

		Object.keys(category.advantages).forEach( (index) => {
			const advantage = category.advantages[index];


			if ( advantage.type === "BOOL" ) {
				// Label
				const label = $('<label>', {'for': advantage.input.attr('id'), 'text': advantage.displayName});
				if (advantage.description != '') {
					label.attr({'class': 'tooltiped', 'data-tooltip': advantage.description, 'data-position': 'top'});
				}

				// Cost informations
				const cost = $('<span>', {'html': '(<b>'+advantage.cost + 'p.</b>)'});

				// Listener handler
				const handler = (e) => {
					checkUnload = true;
					advantage.setValue(advantage.input.is(':checked') ? 1 : 0, false);
					sheetWrapper.trigger('advantageChange');
					updatePoints();
				}

				// Setting listener
				advantage.input.on('change', handler);
			
				const checkboxHolder = $('<span>', {'class': 'checkbox'});
				checkboxHolder.on('click', () => {
					advantage.input.prop('checked', !advantage.input.prop('checked'));
					handler();
				});

				const partOne = $('<div>',{'class':'char-one-adv'}).append(label, cost);
				const partTwo = $('<div>',{'class':'char-two-adv'}).append(advantage.input, checkboxHolder);

				$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(categoryBody);

			} else if ( advantage.type === "LEVEL" ) {
				// Label
				const label = $('<label>', {'for': advantage.input.attr('id'), 'text': advantage.displayName});
				if (advantage.description != '') {
					label.attr({'class': 'tooltiped', 'data-tooltip': advantage.description, 'data-position': 'top'});
				}

				// Cost informations
				const costInfo = $('<span>', {'class': 'attr-cost-per-level','text':advantage.cost + ' points / niveau.'});

				// Cost label
				const costLabel = $('<span>', {'class': 'skill-cost', 'html': '(<b>' + advantage.getCost() + 'p.</b>)'});

				// 'More' button
				const more = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '+', 'data-value': '+'});

				// 'Less' button
				const less = $('<a>', {'href': 'javascript:void(0)', 'class': 'btn waves-effect waves-light small-button', 'text': '-', 'data-value': '-'});

				const handler = (e) => {
					checkUnload = true;
					const button = $(e.target);
					const action = button.attr('data-value');
					if (action === '+') {
						advantage.setValue(advantage.value + 1, true)
					} else {
						advantage.setValue(advantage.value - 1, true);
					}
					costLabel.html('(<b>'+advantage.getCost() + 'p.</b>)');
					sheetWrapper.trigger('advantageChange');
					updatePoints();
				}
				// Adding listeners
				more.add(less).on('click', handler);

				// Wrappers
				const partOne = $('<div>',{'class':'char-one'}).append(label, costInfo, costLabel);
				const partTwo = $('<div>',{'class':'char-two'}).append(advantage.input, less, more);

				$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(categoryBody);
			} else if ( advantage.type === "SELECT" ) {
				// Label
				const label = $('<label>', {'text': advantage.displayName});

				if (advantage.description !== null) {
					label.attr({'class': 'tooltiped', 'data-tooltip': advantage.description, 'data-position': 'top'});
				}

				// Wrappers
				const partOne = $('<div>',{'class':'char-one-adv'}).append(label);
				const partTwo = $('<div>',{'class':'char-two-adv'}).append();

				$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo, advantage.wrapper).appendTo(categoryBody);
			} else if ( advantage.type === "OPTION" ) {
				// Label
				const label = $('<label>', {'for': advantage.input.attr('id'), 'text': advantage.displayName});
				if (advantage.description != '') {
					label.attr({'class': 'tooltiped', 'data-tooltip': advantage.description, 'data-position': 'top'});
				}

				// Cost informations
				const cost = $('<span>', {'html': '(<b>'+advantage.cost + 'p.</b>)'});

				// Listener handler
				const handler = (e) => {
					checkUnload = true;
					advantage.setValue(advantage.input.is(':checked') ? 1 : 0, false);
					sheetWrapper.trigger('advantageChange');
					updatePoints();
				}

				// Setting listener
				advantage.input.on('change', handler);
			
				const checkboxHolder = $('<span>', {'class': 'checkbox'});
				checkboxHolder.on('click', () => {
					advantage.input.prop('checked', !advantage.input.prop('checked'));
					handler();
				});

				const partOne = $('<div>',{'class':'char-one-adv'}).append(label, cost);
				const partTwo = $('<div>',{'class':'char-two-adv'}).append(advantage.input, checkboxHolder);
				$('<div>', {'class': 'char-input-wrapper row'}).append(partOne, partTwo).appendTo(advantages[advantage.parent].wrapper);
			}
			
		});

		sheetWrapper.on('advantageChange', () => {
			const cost = Object.keys(category.advantages).reduce( (acc, index) => {
				const advantage = category.advantages[index];
				return acc += advantage.getCost();
			}, 0);
			categoryCost.html('(<b>'+cost+'p.</b>)')
		});

		categoryWrapper.append(categoryHeader,categoryBody);
		categoryWrapper.appendTo(advantagesList);
	});
	advantagesWrapper.append(advantagesList).appendTo(sheetWrapper);
	advantagesList.collapsible({accordion: false});

	$('.tooltiped').tooltip();
	$('.collapsible').collapsible();

	const calcGlobalCost = () => {
		let spentPoints = 0;
		let positivePoints = 0;
		let negativePoints = 0;
		let negativeOverflow = 0;

		Object.keys(attributes).forEach( ( key ) => {
			const attribute = attributes[key];

			if (attribute.getCost() > 0) {
				positivePoints += attribute.getCost();
			} else {
				negativePoints += (attribute.getCost() * -1);
			}
		});

		if (appearenceObject.selected.cost > 0) {
			positivePoints += appearenceObject.selected.cost;
		} else {
			negativePoints += (appearenceObject.selected.cost * -1);
		}

		if (wealthObject.selected.cost > 0) {
			positivePoints += wealthObject.selected.cost;
		} else {
			negativePoints += (wealthObject.selected.cost * -1);
		}

		Object.keys(skills).forEach( ( key ) => {
			const skill = skills[key];

			if (skill.getCost() > 0) {
				positivePoints += skill.getCost();
			} else {
				negativePoints += (skill.getCost() * -1);
			}
		});

		Object.keys(advantages).forEach( ( key ) => {
			const advantage = advantages[key];

			if (advantage.getCost() > 0) {
				positivePoints += advantage.getCost();
			} else {
				negativePoints += (advantage.getCost() * -1);
			}
		});

		positivePoints -= ethnieObject.selected.positivePoints;
		negativePoints -= ethnieObject.selected.negativePoints;

		if (negativePoints > 70) negativeOverflow = negativePoints - 70;

		negativePoints = Math.min(70, negativePoints);

		spentPoints = positivePoints - Math.max(negativePoints, 0);

		return {spentPoints, positivePoints, negativePoints, negativeOverflow};
	};

	const pointsList = $('<ul>');
	const positivePoints = $('<li>');
	const negativePoints = $('<li>');
	const totalPoints = $('<li>');
	pointsList.append(positivePoints, negativePoints, totalPoints);

	const updatePoints = () => {
		const result = calcGlobalCost();

		positivePoints.html('Points positifs : ' + result.positivePoints);
		negativePoints.html('Points négatifs : ' + result.negativePoints);

		if (result.negativeOverflow > 0) {
			negativePoints.html(negativePoints.html() + `  (+${result.negativeOverflow})`);
		}

		totalPoints.html('Points utilisés : ' + result.spentPoints);

		const exp = Object.keys(experiences).reduce((acc, key) => acc+experiences[key].value ,0);

		if (result.spentPoints > 140 + exp) {
			totalPoints.css('color', 'red');
		} else {
			totalPoints.css('color', 'inherit');
		}
	};


	$('#points').append(pointsList);
	updatePoints();
	$('#choosable-chars').formSelect();

	$('#choosable-chars').on('change', () => {
		const url = location.href.split('?')[0] + '?idChar=' + $('#choosable-chars').val();
		location.href = url;
	});

	$('#name').on('change', () => {
		checkUnload = true;
		sheetWrapper.trigger('nameChange');
	});

	if ($(window).width() > 1022) {
		$('#points').pushpin({ top: $('#sidebar-charSheet').offset().top, offset: 30});
	}

	const action = $('meta[name="sheet-action"]').attr('content');
	$('.save-char').on('click', () => {

		const name = $('#name').val();

		const attrs = Object.keys(attributes).reduce( (ret, key) => {
			ret[attributes[key].name] = attributes[key].input.val();
			return ret;
		}, {});

		const sks = Object.keys(skills).reduce( (ret, key) => {
			if (skills[key].bonus !== null) {
				ret[skills[key].name] = skills[key].bonus;
			}
			return ret;
		}, {});

		const advs = Object.keys(advantages).reduce( (ret, key) => {
			const advantage = advantages[key];
			if (advantage.type === "BOOL") {
				if (advantage.input.is(':checked')) {
					ret[advantage.name] = 1;
				}
			} else if (advantage.type === "LEVEL") {
				if (advantage.value) {
					ret[advantage.name] = advantage.value;
				}
			} else if (advantage.type === "OPTION") {
				if (advantage.input.is(':checked')) {
					ret[advantage.name] = 1;
				}
			}
			return ret;
		}, {});

		if (action === 'new') {
			const data = {
				name: name.trim(),
				attributes: attrs,
				skills: sks,
				appearence: appearenceObject.selected.name,
				wealth: wealthObject.selected.name,
				advantages: advs,
				ethnie: ethnieObject.selected.name
			};
			if (name != '') {
				$.post('**NEW CHAR ENDPOINT**', data, (data) => {
					if (data.success === true) {
						const url = location.href.split('?')[0] + '?idChar=' + data.result;
						checkUnload = false;
						location.href = url;
					}
				});
			}
		} else if (action === 'edit') {
			const data = {
				name: name.trim(),
				attributes: attrs,
				skills: sks,
				appearence: appearenceObject.selected.name,
				wealth: wealthObject.selected.name,
				advantages: advs,
				ethnie: ethnieObject.selected.name,
			};
			if (experiences.exp_auto) {
				data.exp = experiences.exp_auto.value;
			}
			if (experiences.exp_auto) {
				data.manual_exp = experiences.exp_manual.value;
			}
			if (name != '') {
				$.post('**EDIT ENDPOINT**', data, (data) => {
					if (data.success === true) {
						toast('Personnage sauvegardé', 5000);
						checkUnload = false;
					}
				});
			}
		}
	});

	$(window).bind('beforeunload', function(){
		if (checkUnload) {
			return 'Veux-tu vraiment quitter cette page ?';
		}
	});

	sheetWrapper.trigger('skillChange');
	sheetWrapper.trigger('advantageChange');
	sheetWrapper.trigger('attributeChange');
	sheetWrapper.trigger('appearenceChange');
	sheetWrapper.trigger('wealthChange');
}

});
