self.addEventListener('install', evt => {
    console.log('service worker has been installed')
});

self.addEventListener('activate', evt => {
    console.log('service worker has been activated')
});


self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static-cache-v1')
      .then(function(cache) {
        return cache.addAll([
          '.',
          'index.html',
          'css/style.css',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
    .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });