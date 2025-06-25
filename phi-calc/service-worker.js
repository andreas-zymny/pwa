const basePath = './';

self.addEventListener('install', event => {
  event.waitUntil(
<<<<<<< HEAD
    caches.open('phi-calc-v1').then(cache => {
      return cache.addAll([
        ${basePath},
        ${basePath} + 'index.html',
        ${basePath} + 'index.js',
        ${basePath} + 'math.js',
        ${basePath} + 'math.js.map',
        ${basePath} + 'styles.css',
        ${basePath} + 'manifest.webmanifest',
        ${basePath} + 'icons/icon-192.png',
        ${basePath} + 'icons/icon-512.png',
        ${basePath} + '../fonts/Audiowide/Audiowide-Regular.ttf',
        ${basePath} + '../fonts/IBM_Plex_Sans/IBMPlexSans-VariableFont_wdth,wght.ttf',
        ${basePath} + '../fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf',
        ${basePath} + '../fonts/IBM_Plex_Sans_Condensed/IBMPlexSansCondensed-Regular.ttf',
        ${basePath} + '../fonts/Saira/Saira-VariableFont_wdth,wght.ttf',
        ${basePath} + '../fonts/Saira_Condensed/SairaCondensed-Regular.ttf',
        ${basePath} + '../fonts/Saira_Extra_Condensed/SairaExtraCondensed-Regular.ttf',
        ${basePath} + '../fonts/Saira_Semi_Condensed/SairaSemiCondensed-Regular.ttf',
        ${basePath} + '../fonts/Saira_Stencil_One/SairaStencilOne-Regular.ttf'
=======
    caches.open('phi-calc').then(cache => {
      return cache.addAll([
        basePath,
        basePath + 'index.html',
        basePath + 'index.js',
        basePath + 'math.js',
        basePath + 'math.js.map',
        basePath + 'styles.css',
        basePath + 'manifest.webmanifest',
        basePath + 'icons/icon-192.png',
        basePath + 'icons/icon-512.png',
        basePath + '../fonts/Audiowide/Audiowide-Regular.ttf',
        basePath + '../fonts/IBM_Plex_Sans/IBMPlexSans-VariableFont_wdth,wght.ttf',
        basePath + '../fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf',
        basePath + '../fonts/IBM_Plex_Sans_Condensed/IBMPlexSansCondensed-Regular.ttf',
        basePath + '../fonts/Saira/Saira-VariableFont_wdth,wght.ttf',
        basePath + '../fonts/Saira_Condensed/SairaCondensed-Regular.ttf',
        basePath + '../fonts/Saira_Extra_Condensed/SairaExtraCondensed-Regular.ttf',
        basePath + '../fonts/Saira_Semi_Condensed/SairaSemiCondensed-Regular.ttf',
        basePath + '../fonts/Saira_Stencil_One/SairaStencilOne-Regular.ttf'
>>>>>>> wsl@DE-5CG8398T4M
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
