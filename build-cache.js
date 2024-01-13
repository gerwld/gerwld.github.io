import fs from 'fs';
import path from 'path';

const BUILD_DIR = 'dist';
const projectRoot = process.cwd();
const assetsDirectory = path.join(projectRoot, BUILD_DIR + '/assets');

const excludeList = ['.DS_Store', 'someOtherFileOrDirectory'];
const excludeExtensions = ['.png', '.jpg', '.jpeg'];

const generatePrecacheConfig = () => {
  const precacheConfig = [];
  try {
    const files = fs.readdirSync(assetsDirectory).filter(file => {
      const fileExtension = path.extname(file).toLowerCase();
      return !excludeList.includes(file) && !excludeExtensions.includes(fileExtension);
    });

    files.forEach((file) => {
      let filePath = path.join(assetsDirectory, file);
      if (fs.statSync(filePath).isFile() && !excludeList.includes(file)) {
        precacheConfig.push({
          url: path.relative(projectRoot, path.join('assets/', file)),
          revision: null,
        });
      }
    });
  } catch (error) {
    console.error('Error reading assets directory:', error);
  }

  return precacheConfig;
};

const precacheConfig = generatePrecacheConfig();

const serviceWorkerContent = `
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

const CACHE_NAME = 'preact-cache-v1';
const MAX_AGE_SECONDS = 28 * 24 * 60 * 60; // 28 days in seconds;

workbox.setConfig({
  debug: false,
});

workbox.precaching.precacheAndRoute(${JSON.stringify(precacheConfig)});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
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
  /\.(?:css|html|js)$/,
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
  /\.(?:woff2|woff|ttf|otf)$/,
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
`;

fs.writeFileSync(path.join(projectRoot + "/" + BUILD_DIR, 'service-worker.js'), serviceWorkerContent);
fs.writeFileSync(path.join(projectRoot + "/public", 'service-worker.js'), serviceWorkerContent);
