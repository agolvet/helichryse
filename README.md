# `helichryse`

# Matériel nécessaire
- 1 ordinateur (macOS ou linux de préférence)
- 1 borne wifi configurée avec le réseau DOTPI
- 1 switch ethernet RJ45 
- 2 câbles ethernet RJ45
- 1 adaptateur RJ45 pour l'ordinateur

- N rapsberry pi 4 équippées de leur carte son hifiberry DAC+ADC pro
- N batteries portables ou alimentation secteur pour les raspberry pi
- N enceintes portables à connecter aux ports RCA de la raspberry pi

# Etape 1 : lancer le réseau wifi
- Brancher la borne wifi au switch ethernet
- Brancher l'ordinateur au switch ethernet avec l'adaptateur
- Dans les paramètres réseau (Paramètres > réseau sur Mac) selectionner l'adaptateur puis configurer l'IPv4 en Manuel avec l'adresse IP 10.10.0.1
  (sur Mac cliquer sur Détails... > TCP/IP)
- Télécharger l'appli "network" à l'adresse suivante : https://forge-2.ircam.fr/ismm/network
- Dézipper le dossier à l'emplacement de votre choix
- Double cliquer sur le fichier "run.command" puis rentrez le mdp de votre ordinateur pour lancer le réseau wifi.

# Etape 2 : lancer les raspberry pi
- Alimenter les raspberry pi et brancher les enceintes

# Etape 3 : lancer le dotpi-manager
Un tutorial est disponible à cette addresse : https://ircam-ismm.github.io/dotpi/using-the-dotpi-manager.html
À l'issue du tutorial, les raspberry pi devraient s'afficher dans l'application (un voyant vert en face de leur nom indique qu'elles sont connectées au réseau local).
Il est possible de tester si les enceintes fonctionnent en lançant un son test avec l'appli

# Etape 4 : lancer helichryse
- Télécharger l'appli helichryse : https://github.com/agolvet/helichryse
- Décompresser l'appli à l'emplacement de votre choix
- Ouvrir un terminal et se rendre dans le dossier helichryse (``cd chemin/vers/le/dossier``)
- Installer les dépendances : ``npm install``
- Lancer le serveur : ``npm run dev``
- Retourner dans le dotpi-manager et dans le champ "remote path" mettre : ``~/apps/helichryse`` et dans le champ /bin/bash mettre ``npm run watch thing``
- Cliquer sur Execute. L'appli devrait se lancer sur les raspberry pi et elles devraient se connecter au serveur.
- Accéder à l'interface de l'application à l'adresse http://127.0.0.1:8000/
