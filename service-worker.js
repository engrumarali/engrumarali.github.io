const PRECACHE = 'precache-v1-4';
const PRECACHE_URLS = ['index.html', './', 'demo.js'];

const expectedCaches = ['precache-v1-4'];

self.addEventListener('install', event => {
  console.log('precache-v1-4 installing…');

  // cache a horse SVG into a new cache, precache-v1-3
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('precache-v1-4 now ready to handle fetches!');
    })
  );
  self.clients.claim();
  self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      console.log("💎 ------- send SET_OFFLINE_READY " + client);
      client.postMessage({
        command: 'SET_OFFLINE_READY',
      });
    });
  });
});

self.addEventListener('fetch', (event) => {
  console.log('🚩 Fetch Event');
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log('💠 Fetch Cache');
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          console.log('💡 Fetch Internet');
          return response;
        });
      })
    );
  }
});
