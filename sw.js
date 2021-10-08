// On install the application shell cached
self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
    return cache.add('index.html', 'app.js', 'images.js', './static/getImages.js', './images')

    // if you have css file and app.js files
    // please add here as well to be cached! we havent added as we have a simple app
    })
  );
});
    // with request network
    self.addEventListener('fetch', function(event) {
    event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
    // return it if there is a response, or else fetch again
    return response || fetch(event.request);
    })
  );
});
    