var CACHE_NAME = 'jac-github-io-cache-v1';
var urlsToCache = [
  '/',
  '/css/site.css',
  '/js/site.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});