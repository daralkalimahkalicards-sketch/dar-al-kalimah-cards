const CACHE_NAME = 'dar-al-kalimah-v5';
const RUNTIME_CACHE = 'dar-al-kalimah-runtime';

// Precache uniquement le strict minimum pour un premier chargement hors-ligne.
// Le contenu applicatif (HTML/JS/JSON) est toujours resservi depuis le reseau
// en priorite (voir strategie fetch plus bas) : ce precache n'est qu'un filet
// de secours si l'appareil est hors-ligne.
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/auth.html',
  '/modules.html',
  '/manifest.json',
  '/database.js',
  '/tracker.js',
  '/tracker-lecons.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-192-maskable.png',
  '/icons/icon-512-maskable.png'
];

// Extensions considerees comme des gros fichiers statiques qui changent rarement
// (audio, images) -> ceux-la restent en Cache First pour eviter de re-telecharger
// des Mo d'audio a chaque visite.
const HEAVY_ASSET_PATTERN = /\.(mp3|png|jpe?g|svg|webp|gif|ico)$/i;

// Installation — precache minimal + activation immediate de la nouvelle version
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activation — purge de TOUS les anciens caches (quel que soit leur nom) et prise
// de controle immediate de tous les onglets/PWA deja ouverts
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME && k !== RUNTIME_CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Firebase & CDN externes → toujours reseau (pas de cache, pas d'interception)
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('gstatic') ||
    url.hostname.includes('fonts.google') ||
    url.hostname.includes('cdnjs') ||
    url.hostname.includes('fontawesome') ||
    url.hostname.includes('unsplash')
  ) {
    return;
  }

  // Gros fichiers statiques (audio, images, icones) → Cache First : ils changent
  // rarement, inutile de les re-telecharger a chaque visite.
  if (HEAVY_ASSET_PATTERN.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Tout le reste (HTML, JS, JSON, CSS) → Network First : garantit que chaque
  // eleve recoit systematiquement la derniere version deployee des qu'il est en
  // ligne. Le cache ne sert que de secours hors-ligne.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match('/index.html'))
      )
  );
});
