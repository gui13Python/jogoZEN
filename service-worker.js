self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('zenbolhas-v1').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './imagens/caf48b82-325e-4d33-9a0b-6c14bd442278.png',
          './imagens/Logo Zen Bolhas com Bexigas.ico'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  