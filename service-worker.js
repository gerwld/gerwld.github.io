
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

const CACHE_NAME = 'preact-cache-v1';
const MAX_AGE_SECONDS = 28 * 24 * 60 * 60; // 28 days in seconds;

// Set up workbox options
workbox.setConfig({
  debug: false, // Set to true for debugging
});

// Use workbox to generate a list of files matching the glob pattern
workbox.precaching.precacheAndRoute([]);


// Cache expiration strategy for images, CSS, HTML, JS, and fonts
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
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});

