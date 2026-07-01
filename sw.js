// sw.js
const CACHE_NAME = 'akhor-ghor-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/variables.css',
    '/css/reset.css',
    '/css/app.css',
    '/css/components.css',
    '/css/animations.css',
    '/js/app.js',
    '/js/router.js',
    '/js/storage.js',
    '/js/components/svg-loader.js',
    '/assets/logos/splash-logo.svg'
];

// Install: Cache all UI assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        ))
    );
});

// Fetch: Strategy - Network falling back to Cache
// This allows updates if online, but works perfectly offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
