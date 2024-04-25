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
self.addEventListener('fetch',e=>{
    console.log(`fetching ${e.request.url}`)
    if (navigator.onLine){
      let fetchRequest=e.request.clone()
      return fetch(fetchRequest).then(res=>{
        if (!res|| res.status !==200 || res.type ==='basic'){
            return res
        }
        let resonseTocache=res.clone()
        caches.open(cache_name).then(cache=>{
            cache.put(e.request,resonseTocache)
            return res
        })
    })
    }
    else{
        e.respondWith(
            caches.match(e.request)
            .then(res=>{
                return res
            })
        )
    }
})