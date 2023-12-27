
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

const CACHE_NAME = 'preact-cache-v1';
const MAX_AGE_SECONDS = 28 * 24 * 60 * 60; // 28 days in seconds;

// Set up workbox options
workbox.setConfig({
  debug: false, // Set to true for debugging
});

// Use workbox to generate a list of files matching the glob pattern
workbox.precaching.precacheAndRoute([{"url":"assets/anydo-tm-cad31e2c.webp","revision":null},{"url":"assets/chessgame-cbb683b0.webp","revision":null},{"url":"assets/chesspro-c4bc4159.webp","revision":null},{"url":"assets/chrome-c24bb399.svg","revision":null},{"url":"assets/edge-9a8aa098.svg","revision":null},{"url":"assets/favicon.ico","revision":null},{"url":"assets/favicon.svg","revision":null},{"url":"assets/firefox-b35ea326.svg","revision":null},{"url":"assets/gallery-3c97019e.webp","revision":null},{"url":"assets/gpt-a7378444.webp","revision":null},{"url":"assets/igplus-aded6007.webp","revision":null},{"url":"assets/index-658b64a1.css","revision":null},{"url":"assets/index-b35538e8.js","revision":null},{"url":"assets/lichesspro-99cb22b4.webp","revision":null},{"url":"assets/logo_EasyCalc-5dbd92f8.svg","revision":null},{"url":"assets/logo_MindfulTube-043c7e82.svg","revision":null},{"url":"assets/logo_instaplus-2ce4ba58.svg","revision":null},{"url":"assets/music-app-9ba45beb.webp","revision":null},{"url":"assets/nolk-template-b7c770c2.webp","revision":null},{"url":"assets/onlinestats-1cfdcd67.webp","revision":null},{"url":"assets/pfp-85669cf1.webp","revision":null},{"url":"assets/safari-8227ce76.svg","revision":null},{"url":"assets/spoplus-a2e8c3eb.webp","revision":null},{"url":"assets/training-app-9f5f7236.webp","revision":null},{"url":"assets/twitter-clone-90fb0a36.webp","revision":null}]);


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

