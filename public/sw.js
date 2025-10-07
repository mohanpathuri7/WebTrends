const CACHE_NAME = 'nextjs-pwa-v1';
const OFFLINE_URL = '/offline';

const STATIC_CACHE_URLS = [
    '/',
    OFFLINE_URL,
    '/manifest.json',
    '/_next/static/css/app/layout.css',
    '/_next/static/chunks/webpack.js',
    '/about',
    '/contact'
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_CACHE_URLS).catch((error) => {
                console.error('Failed to cache during install:', error);
            });
        })
    );
    // Activate new service worker immediately
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Take control of all clients immediately
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Only handle same-origin requests (avoid CORS issues)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Handle navigation requests with network first, fallback to cache
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache a copy of the page visited (cache version control applied)
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // On fetch failure, fallback to cached page or offline page
                    return caches.match(event.request).then((cachedResponse) => {
                        return cachedResponse || caches.match(OFFLINE_URL);
                    });
                })
        );
        return;
    }

    // Cache-first for other resource requests
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // Fetch from network and cache the response if successful
            return fetch(event.request)
                .then((response) => {
                    // Only cache valid responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                })
                .catch(() => {
                    // For failed requests, fallback to offline page for documents
                    if (event.request.destination === 'document') {
                        return caches.match(OFFLINE_URL);
                    }
                });
        })
    );
});

// Background sync event - limited iOS support, but included for completeness
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    console.log('Background sync triggered');
    // Add custom logic here to retry failed requests or sync data
}

// Push notification event
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-96x96.png',
            vibrate: [100, 50, 100],
            data: data.data || {},
        };

        event.waitUntil(
            self.registration.showNotification(data.title || 'PWA Notification', options)
        );
    }
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        self.clients.matchAll().then((clientList) => {
            for (const client of clientList) {
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow('/');
            }
        })
    );
});
