'use strict';

(() => {
  const jokes = [
    "Après une enquête approfondie, nous confirmons que le café est toujours liquide.",
    "Le comité de rédaction a décidé de reporter sa décision de ne rien décider.",
    "Trois cacahuètes ont été interrogées. Elles ont demandé un avocat.",
    "Le sérieux est en pause. Il a laissé un mot, mais personne ne l'a lu.",
    "Notre rédacteur en chef est en réunion avec sa tasse. La réunion se passe bien.",
    "Breaking news : cette phrase vient d'interrompre votre lecture.",
    "Aujourd'hui, nous avons rangé nos idées. Elles se sont toutes cachées ailleurs.",
    "Le mot « exclusif » est utilisé ici de manière absolument exclusive.",
    "Une chaussette a quitté le tiroir. La rédaction suit l'affaire.",
    "Peanuts : beaucoup de sérieux pour absolument aucune raison.",
    "Le café ne résout pas tout. Mais il tient une conférence de presse.",
    "Nous avons demandé l'avis d'une chaise. Elle est restée assise sur la question."
  ];

  const toast = document.getElementById('toast');
  const surpriseButton = document.getElementById('surprise-button');
  const jokeButton = document.getElementById('random-joke');
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  let lastJoke = -1;
  let toastTimer;

  function showJoke() {
    if (!toast) return;
    let index;
    do {
      index = Math.floor(Math.random() * jokes.length);
    } while (jokes.length > 1 && index === lastJoke);
    lastJoke = index;
    toast.textContent = jokes[index];
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 4200);
  }

  surpriseButton?.addEventListener('click', showJoke);
  jokeButton?.addEventListener('click', showJoke);

  menuToggle?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('open') ?? false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  navigation?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', 'Ouvrir le menu');
    });
  });
})();