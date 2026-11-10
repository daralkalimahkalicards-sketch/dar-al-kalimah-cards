/* Dar Al-Kalimah — une seule maison partout (taille et emplacement de la page Modules)
   + indicateur de retournement (2 flèches en cercle) sur toutes les cartes interactives. */
(function () {
  var GOLD = '#C8A462';
  var css =
    '.dak-home{color:' + GOLD + '!important;font-size:1.5rem!important;line-height:1!important;' +
    'background:none!important;border:none!important;box-shadow:none!important;padding:0!important;' +
    'width:auto!important;height:auto!important;min-width:0!important;min-height:0!important;' +
    'border-radius:0!important;filter:none!important;text-decoration:none!important;}' +
    '.dak-home i{font-size:1.5rem!important;color:' + GOLD + '!important;}' +
    '.dak-home svg{width:1.75rem!important;height:1.75rem!important;fill:' + GOLD + '!important;}' +
    '.dak-flip-hint{position:absolute;top:20px;right:20px;font-size:1.2rem;color:#dfc28b;opacity:.6;' +
    'animation:dakPulseHint 2s infinite;z-index:10;pointer-events:none;}' +
    '@keyframes dakPulseHint{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.1);opacity:1}}' +
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
    var pos = getComputedStyle(el).position;
    if (pos === 'absolute' || pos === 'fixed') {
      el.style.setProperty('top', '20px', 'important');
      el.style.setProperty('right', '20px', 'important');
      el.style.setProperty('left', 'auto', 'important');
      el.style.setProperty('bottom', 'auto', 'important');
    }
  }
  function addFlipHints(root) {
    var cards = root.querySelectorAll('.card-container, .card-flip');
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      if (c.querySelector('.fa-rotate, .fa-sync, .fa-arrows-rotate')) continue;
      var faces = c.querySelectorAll(':scope > .face, :scope > .card-face, :scope > .front, :scope > .back');
      for (var j = 0; j < faces.length; j++) {
        var f = faces[j];
        if (getComputedStyle(f).position === 'static') f.style.position = 'relative';
        var ic = document.createElement('i');
        ic.className = 'fa-solid fa-rotate dak-flip-hint';
        ic.setAttribute('aria-hidden', 'true');
        f.appendChild(ic);
      }
    }
  }
  function scan(root) {
    var els = (root.querySelectorAll ? root : document).querySelectorAll('a, button');
    for (var i = 0; i < els.length; i++) if (isHouse(els[i])) fixHouse(els[i]);
    if (root.matches && root.matches('a, button') && isHouse(root)) fixHouse(root);
  }
  function init() {
    scan(document);
    addFlipHints(document);
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++)
        for (var j = 0; j < muts[i].addedNodes.length; j++) {
          var n = muts[i].addedNodes[j];
          if (n.nodeType === 1) scan(n);
        }
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
