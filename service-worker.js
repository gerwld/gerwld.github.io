
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

const CACHE_NAME = 'preact-cache-v1';
const MAX_AGE_SECONDS = 28 * 24 * 60 * 60; // 28 days in seconds;

workbox.setConfig({
  debug: false,
});

workbox.precaching.precacheAndRoute([{"url":"assets/anydo-tm-e1ec6585.webp","revision":null},{"url":"assets/chessgame-cbb683b0.webp","revision":null},{"url":"assets/chesspro-c4bc4159.webp","revision":null},{"url":"assets/chrome-c24bb399.svg","revision":null},{"url":"assets/docu-faefadb1.webp","revision":null},{"url":"assets/edge-9a8aa098.svg","revision":null},{"url":"assets/favicon.ico","revision":null},{"url":"assets/favicon.svg","revision":null},{"url":"assets/firefox-b35ea326.svg","revision":null},{"url":"assets/gallery-3c97019e.webp","revision":null},{"url":"assets/gpt-58517494.webp","revision":null},{"url":"assets/gwarda-0ef76358.webp","revision":null},{"url":"assets/igplus-76158402.webp","revision":null},{"url":"assets/index-bbd6f505.css","revision":null},{"url":"assets/index-bed5c47d.js","revision":null},{"url":"assets/lichesspro-99cb22b4.webp","revision":null},{"url":"assets/logo_EasyCalc-5dbd92f8.svg","revision":null},{"url":"assets/logo_MindfulTube-043c7e82.svg","revision":null},{"url":"assets/logo_instaplus-2ce4ba58.svg","revision":null},{"url":"assets/matro-9d82c43f.webp","revision":null},{"url":"assets/music-app-9ba45beb.webp","revision":null},{"url":"assets/nolk-template-b7c770c2.webp","revision":null},{"url":"assets/norithal-1d390378.webp","revision":null},{"url":"assets/onlinestats-1cfdcd67.webp","revision":null},{"url":"assets/pfp-ab3ccc9c.webp","revision":null},{"url":"assets/safari-8227ce76.svg","revision":null},{"url":"assets/spoplus-a38d4307.webp","revision":null},{"url":"assets/training-app-9f5f7236.webp","revision":null},{"url":"assets/twitter-clone-90fb0a36.webp","revision":null}]);

workbox.routing.registerRoute(
  /.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: MAX_AGE_SECONDS,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /.(?:css|html|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: MAX_AGE_SECONDS,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /.(?:woff2|woff|ttf|otf)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'fonts-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: MAX_AGE_SECONDS,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
          .then((fetchResponse) => {
            const responseClone = fetchResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseClone);
              });

            return fetchResponse;
          })
          .catch((error) => {
            console.error('Fetch error:', error);
            return new Response('Network request failed. Using fallback response.');
          });
      })
  );
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(precacheConfig.map(entry => entry.url));
      })
      .then(() => {
        console.log('Service Worker installed');
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
    .then(() => {
      console.log('Service Worker activated');
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: 'path/to/icon.png',
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
