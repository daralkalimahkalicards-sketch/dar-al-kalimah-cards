/* ==========================================================================
   Dar Al-Kalimah — Composant audio unique (DAKAudio)
   Chantier n°1 — système audio unifié pour toutes les Leçons et tous les Quiz

   Un seul point d'entrée pour lire un audio pédagogique avec :
   - un seul canal actif à la fois (démarrer un audio arrête le précédent) ;
   - un état visuel "lecture" (classe .dak-playing) posé sur le bouton
     cliqué, retiré automatiquement à la fin, à l'interruption ou à l'échec ;
   - un toast visible si le fichier est absent ou bloqué par le navigateur ;
   - un déblocage iOS/Safari au premier geste (unlock()) ;
   - un canal séparé pour les effets ponctuels (ex. mabruk.mp3) qui ne sont
     pas associés à un bouton micro et ne doivent pas couper l'audio en cours.

   Chargement : <script src="audio-controller.js"></script>
   (fichier plat à la racine, même convention que database.js/tracker.js)

   Usage dans chaque leçon/quiz :
     DAKAudio.play(cheminAudio, boutonElement);   // audio pédagogique + bouton
     DAKAudio.playEffect("mabruk.mp3");           // effet, sans bouton
     DAKAudio.stopAll();                          // ex. sur visibilitychange
     await DAKAudio.unlock();                     // au premier clic utilisateur (démarrage quiz)
   ========================================================================== */

const DAKAudio = (() => {
  "use strict";

  const SILENT_WAV = "data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTAAAAA=";

  const player = new Audio();
  const effectPlayer = new Audio();
  player.preload = "none"; effectPlayer.preload = "none";
  player.playsInline = true; effectPlayer.playsInline = true;
  player.volume = 1; effectPlayer.volume = 1;

  let isUnlocked = false;
  let currentButton = null;
  let toastTimeout = null;

  function getToast() {
    let t = document.getElementById("dak-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "dak-toast";
      t.className = "dak-toast";
      t.innerHTML = 'Audio non disponible pour le moment.<br><span style="font-size:0.85em;opacity:0.9;">Audio no disponible por el momento.</span>';
      document.body.appendChild(t);
    }
    return t;
  }

  function showToast() {
    const t = getToast();
    clearTimeout(toastTimeout);
    t.classList.add("show");
    toastTimeout = setTimeout(() => t.classList.remove("show"), 2500);
  }

  function setButtonState(btn) {
    if (currentButton && currentButton !== btn) {
      currentButton.classList.remove("dak-playing");
    }
    currentButton = btn || null;
    if (currentButton) currentButton.classList.add("dak-playing");
  }

  function releaseButton() {
    if (currentButton) currentButton.classList.remove("dak-playing");
    currentButton = null;
  }

  async function unlock() {
    if (isUnlocked) return true;
    try {
      player.pause(); effectPlayer.pause();
      player.currentTime = 0; effectPlayer.currentTime = 0;
      player.src = SILENT_WAV; effectPlayer.src = SILENT_WAV;
      player.muted = true; effectPlayer.muted = true;
      await player.play().catch(() => {});
      player.pause(); player.currentTime = 0;
      await effectPlayer.play().catch(() => {});
      effectPlayer.pause(); effectPlayer.currentTime = 0;
      player.muted = false; effectPlayer.muted = false;
      player.removeAttribute("src"); effectPlayer.removeAttribute("src");
      player.load(); effectPlayer.load();
      isUnlocked = true;
      return true;
    } catch (_) {
      player.muted = false; effectPlayer.muted = false;
      return false;
    }
  }

  // Fin de lecture naturelle : relâche l'état visuel du bouton.
  // Les interruptions (nouveau clic, stopAll()) sont gérées explicitement
  // par play()/stopAll() elles-mêmes, pas par cet écouteur.
  player.addEventListener("ended", releaseButton);

  function play(src, button) {
    // Un clic coupe toujours ce qui est en cours, y compris le même bouton
    // recliqué : on repart de zéro (comportement identique partout).
    player.pause();
    player.currentTime = 0;

    if (!src) {
      releaseButton();
      showToast();
      return;
    }

    setButtonState(button);
    player.src = src;
    player.load();
    const p = player.play();
    if (p !== undefined) {
      p.catch(err => {
        console.error("Audio error:", err);
        releaseButton();
        showToast();
      });
    }
  }

  function playEffect(src) {
    if (!src) return;
    try {
      effectPlayer.pause();
      effectPlayer.currentTime = 0;
      effectPlayer.src = src;
      effectPlayer.load();
      const p = effectPlayer.play();
      if (p !== undefined) p.catch(() => {});
    } catch (_) {}
  }

  function stopAll() {
    player.pause(); player.currentTime = 0;
    effectPlayer.pause(); effectPlayer.currentTime = 0;
    releaseButton();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAll();
  });

  return { play, playEffect, stopAll, unlock, showToast };
})();
