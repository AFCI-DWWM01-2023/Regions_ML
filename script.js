const regions = document.querySelectorAll('.region');

// Parcourir chaque région et ajouter des écouteurs d'événements individuels
regions.forEach(function(region) {
  region.addEventListener("click", function(event) {
    const clickedElementId = region.getAttribute('id');
    handleRegionClick(clickedElementId);
  });

  region.addEventListener("mouseover", function() {
    region.style.fill = ' #695958';
  });

  region.addEventListener("mouseout", function() {
    region.style.fill = '';
  });
});

// Fonction de gestion du clic sur une région
function handleRegionClick(regionId) {
  let message = "";

  switch (regionId) {
    case 'R1':
      message += "Guadeloupe<br>";
      message += "• Population - 383 559 hab<br>";
      message += "• Superficie - 1 628,43 km²<br>";
      message += "• Coordonnées - 16° nord, 62° ouest<br>";
      message += "• Départements - 971 ";
      break;
    case 'R2':
      message += "Martinique<br>";
      message += "• Population - 361 225 hab<br>";
      message += "• Superficie - 1 128 km²<br>";
      message += "• Coordonnées - 14° 39′ 00″ nord, 61° 00′ 54″ ouest<br>";
      message += "• Départements - 972";
      break;
    case 'R3':
      message += "Guyane<br>";
      message += "• Population - 285 133 hab<br>";
      message += "• Superficie - 83 846 km²<br>";
      message += "• Coordonnées - 3° 59′ 56″ nord, 53° 00′ 00″ ouest<br>";
      message += "• Départements - 973";
      break;
    case 'R4':
      message += "La Réunion<br>";
      message += "• Population - 863 083 hab<br>";
      message += "• Superficie - 2 512 km²<br>";
      message += "• Coordonnées - 21° 06′ 52″ nord, 55° 31′ 57″ ouest<br>";
      message += "• Départements - 974";
      break;
    case 'R5':
      message += "Mayotte<br>";
      message += "• Population - 310 022 hab<br>";
      message += "• Superficie - 376 km²<br>";
      message += "• Coordonnées - 12° 50′ 35″ nord, 55° 31′ 57″ ouest<br>";
      message += "• Départements - 976";
      break;
    case 'R6':
      message += "Île-de-France<br>";
      message += "• Population - 12 271 794 hab<br>";
      message += "• Superficie - 12 011 km²<br>";
      message += "• Coordonnées - 48° 51′ 08″ nord, 2° 19′ 03″ ouest<br>";
      message += "• Départements - 75 . 77 . 78 . 91 . 92 . 93 . 94 . 95";
      break;
    case 'R7':
      message += "Centre-Val de Loire<br>";
      message += "• Population - 2 574 863 hab<br>";
      message += "• Superficie - 39 151 km²<br>";
      message += "• Coordonnées - 47° 30′ nord, 1° 45′ est<br>";
      message += "• Départements - 18 . 28 . 36 . 37 . 41 . 45 . 24";
      break;
    case 'R8':
      message += "Bourgogne-Franche-Comté<br>";
      message += "• Population - 2 801 695 hab<br>";
      message += "• Superficie - 47 784 km²<br>";
      message += "• Coordonnées - 47° 14′ 04″ nord, 6° 01′ 50″ est<br>";
      message += "• Départements - 21 . 25 . 70 . 39 . 58 . 71 . 90 . 89 . 27";
      break;
    case 'R9':
      message += "Normandie<br>";
      message += "• Population - 3 325 032 hab<br>";
      message += "• Superficie - 	30 100 km²<br>";
      message += "• Coordonnées - 49° nord, 0° ouest<br>";
      message += "• Départements - 14 . 27 . 50 . 61 . 76";
      break;
    case 'R10':
      message += "Hauts-de-France<br>";
      message += "• Population - 5 997 734 hab<br>";
      message += "• Superficie - 31 806 km²<br>";
      message += "• Coordonnées - 49° 55′ 14″ nord, 2° 42′ 11″ est<br>";
      message += "• Départements - 02 . 59 . 60 . 62 . 80";
      break;
    case 'R11':
      message += "Grand-Est<br>";
      message += "• Population - 	5 562 651 hab<br>";
      message += "• Superficie - 57 441 km²<br>";
      message += "• Coordonnées - 48° 35′ 56″ nord, 7° 45′ 36″ est<br>";
      message += "• Départements - 08 . 10 . 51 . 52 . 54 . 55 . 57 . 67 . 68 . 88 ";

      break;
    case 'R12':
      message += "Pays de la Loire<br>";
      message += "• Population - 3 832 120 hab<br>";
      message += "• Superficie - 32 082 km²<br>";
      message += "• Coordonnées - 47° 28′ nord, 0° 50′ est<br>";
      message += "• Départements - 44 . 49 . 53 . 72 . 85 ";
      break;
    case 'R13':
      message += "Bretagne<br>";
      message += "• Population - 4 829 968 hab<br>";
      message += "• Superficie - 34 023  km²<br>";
      message += "• Coordonnées - 48° nord, 3° ouest<br>";
      message += "• Départements - 22 . 29 . 35 . 56";
      break;
    case 'R14':
      message += "Nouvelle-Aquitaine<br>";
      message += "• Population - 6 033 952 hab<br>";
      message += "• Superficie - 84 036 km²<br>";
      message += "• Coordonnées - 44° 50′ 12″ nord, 0° 35′ 20″ ouest<br>";
      message += "• Départements - 16 . 17 . 19 . 23 . 24 . 33 . 40 . 47 . 64 . 79 . 86 . 87.";
      break;
    case 'R15':
      message += "Occitanie<br>";
      message += "• Population - 5 893 hab<br>";
      message += "• Superficie - 72 724 km²<br>";
      message += "• Coordonnées - 43° 38′ 56″ nord, 2° 20′ 37″ est<br>";
      message += "• Départements - 09 . 11 . 12 . 30 . 31 . 32 . 34 . 46 . 48 . 65 . 66 . 81 . 82";
      break;
    case 'R16':
      message += "Auvergne-Rhône-Alpes<br>";
      message += "• Population - 8 078 652 hab<br>";
      message += "• Superficie - 69 711 km²<br>";
      message += "• Coordonnées - 45° 42′ 00″ nord, 4° 48′ 00″ est<br>";
      message += "• Départements - 01 . 03 . 07 . 15 . 26 . 38 . 42 . 43 . 63 . 69 . 73 . 74 ";
      break;
    case 'R17':
      message += "Provence-Alpes-Côte d'Azur<br>";
      message += "• Population - 5 098 666 hab<br>";
      message += "• Superficie - 31 400 km²<br>";
      message += "• Coordonnées - 44° nord, 6° est<br>";
      message += "• Départements - 04 . 05 . 06 . 13 . 83 . 84";
      break;
    case 'R18':
      message += "Corse<br>";
      message += "• Population - 343 701 hab<br>";
      message += "• Superficie - 8 722 km²<br>";
      message += "• Coordonnées - 42° 09′ 00″ nord, 9° 05′ 00″ est<br>";
      message += "• Départements - 2A . 2B";

      break;
    default:
      message = 'Aucune zone sélectionnée';
  }

  showModal(message);
}


// Fonction pour afficher la fenêtre modale avec les informations
function showModal(message) {
  let modalContent = document.getElementById('modal-content');
  // modalContent.innerHTML = '';
  modalContent.innerHTML += "<ul><li>" + message + "</li></ul>";

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}


// Fonction pour masquer la fenêtre modale
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.getElementById('modal-content').innerHTML = "";
}


// Gestionnaire d'événement pour masquer la fenêtre modale lors du clic sur le bouton de fermeture
const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', hideModal);











