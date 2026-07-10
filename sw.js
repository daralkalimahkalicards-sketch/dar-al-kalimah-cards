const CACHE_NAME = 'dar-al-kalimah-v3';

const STATIC_ASSETS = [
  '/dar-al-kalimah-cards/',
  '/dar-al-kalimah-cards/index.html',
  '/dar-al-kalimah-cards/auth.html',
  '/dar-al-kalimah-cards/modules.html',
  '/dar-al-kalimah-cards/manifest.json',
  '/dar-al-kalimah-cards/database.js',
  '/dar-al-kalimah-cards/tracker.js',
  '/dar-al-kalimah-cards/tracker-lecons.js',
  '/dar-al-kalimah-cards/icons/icon-192.png',
  '/dar-al-kalimah-cards/icons/icon-512.png'
];

// Installation — mise en cache des ressources statiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activation — nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — Network First pour Firebase, Cache First pour les assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Firebase & CDN → toujours réseau (pas de cache)
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('gstatic') ||
    url.hostname.includes('fonts.google') ||
    url.hostname.includes('cdnjs') ||
    url.hostname.includes('fontawesome')
  ) {
    return;
  }

  // Ressources locales → Cache First, fallback réseau
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match('/dar-al-kalimah-cards/index.html'));
    })
  );
});
