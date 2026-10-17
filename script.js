'use strict';

(() => {
  const phrases = [
    "Ce site est écrit à 12 % par des humains. Le reste, c'est du café.",
    "Fait vérifié : un mardi, c'est juste un lundi qui a pris confiance.",
    "Aujourd'hui, personne n'a rien demandé. Nous publions quand même.",
    "Mon béret a un master en philosophie. Moi, rien du tout.",
    "Info exclusive : le mot « exclusif » est utilisé à titre exclusif.",
    "Savais-tu que les chaussettes orphelines ont leur propre syndicat ?",
    "Ce café s'appelle Peanuts. Je ne sais pas pourquoi. Ne me regarde pas.",
    "Notre comité de rédaction a décidé de ne rien décider.",
    "Après une enquête approfondie, nous confirmons que le café est liquide.",
    "Breaking news : cette phrase vient d'interrompre ta lecture.",
    "Nous avons interrogé trois cacahuètes. Elles ont refusé de répondre.",
    "Peanuts : beaucoup de sérieux pour absolument aucune raison.",
    "La rédaction décline toute responsabilité en cas de sourire.",
    "Notre horoscope annonce une forte probabilité de rien du tout.",
    "Le rédacteur en chef est actuellement en réunion avec sa tasse."
  ];

  const bulle = document.getElementById('bulle');
  const mascotte = document.getElementById('mascot');
  const bouton = document.getElementById('go');

  if (!bulle) return;

  let dernierePhrase = -1;
  let animationEnCours = false;

  function dit() {
    if (animationEnCours) return;

    let index;

    do {
      index = Math.floor(Math.random() * phrases.length);
    } while (phrases.length > 1 && index === dernierePhrase);

    dernierePhrase = index;
    bulle.textContent = phrases[index];

    // Relance l'animation sans dépendre d'une bibliothèque.
    bulle.classList.remove('parle');

    // Forcer le recalcul du style pour redémarrer l'animation.
    void bulle.offsetWidth;

    bulle.classList.add('parle');
    animationEnCours = true;

    window.setTimeout(() => {
      bulle.classList.remove('parle');
      animationEnCours = false;
    }, 320);
  }

  if (mascotte) {
    mascotte.addEventListener('click', dit);
  }

  if (bouton) {
    bouton.addEventListener('click', dit);
  }
})();
