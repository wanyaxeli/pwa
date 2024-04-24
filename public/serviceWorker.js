const cache_name='my_cache'
self.addEventListener('install',e=>{
    console.log('webserive installed successfully')
    e.waitUntil(
        caches.open(cache_name).then(cache=>{
            return cache.addAll([
                '/',
                '/index.html',
                './public/src/index.js',
            ])
            .then(()=>{self.skipWaiting()})
        })
    )
})

self.addEventListener('activate',e=>{
     console.log('activated service worker ')
    e.waitUntil(self.clients.claim())
})