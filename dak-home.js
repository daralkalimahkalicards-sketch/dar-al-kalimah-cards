/* Dar Al-Kalimah — une seule maison partout (taille et emplacement de la page Modules)
   + indicateur de retournement (2 flèches en cercle) sur toutes les cartes interactives. */
(function () {
  var GOLD = '#C8A462';
  var HOUSE_PATH = 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z';
  var css =
    '.dak-home{color:' + GOLD + '!important;font-size:1.5rem!important;line-height:1!important;' +
    'background:none!important;border:none!important;box-shadow:none!important;padding:0!important;' +
    'width:auto!important;height:auto!important;min-width:0!important;min-height:0!important;' +
    'border-radius:0!important;filter:none!important;text-decoration:none!important;}' +
    '.dak-home i{font-size:1.5rem!important;color:' + GOLD + '!important;}' +
    '.dak-home svg{width:27px!important;height:24px!important;margin:0!important;fill:' + GOLD + '!important;}' +
    'html{scrollbar-gutter:stable;}' +
    '.dak-flip-hint{position:absolute;top:20px;right:20px;font-size:1.2rem;color:#dfc28b;opacity:.6;' +
    'animation:dakPulseHint 2s infinite;z-index:10;pointer-events:none;' +
    '-webkit-backface-visibility:hidden;backface-visibility:hidden;}' +
    '@keyframes dakPulseHint{0%,100%{opacity:.45}50%{opacity:1}}' +
    '@media print{.dak-home,.dak-flip-hint{display:none!important}}';
  var st = document.createElement('style');
  st.id = 'dak-home-style';
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function isHouse(el) {
    if (!el || el.classList.contains('dak-home')) return false;
    if ((el.textContent || '').trim() !== '') return false; // liens texte « Accueil » : on ne touche pas
    if (el.querySelector(':scope > .fa-house, :scope > .fa-home')) return true;
    var p = el.querySelector(':scope > svg > path');
    return !!(p && (p.getAttribute('d') || '').indexOf('M12 2.6') === 0);
  }
  function fixHouse(el) {
    el.classList.add('dak-home');
    // même dessin que la maison de la page Modules (Font Awesome « house »)
    var svg = el.querySelector(':scope > svg');
    if (svg) {
      svg.setAttribute('viewBox', '0 0 576 512');
      svg.innerHTML = '<path d="' + HOUSE_PATH + '"/>';
    }
    var pos = getComputedStyle(el).position;
    if (pos === 'absolute' || pos === 'fixed') {
      el.style.setProperty('top', '20px', 'important');
      el.style.setProperty('right', '20px', 'important');
      el.style.setProperty('left', 'auto', 'important');
      el.style.setProperty('bottom', 'auto', 'important');
    }
  }
  var CARD_SEL = '.card-container, .card-flip, .flip-card-lect, .flip-card, .flashcard';
  var FACE_RE = /(^|\s)(face|card-face|front|back|flip-face|card-front|card-back)(\s|$)/;
  function hasIconHint(face) {
    // icône « flèches en cercle » déjà posée en coin (style leçon 2) — pas les textes « Exemples »
    var ics = face.querySelectorAll('i.fa-rotate, i.fa-sync, i.fa-arrows-rotate');
    for (var k = 0; k < ics.length; k++) if (/flip-hint/.test(ics[k].className)) return true;
    return !!face.querySelector(':scope > .dak-flip-hint');
  }
  function addFlipHints() {
    var cards = document.querySelectorAll(CARD_SEL);
    for (var i = 0; i < cards.length; i++) {
      var kids = cards[i].children;
      for (var j = 0; j < kids.length; j++) {
        var f = kids[j];
        if (!FACE_RE.test(f.className) && getComputedStyle(f).backfaceVisibility !== 'hidden') continue;
        if (hasIconHint(f)) continue;
        if (getComputedStyle(f).position === 'static') f.style.position = 'relative';
        var ic = document.createElement('i');
        ic.className = 'fa-solid fa-rotate dak-flip-hint';
        ic.setAttribute('aria-hidden', 'true');
        f.appendChild(ic);
      }
    }
  }
  var hintTimer = null;
  function scheduleHints() { clearTimeout(hintTimer); hintTimer = setTimeout(addFlipHints, 120); }
  function scan(root) {
    var els = (root.querySelectorAll ? root : document).querySelectorAll('a, button');
    for (var i = 0; i < els.length; i++) if (isHouse(els[i])) fixHouse(els[i]);
    if (root.matches && root.matches('a, button') && isHouse(root)) fixHouse(root);
  }
  function init() {
    scan(document);
    addFlipHints();
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++)
        for (var j = 0; j < muts[i].addedNodes.length; j++) {
          var n = muts[i].addedNodes[j];
          if (n.nodeType === 1) scan(n);
        }
      scheduleHints();
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
